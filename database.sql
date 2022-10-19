
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "sighting" (
	"id" SERIAL PRIMARY KEY,
	"user_id"  INT NOT NULL,
	"planet_id" INT NOT NULL, 
	"sighting_at" TIMESTAMP NOT NULL DEFAULT NOW(),
	"notes" VARCHAR(1000)
	);

CREATE TABLE "planet" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255),
	"description" VARCHAR(255),
	"known_moons" INT,
	"distance_from_sun" INT,
	"planet_opposition_dates" DATE,
	"visible_without_telescope" BOOLEAN,
	"travel_time_driving_years" INT,
	"travel_time_speed_of_light_minutes" INT,
	"planet_image" VARCHAR(255)
	 );

INSERT INTO "planet" ("name", "description", "known_moons", "distance_from_sun", "visible_without_telescope", "travel_time_driving_years", "travel_time_speed_of_light_minutes", "planet_image")
VALUES ('Mercury', 'Terrestrial', 0, 57900000, TRUE, 87, 8, '/public/images/mercury.png');