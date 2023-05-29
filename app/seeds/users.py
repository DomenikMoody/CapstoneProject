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
        first_name='Amelia',
        last_name='Westwood',
        bio="I am an adventurous soul with a passion for exploring the unknown. Nature lover, avid hiker, and seeker of hidden treasures. Embracing life's mysteries one step at a time.",
        profile_image='http://otakuxpress.s3.amazonaws.com/5e67ec93de724ff989e406f5622198e0.jpg',
        email='marnie@aa.io',
        password='password')
    bobbie = User(
        username='bobbie',
        first_name='Bobby',
        last_name='Jensen',
        bio='I am a creative spirit with an eye for beauty in the everyday. Photographer, dreamer, and lover of all things vintage. Capturing moments that tell stories and preserving memories through the lens',
        profile_image='http://otakuxpress.s3.amazonaws.com/b45fad58232347499c9b984fa482a679.jpg',
        email='bobbie@aa.io',
        password='password')
    demo = User(
        username='Demo',
        first_name='FirstName',
        last_name='LastName',
        bio='',
        profile_image='',
        email='demo@aa.io',
        password='password')

    db.session.add(prince)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(demo)
    db.session.commit()

    return [prince, marnie, bobbie, demo]


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
