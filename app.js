require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({}))

app.get('/todos', (req, res) => {
  console.log("todos aqui")
  res.status(200).send({ codeStatus: 200, messege: "deu tudo certo" })
})

app.listen(process.env.port, () => {
  console.log(`rodando o server na porta ${process.env.port}`)
})