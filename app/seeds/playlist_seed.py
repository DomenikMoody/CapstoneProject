from app.models import db, Playlist, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint, sample, choice

def seed_playlist(seeded_users, seeded_videos):


    Playlist1 = Playlist(
        user = seeded_users[0],
        name="Guilty Crown",
        playlist_image="http://otakuxpress.s3.amazonaws.com/5e47f1df03dd49b381f8b0cf59e10fdd.jpg",
        playlist_videos = [seeded_videos[0],seeded_videos[1],seeded_videos[2],seeded_videos[3],seeded_videos[4],seeded_videos[5],seeded_videos[6],seeded_videos[7],seeded_videos[8],seeded_videos[9],seeded_videos[10],seeded_videos[11],seeded_videos[12],seeded_videos[13],seeded_videos[14],seeded_videos[15],seeded_videos[16],seeded_videos[17],seeded_videos[18],seeded_videos[19],seeded_videos[20],seeded_videos[21],]
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
