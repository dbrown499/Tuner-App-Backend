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
