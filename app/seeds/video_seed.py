from app.models import db, User, environment, SCHEMA, Video
from sqlalchemy.sql import text
from random import choice, sample, randint

def seed_videos(seeded_users):
    video1 = Video(
        title='Anime1',
        artist='Idk',
        aws_url='video1',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="video1Thumbnail1"
    )
    video2 = Video(
        title='Anime2',
        artist='idk',
        aws_url='video2',
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="video1Thumbnail2"
    )
    video3 = Video(
        title='Anime3',
        artist='idk',
        aws_url='video3',
        uploader = seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="video1Thumbnail3"
    )


    all_videos = [video1, video2, video3]
    add_videos = [db.session.add(video) for video in all_videos]
    db.session.commit()

    return all_videos

def undo_videos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(
            text('DELETE FROM videos')
        )
    db.session.commit()
