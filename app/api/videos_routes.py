from flask import Blueprint, jsonify, redirect, request
from app.models import Video, db, User
from app.forms import VideoForm, EditVideoForm
from flask_login import login_required
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3


video_routes = Blueprint('video',__name__)

@video_routes.route('/')
def get_all_video():
    videos = Video.query.all()
    videos_list = [video.to_dict() for video in videos]
    return jsonify(videos_list)


@video_routes.route('/<int:id>')
def get_video_by_id(id):
    video = Video.query.get(id)
    return video.to_dict()

@video_routes.route('/new', methods=['POST'])
@login_required
def create_video_by_id():
    form = VideoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        video = form.data["aws_url"]
        video.filename = get_unique_filename(video.filename)
        upload = upload_file_to_s3(video)

        videoPicture = form.data['video_image']
        videoPicture.filename = get_unique_filename(videoPicture.filename)
        uploadpic = upload_file_to_s3(videoPicture)
        if "url" not in upload:
            return upload["errors"]
        if "url" not in uploadpic:
            return upload["errors"]
        video_pic = uploadpic["url"]
        aws_url = upload["url"]

        new_video = Video(
            title = form.data['title'],
            artist = form.data['artist'],
            aws_url = aws_url,
            video_image = video_pic,
            uploader_id = form.data['uploader_id']
        )

        db.session.add(new_video)
        db.session.commit()
        return jsonify(new_video.to_dict())
    else:
        return jsonify({"error":"Bad Data"})

@video_routes.route('/<int:id>', methods=['PUT'])
def edit_video_by_id(id):
    video = Video.query.get(id)
    form = EditVideoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        video.title = form.data['title']
        video.artist = form.data['artist']
        db.session.commit()
        return video.to_dict()
    else:
        return jsonify({"error":"Bad Data"})



@video_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_video_by_id(id):
    """Delete video from db as well as from
    AWS bucket IF it is not a seeded video"""

    video = Video.query.get(id)
    db.session.delete(video)
    db.session.commit()


    return jsonify({
        'message': 'video deleted'
    })

@video_routes.route('/<int:id>/likes/users/<int:userId>',methods=["POST"])
@login_required
def like_video_by_id(id, userId):
    video = Video.query.get(id)
    user = User.query.get(userId)
    video.video_likes.append(user)
    db.session.commit()

    return jsonify({
        "message": f"{video.title} liked by {user.username}"
    })


@video_routes.route('/<int:id>/likes/users/<int:userId>',methods=["DELETE"])
@login_required
def unlike_video_by_id(id, userId):
    video = Video.query.get(id)
    user = User.query.get(userId)
    video.video_likes = [user for user in video.video_likes if user.id != userId]
    db.session.commit()

    return jsonify({
        "message": f"{video.title} unliked by {user.username}"
    })
