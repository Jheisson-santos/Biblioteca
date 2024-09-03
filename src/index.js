const express = require('express')
const app = express()
const port = 3000
const estudantes = require('./routes/estudantes.js')
const livros = require('./routes/livro.js')
const aluguel = require('./routes/alugueis.js')

app.use(express.json())

app.use('/estudantes', estudantes)
app.use('/livros', livros)
app.use('/aluguel', aluguel)

app.listen(port, ()=>{
    console.log(`porta ${port} ativa`);
})