'use strict'

const User = use('App/Models/User')

class UserController {

    // Autenticação e retorno do token jwt
    async login({ request, response, auth }) {
        const { email, password } = request.all()

        const user = await User.findBy('email', email)

        if (user && user.status != false) {
            const token = await auth.attempt(email, password, {
                "username": user.username,
                "email": user.email,
                "access": user.access,        
            })
            return response.status(201).json({
                message: 'Logado com sucesso',
                data: token
            })
        }
        return response.status(401).json({
            message: "Autenticação não permitida, verifique Usuário e/ou Senha"
        })
    }

    // Incluir usuário
    async store({ auth, request, response }) {

        const { ...data } = request.only(['username', 'email', 'password', 'access', 'status'])

        if (auth.user.access === 'manager') {
            const user = await User.create(data)

            return response.status(201).json({
                message: 'Usuário incluso com sucesso',
                data: user
            })
        }

        return response.status(401).json({
            message: 'Funcionalidade não permitida para seu nivel de acesso'
        })
    }

    // Alterar usuário
    async update({ auth, request, response, params }) {

        const user = await User.find(params.id)

        const { ...data } = request.only(['username', 'email', 'password', 'access', 'status'])

        if (auth.user.access === 'manager') {
            user.merge(data)
            user.save()

            return response.status(201).json({
                message: `Usuário ${user.username}, alterado com sucesso`,
                data: user
            })
        }

        return response.status(401).json({
            message: 'Funcionalidade não permitida para seu nivel de acesso'
        })
    }



    // Listar usuários
    async index({ auth, response }) {

        if (auth.user.access === 'manager') {
            const user = await User.all()

            return response.status(200).json({
                data: user
            })
        }

        return response.status(401).json({
            message: 'Funcionalidade não permitida para seu nivel de acesso'
        })
    }

    //Listar usuário especifico
    async show({ auth, response, params }) {

        if (auth.user.access === 'manager') {
            const user = await User.find(params.id)
            return response.status(200).json({
                data: user
            })
        }

        return response.status(401).json({
            message: 'Funcionalidade não permitida para seu nivel de acesso'
        })
    }
}

module.exports = UserController
