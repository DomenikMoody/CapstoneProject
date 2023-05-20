from flask import Blueprint, jsonify, redirect, request
from app.models import Playlist, db, User, Video
from app.forms import PlaylistForm, EditPlaylistForm, AddVideoToPlaylistForm
from flask_login import login_required
from app.api.aws_helpers import (get_unique_filename,upload_file_to_s3,remove_file_from_s3,)


playlist_routes = Blueprint("playlist", __name__)


@playlist_routes.route("/")
def get_all_playlists():
    playlist = Playlist.query.all()
    playlist_list = [pl.to_dict() for pl in playlist]
    return jsonify(playlist_list)


@playlist_routes.route("/<int:id>")
def get_playlist_by_id(id):
    playlist = Playlist.query.get(id)
    return playlist.to_dict()


@playlist_routes.route("/new", methods=["POST"])
@login_required
def create_playlist():
    form = PlaylistForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        playlistPicture = form.data["playlist_image"]
        playlistPicture.filename = get_unique_filename(playlistPicture.filename)
        upload = upload_file_to_s3(playlistPicture)

        if "url" not in upload:
            return jsonify(upload["errors"])

        playlist_image = upload["url"]


        video_list = []
        print(form.data["playlist_videos"])
        for video_id in form.data["playlist_videos"].split(","):
            video = Video.query.get(video_id)
            video_list.append(video)
        new_playlist = Playlist(
            user_id=form.data["user_id"],
            name=form.data["name"],
            playlist_image=playlist_image,
        )

        new_playlist.playlist_videos.extend(video_list)
        print(new_playlist ,"HERE IS THE NEW PLAYLIST +++++++++++++++++++++++++++++++++++++++++++++++")
        db.session.add(new_playlist)
        db.session.commit()
        redirect("/")
    else:
        return jsonify({"message": "Bad Data"})


@playlist_routes.route("/<int:id>", methods=["PUT"])
def edit_playlist_by_id(id):
    playlist = Playlist.query.get(id)
    form = EditPlaylistForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        if form.data["playlist_image"]:
            image = form.data["playlist_image"]
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if "url" not in upload:
                return upload["errors"]
            playlist_image = upload["url"]

            playlist.playlist_image = playlist_image
        playlist.name = form.data["name"]

        db.session.commit()
        return playlist.to_dict()
    else:
        return "BAD DATA IN EDIT PLAYLIST ROUTE"


@playlist_routes.route("/add", methods=["PUT"])
@login_required
def add_video_to_playlists():
    form = AddVideoToPlaylistForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        playlistList = form.data["playlist_ids"].split(",")
        playlists = [Playlist.query.get(id) for id in playlistList]
        video = Video.query.get(form.data["video_id"])

        added = [playlist.playlist_videos.append(video) for playlist in playlists]

        db.session.commit()
    return jsonify("success or failure who knows")


@playlist_routes.route("/<int:playlist_id>/delete/<int:video_id>", methods=["DELETE"])
@login_required
def remove_video_from_playlist(playlist_id, video_id):
    playlist = Playlist.query.get(playlist_id)
    video = Video.query.get(video_id)
    playlist.playlist_videos = [
        videos for videos in playlist.playlist_videos if videos.id != video_id
    ]
    db.session.commit()

    return jsonify({"message": f"{playlist.playlist_videos} has been updated"})


@playlist_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_playlist_by_id(id):
    playlist = Playlist.query.get(id)

    db.session.delete(playlist)
    db.session.commit()

    return jsonify({"message": "Playlist successfully deleted"})
