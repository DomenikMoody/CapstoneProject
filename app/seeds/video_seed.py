from app.models import db, User, environment, SCHEMA, Video
from sqlalchemy.sql import text
from random import choice, sample, randint

def seed_videos(seeded_users):
    video1 = Video(
        title='Outbreak:Genesis',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/7fc715b577fa46328069b8c81902a04c.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/fcd07aed4c33482487977b9c51da19a7.jpg"
    )
    video2 = Video(
        title='Survival of the Fittest: The Fit',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b0fcb3e13cb34d7898646f4adce6fc83.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/689a3c9cb8934a46a2d89772b13ce7bf.jpg"
    )
    video3 = Video(
        title='Void-Sampling(Phanerosis)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/04806074572741618e754263a714bbe2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/e751476b7461419d990dcaa480b689e4.jpg"
    )
    video4 = Video(
        title='Flux(Indecision)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/5c8cc2fc560545a79f89c91197d18386.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/9a4b63f2fc3a4c63915cf0ce53564d2b.jpg"
    )
    video5 = Video(
        title='A Preparation(Training)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/952722836c504bea956b3aff2925b23a.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/deade9e84b6b4822a976102d826fa009.jpg"
    )
    video6 = Video(
        title='Leukocytes(Cage)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/2493d8b751ef46d19c1e52062b2237b7.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/9b8367e19a6b470bab3e74bafe7dfb8d.jpg"
    )
    video7 = Video(
        title='Temptation (Round Dance)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/8f03dbb6c36343b9be01aa60de9fcbad.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/e26466ba5f114b558b292287aa0dbc38.jpg"
    )
    video8 = Video(
        title='Courtship Behavior (Hot Summer Day)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0a796d7812244f5ca24ec5dedcffb54d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/c27869f60ff44c748b4b7b23f43cd4d1.jpg"
    )
    video9 = Video(
        title='Prey (Predation)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/8347267be87041e0849983599d895279.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/92f21e51ff0941e68093b9413836d9f8.jpg"
    )
    video10 = Video(
        title='Retraction (Degeneration)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/d78b8d127eb84fb888566fb0b55fcee2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d07d2d3890d345d08125f4df1eb13f8c.jpg"
    )
    video11 = Video(
        title='Resonance (Sympathetic)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/f3ccea20b8fb471b9e225d99ea381e6d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/8e28864c02a0470b89bba4cecbcf734d.jpg"
    )
    video12 = Video(
        title='Temptation (Rebirth)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0d6a743874324f16abca4b1e0120b35a.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d3652053626b483f96cbd2cdd2d88679.jpg"
    )
    video13 = Video(
        title='Isolation (School)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/7dbe6068c7264791b41ad350bb08d1c3.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/56e9c80ec94344d1a8380d509fbe6331.jpg"
    )
    video14 = Video(
        title='Election (Turbulence)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/019ea042eda747e4ac9047f83e9c136d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/c229b16a270d466f851cc6ae839fdab6.jpg"
    )
    video15 = Video(
        title='Sacrifice (Confession)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/1873012af13c46e5a7e01a2c21c64477.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/f15e65e163a640b09e2afd3998c9ef16.jpg"
    )
    video16 = Video(
        title='The Tyrant (Kingdom)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/31adbb6f4b3f4b5191448a7b24584760.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/1ffe126deea744dd9145402e02f63589.jpg"
    )
    video17 = Video(
        title='Exodus (Revolution)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b14a34d63ab346c7802fe2a789406f7f.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/7d9f7336e31a48f89e71226c42d4a87f.jpg"
    )
    video18 = Video(
        title='Dear...(Vagrants)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/ad66d075e2124fc29fca67c0075981ab.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/1db6fe4ac3f64419a0c290f4e7735ee4.jpg"
    )
    video19 = Video(
        title='Rebirth (Atonement)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/d71ee1db16b34cc0b03f85d5b59a0471.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/37a11fb88ded4381886e01a157eb11ec.jpg"
    )
    video20 = Video(
        title='A Diary (Remembrance)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b58c65a7e46a480d9145608dc2e30ffd.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d4d8baf3ea7f4cd88da5686218b5f393.jpg"
    )
    video21 = Video(
        title='Emergence (Eclosion)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0899f2e2a2c2470580e72264a7f3e3a3.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/fa0ba95982ae48a08b28efaf6f73f48c.jpg"
    )
    video22 = Video(
        title='Convergence(Prayer)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/3f980ed8b8924e37a714b869dbae4ed2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/2512891811b143e3b56d405aac226b92.jpg"
    )


    all_videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12, video13, video14, video15, video16, video17, video18, video19, video20, video21, video22]
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
