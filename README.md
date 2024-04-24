<h1 aling='center'>Atividade Signo e Idade</h1>
<h2>Comandos:</h2>
<p>npm init -y</p>
<p>npm install -g nodemon</p>
<p>npm install express</p>
<p>npm run dev</p>
<p>Devemos mudar a pagina package.json em 'scripts:' adicionando a linha "dev": "nodemon index.js".</p>

<p>Criamos um banco de dados, no Postgresql com o nome exercusuarios (nome da database), e uma tabela de usuarios da seguinte forma. </p>
<p>CREATE TABLE usuarios (
 id SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 sobrenome VARCHAR(100) NOT NULL,
 data_nascimento DATE NOT NULL,
 email VARCHAR(100) NOT NULL,
 idade INT,
 signo VARCHAR(100)
 ); </p>
 <p>E criamos duas funções que pegam o valor da data_nascimento e calculam a idade e o signo da pessoa.</p>
