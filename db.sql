CREATE SCHEMA persona
SELECT * FROM persona.users;
DROP TABLE persona.users;
CREATE TABLE IF NOT EXISTS persona.users(
    int_user_id SERIAL NOT NULL PRIMARY KEY,
    str_user_name TEXT,
    str_user_email TEXT
);

INSERT INTO persona.users(
    str_user_name,
    str_user_email
)
VALUES
('Daniel', 'tenedaniel@gmai.com'),
('Juan', 'juanperez@gmai.com'),
('Pedro', 'pedroruiz@gmai.com');