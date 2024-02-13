CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT UNIQUE,
    user_name varchar(20) NOT NULL UNIQUE,
    password varchar(20),
    signup_date timestamp,
	PRIMARY KEY (id)
);

INSERT INTO users (user_name, password)
VALUES 
('DogOwner1', 'Password1'),
('CatOwner1', 'Password2'),
('BirdOwner1', 'Password3'),
('DogOwner2', 'Password4'),
('PetOwner1', 'Password5')

