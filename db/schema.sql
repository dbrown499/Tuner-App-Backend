DROP DATABASE IF EXISTS music_app;

CREATE DATABASE music_app;

\c music_app;

CREATE TABLE music (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time  TEXT,
    is_favorite BOOLEAN,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);
 
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer_name TEXT,
 reviewer_age INTEGER,
 bio TEXT,
 rating INTEGER,
 CHECK (rating >= 0 AND rating <= 5),
 music_id INTEGER REFERENCES music (id)
 ON DELETE CASCADE
);
