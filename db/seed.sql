\c music_app;


INSERT INTO music (name, artist, album, time, is_favorite) VALUES 
( 'I Lose Control','Teddy Swims','Ive Tried Everything but Therapy','3:31', true),
( 'Here We Go (Uh Oh)','Coco Jones','Here We Go','4:09', false),
( 'Monster','Shawn Mendes','Wonder','3:03', true),
( 'Yet','The King Will Come','The Maverick Way Complete','5:02', false),
( 'Me and My Guitar','A-Boogie','Artist 2.0','2:42', true),
( 'Escapism','RAYE','My 21st Century Blues','4:34', true);

INSERT INTO reviews (music_id, reviewer_name, reviewer_age, bio, rating)
VALUES
(3, 'Diamond',  22, 'He has a raspy voice.', 3),
(4, 'Tyreek', 26, 'She can do any cover, check her out on TikTok.', 5),
(5, 'Amber', 30, 'His collab with justin Beiber is EVERYTHING !!!!!', 3),
(3, 'Delena', 27, 'Thier msuic helps keep me grounded.', 3),
(4, 'Sideara', 17, 'I loved his music since he first dropped his album.', 4),
(5, 'Ronald', 20, 'Shes definetly a vibe', 4),
(3,'Jamira', 37,'I dont really know him .', 2);


