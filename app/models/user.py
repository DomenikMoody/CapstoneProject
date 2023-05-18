from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .VideoLikes import likes

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(1500))
    profile_image = db.Column(db.String(255))

    playlists = db.relationship(
        "Playlist",
        back_populates="user",
        cascade='delete-orphan, all'
    )

    videos = db.relationship(
        "Video",
        back_populates="uploader",
        cascade='delete-orphan, all'
    )

    user_likes = db.relationship(
        "Video",
        secondary=likes,
        overlaps="videos",
        back_populates="video_likes"
    )
    comments = db.relationship(
        "Comment",
        back_populates = "user"
    )


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'profileImage': self.profile_image,
            'playlists': [playlist.to_dict() for playlist in self.playlists],
            'likes': [song.id for song in self.user_likes]
        }
