const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota POST para receber dados
app.post('/api/dados', (req, res) => {
    const dadosRecebidos = req.body;
    console.log('Dados recebidos:', dadosRecebidos);
    
    // Aqui você pode processar os dados, como armazená-los em um banco de dados

    res.status(201).send({ message: 'Dados recebidos com sucesso!', dados: dadosRecebidos });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
