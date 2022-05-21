CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    midname VARCHAR(255),
    birthday DATE,
    trainingGroup SERIAL,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES person (id)
);