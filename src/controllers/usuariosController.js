const DataBase = require("../models/UsuariosModel")

const db = new DataBase();

exports.paginaInicial = (req, res) => {
    res.send('Página inical')
}

exports.listarUsuario = async (req, res) => {
    let users = [];

    if (req.query) {
        users = await db.listarUsuarios(
            req.query.email,
            req.query.name,
            req.query.age,
        )
    } else {
        users = await db.listarUsuarios()
    }

    res.json(users)
}

exports.criarUsuario = (req, res) => {
    db.criarUsuario(
        req.body.email,
        req.body.name,
        req.body.age
    )
    res.status(201).send('Usuário criado com sucesso');
}

exports.editarUsuario = (req, res) => {
    db.editarUsuario(
        req.params.id,
        req.body.email,
        req.body.name,
        req.body.age
    )
    res.status(201).send('Usuário alterado com sucesso')
}

exports.deletarUsuario = (req, res) => {
    db.deletarUsuario(req.params.id)
    res.status(200).send('Usuário deletado com sucesso')
}
