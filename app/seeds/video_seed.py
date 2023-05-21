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
        video_image ="http://otakuxpress.s3.amazonaws.com/fcd07aed4c33482487977b9c51da19a7.jpg",
        about_video = 'In 2039, Shu is a student in GHQ-ruled Japan. He meets Inori, who stole the Void Genome. Joining Funeral Parlor, Shu rescues Inori and gains the "Power of the King." He extracts her Void to destroy an Endlave.',
        genre = "Action fiction"
    )
    video2 = Video(
        title='Survival of the Fittest: The Fit',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b0fcb3e13cb34d7898646f4adce6fc83.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/689a3c9cb8934a46a2d89772b13ce7bf.jpg",
        about_video = "Shu gains Void power, joins Funeral Parlor. He shields Gai from Guin's attack, refuses to join. Inori transfers to his school. #VoidGenome #FuneralParlor #GHQ",
        genre = "Action fiction"
    )
    video3 = Video(
        title='Void-Sampling(Phanerosis)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/04806074572741618e754263a714bbe2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/e751476b7461419d990dcaa480b689e4.jpg",
        about_video = 'Shu is shocked as Inori transfers to his school and lives with him. GHQ tasks Segai to track the Norma Gene. Gai reveals "Sugar" saw Shu in Roppongi. Inori teaches Shu to draw out Voids. Yahiro betrays Shu to GHQ. Segai approaches Shu.',
        genre = "Action fiction"
    )
    video4 = Video(
        title='Flux(Indecision)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/5c8cc2fc560545a79f89c91197d18386.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/9a4b63f2fc3a4c63915cf0ce53564d2b.jpg",
        about_video = "Shu captured, taken to GHQ Isolation Facility. Segai reveals Yahiro's motive. Gai plans to rescue Kenji. Inori breaks in to save Shu. Shu uses Kenji's Void. Shu reluctantly joins Gai, keeps transmitter secret",
        genre = "Action fiction"
    )
    video5 = Video(
        title='A Preparation(Training)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/952722836c504bea956b3aff2925b23a.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/deade9e84b6b4822a976102d826fa009.jpg",
        about_video = "Shu brought to Funeral Parlor HQ. Gai plans trial. Ayase trains Shu. Shu meets Inori, realizes Gai's plan. Inori gives Gai blood transfusion. Shu passes mock battle, receives pen. Gai attacked by Leukocyte satellite laser.",
        genre = "Action fiction"
    )
    video6 = Video(
        title='Leukocytes(Cage)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/2493d8b751ef46d19c1e52062b2237b7.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/9b8367e19a6b470bab3e74bafe7dfb8d.jpg",
        about_video = "Gai plans dam attack. Shu disagrees but later agrees. Funeral Parlor infiltrates dam, Shu hacks control system. Gai makes deal with Segai, destroys Leukocyte I. Inori and Kenji combine Voids to destroy satellites. Shu joins Funeral Parlor.",
        genre = "Action fiction"
    )
    video7 = Video(
        title='Temptation (Round Dance)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/8f03dbb6c36343b9be01aa60de9fcbad.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/e26466ba5f114b558b292287aa0dbc38.jpg",
        about_video = "Shu deals with rumors at school. Arisa fabricates a story. Haruka welcomes Inori. Gai plans new supply route. Ship attacked, Shu and Gai intervene. Shu uses Arisa's shield Void to defend. Okina agrees to partnership. Shu embraces his power.",
        genre = "Action fiction"
    )
    video8 = Video(
        title='Courtship Behavior (Hot Summer Day)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0a796d7812244f5ca24ec5dedcffb54d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/c27869f60ff44c748b4b7b23f43cd4d1.jpg",
        about_video = "Shu, Inori, and Gai take classmates to a beach resort as a mission. Shu draws out Souta's Void, but the item they seek is missing. Keido holds it. Shu and Souta reconcile, and Inori explains how Voids change with relationships.",
        genre = "Action fiction"
    )
    video9 = Video(
        title='Prey (Predation)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/8347267be87041e0849983599d895279.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/92f21e51ff0941e68093b9413836d9f8.jpg",
        about_video = "Yahiro escapes with Jun. GHQ targets Jun. Shu extracts Yahiro's Void. Jun's memories reveal Yahiro's darkness. Jun asks Shu to use his Void to end his life. Shu reluctantly agrees. Yahiro is devastated.",
        genre = "Action fiction"
    )
    video10 = Video(
        title='Retraction (Degeneration)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/d78b8d127eb84fb888566fb0b55fcee2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d07d2d3890d345d08125f4df1eb13f8c.jpg",
        about_video = "Shu's hallucinations affect his performance. Funeral Parlor plans to steal the virus. Trap set by Segai. Hare confronts Shu. Virus spreads, chaos ensues. Keido takes control.",
        genre = "Action fiction"
    )
    video11 = Video(
        title='Resonance (Sympathetic)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/f3ccea20b8fb471b9e225d99ea381e6d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/8e28864c02a0470b89bba4cecbcf734d.jpg",
        about_video = "Apocalypse Virus spreads. Daryl kills father. Keido takes over. Shu seeks help. Haruka, Inori, Gai fight. Shu defeats GHQ. Yu extracts Inori's Void. Crystal tower forms",
        genre = "Action fiction"
    )
    video12 = Video(
        title='Temptation (Rebirth)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0d6a743874324f16abca4b1e0120b35a.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d3652053626b483f96cbd2cdd2d88679.jpg",
        about_video = "Shu remembers past, Gai sacrifices to save Mana. Tower crumbles, Shu mourns.",
        genre = "Action fiction"
    )
    video13 = Video(
        title='Isolation (School)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/7dbe6068c7264791b41ad350bb08d1c3.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/56e9c80ec94344d1a8380d509fbe6331.jpg",
        about_video = "Shu's power evolves, school festival held for refugees. Segai sends Daryl to spy. Attack on school, Ayase's Void used. Keido announces 10-year quarantine of Loop 7",
        genre = "Action fiction"
    )
    video14 = Video(
        title='Election (Turbulence)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/019ea042eda747e4ac9047f83e9c136d.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/c229b16a270d466f851cc6ae839fdab6.jpg",
        about_video = "Student council distrusts Arisa, Genome Resonance Gauge discovered. Segai plans to exterminate Loop 7. Rumors spread, Shu reveals affiliation with Funeral Parlor. Shu elected as student council president. Prioritizing powerful Voids.",
        genre = "Action fiction"
    )
    video15 = Video(
        title='Sacrifice (Confession)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/1873012af13c46e5a7e01a2c21c64477.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/f15e65e163a640b09e2afd3998c9ef16.jpg",
        about_video = "Students prioritize vaccination, Shu opposes ranking system. Blockade closes in, vaccines running low. Weaker students leave, attacked by Anti-Bodies. Hare sacrifices herself to save Shu. Shu blames Souta, becomes ruthless king.",
        genre = "Action fiction"
    )
    video16 = Video(
        title='The Tyrant (Kingdom)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/31adbb6f4b3f4b5191448a7b24584760.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/1ffe126deea744dd9145402e02f63589.jpg",
        about_video = "Argo sent to rescue Arisa for peace treaty. Shu's ruthless rule shocks Argo. Students accept Shu's leadership. Argo escapes, confronts Shu. Shu learns about Voids and their consequences. Arisa's warning stopped by Inori. Ming Hua Group cancels help. Gai resurrected by Keido and Haruka.",
        genre = "Action fiction"
    )
    video17 = Video(
        title='Exodus (Revolution)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b14a34d63ab346c7802fe2a789406f7f.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/7d9f7336e31a48f89e71226c42d4a87f.jpg",
        about_video = "Shu seeks revenge for Hare's death. Arisa turns against him and spreads a rumor. Yahiro is exiled. Students attack the Ghost Unit. Shu destroys Tokyo Tower, but is betrayed by Arisa. Gai takes the Void Genome. World leaders vote to destroy Japan.",
        genre = "Action fiction"
    )
    video18 = Video(
        title='Dear...(Vagrants)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/ad66d075e2124fc29fca67c0075981ab.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/1db6fe4ac3f64419a0c290f4e7735ee4.jpg",
        about_video ="Shu and his friends fight to save Inori from Gai's control. Inori sacrifices herself to save Shu, leaving him devastated but determined to create a better future. They rebuild society and work towards a virus-free world.",
        genre = "Action fiction"
    )
    video19 = Video(
        title='Rebirth (Atonement)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/d71ee1db16b34cc0b03f85d5b59a0471.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/37a11fb88ded4381886e01a157eb11ec.jpg",
        about_video = "Shu absorbs the Void Genome, gaining a new crystallized arm with the power to use others' Voids. He defeats Segai and saves his friends, but it is revealed that he has also absorbed a viral infection.",
        genre = "Action fiction"
    )
    video20 = Video(
        title='A Diary (Remembrance)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/b58c65a7e46a480d9145608dc2e30ffd.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/d4d8baf3ea7f4cd88da5686218b5f393.jpg",
        about_video = "Shu and allies attack GHQ to stop Gai's world destruction plan. They face Da'ath and the Apocalypse Virus, carrying Voids and Mana within Inori.",
        genre = "Action fiction"
    )
    video21 = Video(
        title='Emergence (Eclosion)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/0899f2e2a2c2470580e72264a7f3e3a3.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/fa0ba95982ae48a08b28efaf6f73f48c.jpg",
        about_video = "Shu and Funeral Parlor fight against Gai and Da'ath to rescue Inori, who has transformed into Mana. Shu's determination to save her remains unwavering.",
        genre = "Action fiction"
    )
    video22 = Video(
        title='Convergence(Prayer)',
        artist='Production I.G',
        aws_url='http://otakuxpress.s3.amazonaws.com/3f980ed8b8924e37a714b869dbae4ed2.mp4',
        uploader = seeded_users[0],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image ="http://otakuxpress.s3.amazonaws.com/2512891811b143e3b56d405aac226b92.jpg",
        about_video = "Shu defeats Gai, saving the world from the Fourth Apocalypse. Inori sacrifices herself to save Shu, and Tokyo is rebuilt. Years later, Shu, visually impaired, celebrates with his friends. He remembers Inori by a lakeside, treasuring their memories.",
        genre = "Action fiction"
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
