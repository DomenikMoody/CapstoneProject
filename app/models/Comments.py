from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def createdAtfunc():
        return datetime.now()

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    video_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('videos.id')))
    createdAt = db.Column(db.DateTime, default=createdAtfunc)

    user = db.relationship(
        "User",
        back_populates="comments"
    )

    video = db.relationship(
        "Video",
        back_populates="comments"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.username,
            'userid': self.user_id,
            'videoId': self.video_id,
            'comment': self.comment,
            'userimage': self.user.profile_image,
            'createdAt': self.createdAt

        }
