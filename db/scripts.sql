CREATE DATABASE exercusuarios;



 CREATE TABLE usuarios (
 id SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 sobrenome VARCHAR(100) NOT NULL,
 data_nascimento DATE NOT NULL,
 email VARCHAR(100) NOT NULL,
 idade INT,
 signo VARCHAR(100)
 );