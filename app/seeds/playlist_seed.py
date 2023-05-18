from app.models import db, Playlist, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint, sample, choice

def seed_playlist(seeded_users, seeded_videos):


    Playlist1 = Playlist(
        user = seeded_users[0],
        name="Naruto",
        playlist_image="",
        playlist_videos = sample(seeded_videos, randint(0, len(seeded_videos)//2))
    )
    Playlist2 = Playlist(
        user = seeded_users[1],
        name="Bleach",
        playlist_image="",
        playlist_videos = sample(seeded_videos, randint(0, len(seeded_videos)//2))
    )
    Playlist3 = Playlist(
        user = seeded_users[2],
        name="One Piece",
        playlist_image="",
        playlist_videos = sample(seeded_videos, randint(0, len(seeded_videos)//2))
    )

    db.session.add(Playlist1)
    db.session.add(Playlist2)
    db.session.add(Playlist3)
    db.session.commit()

def undo_playlist():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))

    db.session.commit()
