from .db import db, add_prefix_for_prod, environment, SCHEMA
from .user import User
from .PlaylistVideos import playlist_videos
from .VideoLikes import likes

class Video(db.Model):
    __tablename__ = 'videos'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    artist = db.Column(db.String(255))
    aws_url = db.Column(db.String(255))
    uploader_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    video_image = db.Column(db.String(255), nullable=False)
    about_video = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)

    video_playlists = db.relationship(
        "Playlist",
        secondary=playlist_videos,
        back_populates='playlist_videos'
    )

    uploader = db.relationship(
        "User",
        overlaps="user_likes",
        back_populates="videos"
    )

    video_likes = db.relationship(
        "User",
        secondary=likes,
        overlaps="videos,uploader",
        back_populates="user_likes"
    )
    comments = db.relationship(
        "Comment",
        back_populates="video"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'title' : self.title,
            'artist' : self.artist,
            'awsUrl' : self.aws_url,
            'uploader': self.uploader.username,
            'videoImage': self.video_image,
            'aboutVideo': self.about_video,
            'genre': self.genre
        }
