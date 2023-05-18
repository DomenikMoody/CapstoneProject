from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text

def seed_comment(seeded_users, seeded_videos):
    Comment1 = Comment(
        comment = "this anime is so good",
        user = seeded_users[0],
        video = seeded_videos[0]
    )
    Comment2 = Comment(
        comment = "this anime is not good",
        user = seeded_users[1],
        video = seeded_videos[1]
    )
    Comment3 = Comment(
        comment = "this anime is ok",
        user = seeded_users[2],
        video = seeded_videos[2]
    )

    db.session.add(Comment1)
    db.session.add(Comment2)
    db.session.add(Comment3)
    db.session.commit()

def undo_comment():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
