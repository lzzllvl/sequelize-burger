CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE burgers (
  `id` INTEGER(11) auto_increment NOT NULL,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` BOOLEAN DEFAULT false NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY(`id`)
);