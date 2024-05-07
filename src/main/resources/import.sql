BEGIN;
CREATE TABLE IF NOT EXISTS Users ( id BIGINT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL);
INSERT INTO Users ( username,password) VALUES ( 'Ram', 'Male');
INSERT INTO Users ( username,password) VALUES ( 'Smith', 'Female');
COMMIT;