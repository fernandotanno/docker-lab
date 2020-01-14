'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ auth, request, response }) {
        const { email, password } = request.all()

        const user = await User.findBy('email', email)

        if (user) {
            const token = await auth.attempt(email, password, {
                "username": user.username,
                "email": user.email,
                "type": user.type
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

}

module.exports = UserController
