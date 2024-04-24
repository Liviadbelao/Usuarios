<h1 aling='center'>Atividade Signo e Idade</h1>
<h2>Comandos iniciais:</h2>
<p>npm i</p>
<h2>Comando para executar:</h2>
<p>Devemos mudar a pagina package.json em 'scripts:' adicionando a linha "dev": "nodemon index.js".</p>
<div >
 <h2>Terceiro passo:</h2>
<p>Criamos um banco de dados, no Postgresql com o nome exercusuarios (nome da database), e uma tabela de usuarios da seguinte forma. </p>
<p>CREATE TABLE usuarios ( </p>
<p> id SERIAL PRIMARY KEY,</p>
<p> nome VARCHAR(100) NOT NULL,</p>
<p> sobrenome VARCHAR(100) NOT NULL,</p>
<p> data_nascimento DATE NOT NULL,</p>
<p> email VARCHAR(100) NOT NULL,</p>
<p> idade INT,</p>
 <p></p>signo VARCHAR(100)</p>
 <p>); </p>
 </div>
 <p>E criamos duas funções que pegam o valor da data_nascimento e calculam a idade e o signo da pessoa.</p>