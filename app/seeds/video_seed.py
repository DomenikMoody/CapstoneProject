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
        about_video = "Argo rescues Arisa, confronts ruthless Shu, reveals Voids' consequences. Ming Hua Group cancels aid. Gai resurrected.",
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
    video23 = Video(
        title="Quantum of Trust",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/1a7d0bfb1d0b4859a27eef4937c66fa1.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/4c9bc3bb569440c28d7dcd8db200f949.jpg",
        about_video = " Lugh trains rookie, eliminates crime guild members. Flashback reveals past life while he accepts contract to assassinate corrupt nobles aiding slave auction.",
        genre = "Isekai"
    )
    video24 = Video(
        title="Deal of Reincarnation",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/50725872f4744e80866b9aa49e15aee2.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/b1a62a5ae5e64337aca80a718923d3ce.jpg",
        about_video = "The Assasin is reborn as a child of the Tuatha Dé family, a noble house of assassins. Lugh finds a magic teacher named Dia Viekone.",
        genre = "Isekai"
    )
    video25 = Video(
        title="Magic of Bonds",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/323fb4d2031e4f4183dd6b510c3ee2ca.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/503e780bf9ca4d099c15f3e5ce852f28.jpg",
        about_video = "Dia and Lugh become emotionally attached to each other. Lugh's father decides that it is time for Lugh to assassinate someone for the first time.",
        genre = "Isekai"
    )
    video26 = Video(
        title="Plan of Goddess",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/b2ee8b59fcda441d818ee22a0333e5a6.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/571653b3ee4f4da689aab4f1c5291b12.jpg",
        about_video = "Lugh saves Tarte from wolves, takes her home, gains father's permission to train her as assassin.",
        genre = "Isekai"
    )
    video27 = Video(
        title="Qualifications of Assassins",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/0d37a57a9ceb4dbdac90b10d5276188e.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/5bef85e680394979b569430455faed87.jpg",
        about_video = " Lugh proves Tarte's innocence, joins Cian in assassinations. Assumes Balor identity. Defeats Ronah, gifts sword. Lugh and Tarte head to Balor region.",
        genre = "Isekai"
    )
    video28 = Video(
        title="Residence of Girls",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/c8c30b724244430bb861afd6aa8bca18.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/a454412d717943829db82be8b0a86f0a.jpg",
        about_video = "Maha and friends captured by bandits, forced into prostitution. Lugh saves Maha, exposes noble's crimes. Prostitution ring shut down, Noine's scars healed. Maha finds new home with Lugh.",
        genre = "Isekai"
    )
    video29 = Video(
        title="Life of Falsehoods",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/46fee7d5fc9e401391b67c9e136513e2.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/f33325093fed417a8fa2d7cd20d343a6.jpg",
        about_video = "Lugh opens cosmetics shop, Orna, boosting Balor profits. Spies infiltrate, but one captured with no useful info. Lugh seeks magical knowledge from Dia. Surprised by unexpected feelings for Maha and Tarte.",
        genre = "Isekai"
    )
    video30 = Video(
        title="Rite of Choices",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/47badbd607bf43978a15eac2e0ff5d28.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/e82fc5dc8a464603ae8c6e9e6212700f.jpg",
        about_video = "Lugh entrusts Maha with Orna, returns home for assassin training. Attacked by wolves, suspects Hero's arrival. Cian offers peaceful merchant life, Lugh chooses assassin path for Dia's love. Cian assigns first target.",
        genre = "Isekai"
    )
    video31 = Video(
        title="Compensation of Assassination",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/384457ae2d49497fa0f7dd6db33f0576.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/23cf5936f96f4666b760c123afc2bcf7.jpg",
        about_video = "Lugh targets Count Venkaur, uncovers vizein criminals. Orna's success at mansion. Silently snipes count, sees grieving wife. First mission as free man, holds its significance.",
        genre = "Isekai"
    )
    video32 = Video(
        title="First of Dates",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/bca3ec34b5b24ddc8a24b8267d3754c0.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/95589d07a8c74e3bb0ffee845c7d21a0.jpg",
        about_video = " Lugh and Tarte train on island, learn of Gae Bolg. Viekone at war, Lugh offers Dia escape, she fortifies hometown. Lugh and Dia share date. Wounded soldier requests assassination of Dia.",
        genre = "Isekai"
    )
    video33 = Video(
        title="Choice of Betrayal",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/e6745f3177ad4ab7a7b746b156ea6b2b.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/62fe345a425f445eb46ec31abdcd75bb.jpg",
        about_video = "Cian reveals Dia's father's order to assassinate her to halt the war. Lugh sees opportunity to save Dia. Tarte aids Lugh's journey. Viekone mansion besieged, Lugh minimizes casualties. Maha shares divine treasure info with Lugh.",
        genre = "Isekai"
    )
    video34 = Video(
        title="Battle of Assassin",
        artist="Silver Link Studio Palette",
        aws_url="http://otakuxpress.s3.amazonaws.com/e8f8d75f8e454feeade9d9f423c9bad1.mp4",
        uploader = seeded_users[1],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/1f81a7e4003040e58c29f492391535f6.jpg",
        about_video = "Lugh disguises Dia as his sister and eliminates Setanta using a clever plan. The Tuatha Dé family adopts Dia. Lugh learns of Hero Epona's arrival in Alvan Kingdom.",
        genre = "Isekai"
    )
    video35 = Video(
        title="Tragedy",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/dd90ae7f27ef404fb739603a17309e7f.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/6b3dbd71e10748cd9ab00221df91025c.jpg",
        about_video ="An ordinary college student named Kaneki meets a girl who also loves to read and his fate changes when she reveals herself as a ghoul who craves human flesh -- and intends to eat him alive.",
        genre = "Dark Fantasy"
    )
    video36 = Video(
        title="Incubation",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/e40a7650295344368114989d4ae83496.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/7b8824dc8d7e4c29a5320c11358b5a0b.jpg",
        about_video ="Kaneki struggles to adjust to his new life and his changed body. When Nishiki Nishio preys on his friend Hideyoshi Nagachika, Kaneki fights to protect him, but worries about his condition.",
        genre = "Dark Fantasy"
    )
    video37 = Video(
        title="Dove",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/3abbb524254246b680da3a9dd8d41298.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/5c09388bea3d476aa4003d4c9ece71b7.jpg",
        about_video ="After rescuing his friend, Kaneki is taken in by Yoshimura and Touka Kirishima. Yoshimura helps Kaneki learn how to blend in with humans.",
        genre = "Dark Fantasy"
    )
    video38 = Video(
        title="Supper",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/d7bbe71a854343959197bd09d49ff4a6.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/f261d0510e624f51ba7aba0160eca84b.jpg",
        about_video ="Kaneki makes friends with Tsukiyama, a ghoul acquaintance of Rize who enjoys reading and possesses other, more epicurean tastes.",
        genre = "Dark Fantasy"
    )
    video39 = Video(
        title="Scars",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/fa6245278c994bcaa4b31b2f73cd37fb.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/4fd14ef8c56c4318adf1eeb70d4e9742.jpg",
        about_video ="After Touka falls ill, Kaneki pays her a visit that has some unexpected consequences. Tsukiyama prepares another trap for Kaneki.",
        genre = "Dark Fantasy"
    )
    video40 = Video(
        title="Cloudburst",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/77f931a0df8449e984b0d7206220c6cd.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/38af29cfa53d4e2780fae6486d995c0b.jpg",
        about_video ="Now that Kimi knows Nishiki and Kaneki are ghouls, Touka wants to kill Kimi. Hinami is upset when she cannot see her father.",
        genre = "Dark Fantasy"
    )
    video41 = Video(
        title="Captivity",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/69310922d215434da974f5ab0364f6b2.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/e22b1ca9d61348a88432a74c6d424c03.jpg",
        about_video ="ouka decides to take matters with the ghoul investigation into her own hands. Equally fed up, Kaneki decides to get involved.",
        genre = "Dark Fantasy"
    )
    video42 = Video(
        title="Circular",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/64055292b78f4e5bab3609ba4955e761.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/b8d65d93d14841679413925e25d61f0e.jpg",
        about_video ="Touka and Kaneki look for a runaway Hinami, who has escaped Anteiku, and they come face-to-face with Amon and Mado.",
        genre = "Dark Fantasy"
    )
    video43 = Video(
        title="Birdcage",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/750924a9d438420ba99da63ade63ab4a.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/85d42a818cae41b3b891097328f09403.jpg",
        about_video ="After the battle with Mado, Hinami moves in with Touka and Kaneki and tries to return to normal. Kaneki looks for information about Rize.",
        genre = "Dark Fantasy"
    )
    video44 = Video(
        title="Aogiri",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/f04f98103c724eafa49077606e8cd29e.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/73705cb3ed6f49a0a6c30fcd4ea691c4.jpg",
        about_video ="Kaneki is captured by an underground ghoul faction, Aogiri Tree, bent on taking over. Amon is introduced to his eccentric new partner.",
        genre = "Dark Fantasy"
    )
    video45 = Video(
        title="High Spirts",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/71bb31f8fd7f4cda8b1ead7891014dfb.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/c04b47bf0d074410bc21189372460121.jpg",
        about_video ="The police and CCG move to attack Aogiri Tree in its shopping mall headquarters, while Kaneki is tortured by Yamori.",
        genre = "Dark Fantasy"
    )
    video46 = Video(
        title="Ghoul",
        artist="Viz Media",
        aws_url="http://otakuxpress.s3.amazonaws.com/49f9a463f4f14d56aeaf316aa6195916.mp4",
        uploader= seeded_users[2],
        video_likes = sample(seeded_users, randint(0, len(seeded_users))),
        video_image = "http://otakuxpress.s3.amazonaws.com/1e69a4e128334bc0b50759507a99f717.jpg",
        about_video ="While being tortured by Yamori, Kaneki passes through several illusions and a manifestation of Rize forces him to make a choice with profound consequences.",
        genre = "Dark Fantasy"
    )

    all_videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12, video13, video14, video15, video16, video17, video18, video19, video20, video21, video22, video23, video24, video25, video26, video27, video28, video29, video30, video31, video32, video33, video34, video35, video36, video37, video38, video39, video40, video41, video42, video43, video44, video45, video46]
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
