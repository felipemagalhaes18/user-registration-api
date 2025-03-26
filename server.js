const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor executado na porta 3000')
})