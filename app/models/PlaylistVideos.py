from .db import db, add_prefix_for_prod, environment, SCHEMA

playlist_videos = db.Table(
    'playlist_video',
    db.Model.metadata,
    db.Column("videos", db.Integer, db.ForeignKey(add_prefix_for_prod('videos.id')), primary_key=True),
    db.Column("playlists", db.Integer, db.ForeignKey(add_prefix_for_prod('playlists.id')), primary_key=True)
)

if environment == "production":
    playlist_videos.schema = SCHEMA
