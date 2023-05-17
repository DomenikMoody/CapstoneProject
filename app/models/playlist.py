from .db import db, environment, SCHEMA, add_prefix_for_prod
from .PlaylistVideos import playlist_videos
from .vidoes import Song

class Playlist(db.Model):
    __tablename__ = 'playlists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    name = db.Column(db.String(40), nullable=False)
    playlist_image = db.Column(db.String(255), nullable=False)

    playlist_videos = db.relationship(
        "video",
        secondary=playlist_videos,
        back_populates='video_playlists'
    )

    user = db.relationship(
        "User",
        back_populates="playlists"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'creator': self.user.username,
            'name': self.name,
            'playlistImage': self.playlist_image,
            'songs': [video.to_dict() for video in self.playlist_videos]
        }
