const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

//conexão banco de dados

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'exercusuarios',
    password: 'ds564',
    port: 5432,
});

const signo = (data_aniversario) => {
    let birthdate = new Date(data_aniversario);
    let dia = birthdate.getDate();
    let mes = birthdate.getMonth() + 1;
    console.log("Passou pelo signo() da class User");

    if ((mes == 1 && dia <= 20) || (mes == 12 && dia >= 22)) {
        return "Capricórnio ♑";
    } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
        return "Aquário ♒";
    } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        return "Peixes ♓";
    } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        return "Áries ♈";
    } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
        return "Touro ♉";
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        return "Gêmeos ♊";
    } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
        return "Câncer ♋";
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
        return "Leão ♌";
    } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
        return "Virgem ♍";
    } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
        return "Libra ♎";
    } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
        return "Escorpião ♏";
    } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        return "Sagitário ♐";
    }
}
const calcularIdade = (data_nascimento) => {
   let dataAtual = new Date()
   let anoAtual =  dataAtual.getFullYear()
    let birthdate = new Date(data_nascimento);
    let ano = birthdate.getFullYear();
  
    console.log("Passou pelo getSigno() da class User");

    const idade = anoAtual - ano ;
    return idade;
};

app.use(express.json());


//rota de teste
app.get('/', (req, res)=>{
    res.send('a rota esta funcionando');
});
// rota de todos os usuarios

app.get('/usuarios', async (req, res)=>{
    try {
        const resultado = await pool.query('SELECT * FROM usuarios');
        res.json({
            total: resultado.rowCount,
            usuarios: resultado.rows,
        });
    } catch (error) {
        console.error('erro a obter todos os usuarios', error);
        res.status(500).send('erro ao obter os usuarios');
    }
});
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        if (resultado.rowCount == 0) {
            res.status(404).send('id não encontrado');
        } else {
            res.json({
                usuario: resultado.rows[0],
            });
        }
    } catch (error) {
        console.error('erro ao obter usuário pelo id', error);
        res.status(500).send('erro ao obter usuário pelo id');
    }
});

app.post('/usuarios', async (req, res) => {
    try {
        const { nome, sobrenome, data_nascimento, email } = req.body;
        
        // Calculate age and signo based on the given birthdate
        const idade = calcularIdade(new Date(data_nascimento));
        const signoUsuario = signo(new Date(data_nascimento));
        
        await pool.query('INSERT INTO usuarios (nome, sobrenome, data_nascimento, email, idade, signo) VALUES ($1, $2, $3, $4, $5, $6)', [nome, sobrenome, data_nascimento, email, idade, signoUsuario]);
        res.status(201).send({ mensagem: 'usuário criado com sucesso' });
    } catch (error) {
        console.error('erro ao inserir usuário', error);
        res.status(500).send('erro ao inserir usuário');
    }
});


app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        res.status(200).send({ mensagem: 'usuário deletado' });
    } catch (error) {
        console.error('erro ao excluir usuário', error);
        res.status(500).send('erro ao excluir usuário');
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        await pool.query('UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3', [nome, email, id]);
        res.status(200).send({ mensagem: 'usuário atualizado' });
    } catch (error) {
        console.error('erro ao atualizar usuário', error);
        res.status(500).send('erro ao atualizar usuário');
    }
});

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}⚡`);
});