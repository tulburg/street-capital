CREATE TABLE IF NOT EXISTS talks (
	id int(11) primary key auto_increment not null,
	title text not null,
	abstract text not null,
	room integer(11) not null,
	date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	date_updated timestamp not null
);

CREATE TABLE IF NOT EXISTS attendees (
	id int(11) primary key auto_increment not null,
	name varchar(200) not null,
	company varchar(200) not null,
	email varchar(100) not null,
	bio text not null,
	date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	date_updated timestamp not null
);

CREATE TABLE IF NOT EXISTS talk_attendees (
	id int(11) primary key auto_increment not null,
	talk_id int(11) not null,
	attendee_id int(11) not null,
	date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	date_updated timestamp not null
);