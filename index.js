require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/pages/index.html")
})

//pagina de cadastro de produtos
app.get('/produto', (req,res)=>{
    res.sendFile(__dirname + "/pages/produto.html")
})

//retorna todos os produto
app.get('/api/produto', (req,res)=>{
    res.send("TODO consultar produtos no banco")
})

//cria novo produto
app.post('/api/produto', (req,res)=>{
    console.log(req)
    res.send('ok')
})

//atualizar produto x
app.put('/api/produto', (req,res)=>{
    res.send(req.params)
})

//apagar produto x
app.delete('/api/produto', (req,res)=>{
    res.send(req.params)
})

//pagina de cadastro de usuários
app.get('/usuario', (req,res)=>{
    res.sendFile(__dirname + "/pages/usuario.html")
})

const port = process.env.PORT ? Number(process.env.PORT) : 8081
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: http://localhost:" + port)
})