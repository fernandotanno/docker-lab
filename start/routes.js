'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Autenticação
Route.post('login', 'UserController.login')

// User
Route.resource('users', 'UserController')
  .apiOnly()
  .middleware('auth:jwt')
  .validator(new Map([
    [['users.store'], ['UserStore']],
    [['users.update'], ['UserUpdate']]
  ]))
