# CRUD de Usuários (atividade signo e idade)

Este é um projeto simples que implementa um CRUD (Create, Read, Update, Delete) de usuários utilizando o Node.js com o framework Express e PostgreSQL como banco de dados.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em seu sistema:

- Node.js
- PostgreSQL
- Um cliente PostgreSQL (como pgAdmin) para gerenciar o banco de dados (opcional)

## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone 
## Inicie no terminal do VScode:

npm install

## Configurações Banco de dados

Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina.
Crie um banco de dados chamado `exercusuarios`.
Execute o script `database.sql` fornecido na pasta `sql` para criar a tabela de usuários.

## Configuração do Projeto

1. Abra o arquivo `index.js`.
2. Altere as configurações de conexão do banco de dados (`user`, `host`, `password`, `port`, etc.) conforme necessário para corresponder à sua configuração local.

## package.json

   
1. Abrir o arquivo package.json e dentro de 'scripts:' adicionar a linha  "dev": "nodemon index.js".

## Comando de execução

1. npm run dev
