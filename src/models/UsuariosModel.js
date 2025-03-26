const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = class DataBase {

    criarUsuario = async (email, name, age) => await prisma.user.create({
        data: { email, name, age }
    })

    editarUsuario = async (id, email, name, age) => await prisma.user.update({
        where: { id },
        data: { email, name, age }
    })

    listarUsuarios = async (email, name, age) => {
        if (email || name || age) {
            return await prisma.user.findMany({
                where: { email, name, age }
            })
        }

        return await prisma.user.findMany()
    }

    deletarUsuario = async (id) => {
        await prisma.user.delete({
            where: { id }
        })
    }
}


