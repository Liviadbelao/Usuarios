CREATE DATABASE exercusuarios;



 CREATE TABLE usuarios (
 id SERIAL PRIMARY KEY,
 nome VARCHAR(100),
 sobrenome VARCHAR(100),
 data_nascimento DATE,
 email VARCHAR(100),
 idade INT,
 signo VARCHAR(100)
 );