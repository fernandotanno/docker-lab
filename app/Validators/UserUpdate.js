'use strict'

class UserUpdate {
  get rules () {
    return {
      email: 'required|email',
      // password: 'required',     
    }
  }
  get messages() {
    return {
      'email.required': 'Campo email obrigatório',
      'email.email': 'Infomar email válido',
      // 'email.unique': 'Email ja cadastrado',
      // 'password': 'Campo senha dev ser informado'
    }
  }
}

module.exports = UserUpdate
