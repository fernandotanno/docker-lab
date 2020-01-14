'use strict'

class UserStore {
  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      access: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'Campo email obrigatório',
      'email.email': 'Infomar email válido',
      'email.unique': 'Email ja cadastrado',
      'password': 'Campo senha dev ser informado'
    }
  }
}

module.exports = UserStore
