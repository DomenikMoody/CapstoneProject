from .db import db, environment, SCHEMA, add_prefix_for_prod

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    video_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('videos.id')))

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
            'userId': self.user_id,
            'videoId': self.video_id,
            'comment': self.comment,
        }