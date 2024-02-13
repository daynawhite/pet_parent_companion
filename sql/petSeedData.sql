CREATE TABLE pet_info (
	id int NOT NULL AUTO_INCREMENT UNIQUE,
    user_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    pet_name varchar(45) NOT NULL,
    animal_type varchar(45) NOT NULL,
    breed varchar(45),
    PRIMARY KEY (id)
);

INSERT INTO pet_info (user_id, pet_name, animal_type, breed)
VALUES
(2, 'Fido', 'dog', 'beagle'),
(3, 'Princess', 'cat', null),
(4, 'Merlin', 'bird', null),
(6, 'Bosco', 'dog', 'lab mix'),
(6, 'Fluffy', 'cat', null),
(5, 'Lady', 'dog', 'cocker spaniel'),
(5, 'Tramp', 'dog', 'terrier mix')