CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	status TEXT
);

CREATE TABLE IF NOT EXISTS articles (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	title TEXT,
	content TEXT,
	img TEXT
);

CREATE TABLE IF NOT EXISTS comments (
	id SERIAL PRIMARY KEY,
	article_id INTEGER,
	user_id INTEGER,
	message TEXT
);