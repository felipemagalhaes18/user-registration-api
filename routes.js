const express = require('express')

const usuarioController = require('./src/controllers/usuariosController.js')

const routes = express.Router()

routes.get('/', usuarioController.paginaInicial)
routes.get('/usuarios', usuarioController.listarUsuario)
routes.post('/usuarios', usuarioController.criarUsuario)
routes.put('/usuarios/:id', usuarioController.editarUsuario)
routes.delete('/usuarios/:id', usuarioController.deletarUsuario)


module.exports = routes;