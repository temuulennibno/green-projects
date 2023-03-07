CREATE TABLE user(  
    userId VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    birthDate DATE,
    email varchar(255) UNIQUE,
    emailConfirmed boolean DEFAULT false,
    phone INT UNIQUE NOT NULL,
    phoneConfirmed boolean DEFAULT false,
    password VARCHAR(255) NOT NULL,
    imageUrl varchar(1000),
    isAdmin boolean DEFAULT false,
    created VARCHAR(255),
    createdAt TIMESTAMP,
    updated VARCHAR(255),
    updatedAt TIMESTAMP,
    PRIMARY KEY(userId),
    FOREIGN KEY(created) REFERENCES user(userId) ON UPDATE CASCADE,
    FOREIGN KEY(updated) REFERENCES user(userId) ON UPDATE CASCADE
);

