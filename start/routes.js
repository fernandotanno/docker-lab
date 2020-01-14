'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Autenticação
Route.post('login', 'UserController.login')

// User
Route.resource('user', 'UserController')
  .apiOnly()
  .middleware('auth:jwt')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON !' }
// })
