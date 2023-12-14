DROP DATABASE IF EXISTS sensor;

CREATE DATABASE IF NOT EXISTS sensor 
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_general_ci;

USE moviedb;

CREATE TABLE sensor (
  temperature FLOAT(3,1) NOT NULL,
  water INT NOT NULL,
  gas INT NOT NULL,
  nfc VARCHAR(255)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET utf8mb4 
  DEFAULT COLLATE utf8mb4_general_ci;