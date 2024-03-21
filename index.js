require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("hello world")
})

const port = process.env.PORT ? Number(process.env.PORT) : 8081
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: http://localhost:" + port)
})