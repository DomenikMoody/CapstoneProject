from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    prince = User(
        username='Prince',
        first_name='Domenik',
        last_name='Moody',
        bio='If statements in my vains, anime in my heart, i dont know if i can come up with a more cringe statement',
        profile_image='http://otakuxpress.s3.amazonaws.com/37fe74b4d4384929bd236b5253db2bbc.jpg',
        email='prince@aa.io',
        password='password')
    marnie = User(
        username='marnie',
        first_name='first Two',
        last_name='Last Two',
        bio='',
        profile_image='',
        email='marnie@aa.io',
        password='password')
    bobbie = User(
        username='bobbie',
        first_name='first Three',
        last_name='Last Three',
        bio='',
        profile_image='',
        email='bobbie@aa.io',
        password='password')
    demo = User(
        username='Demo',
        first_name='first One',
        last_name='Last One',
        bio='',
        profile_image='',
        email='demo@aa.io',
        password='password')

    db.session.add(prince)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()

    return [prince, demo, marnie, bobbie]


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
