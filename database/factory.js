'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const Env = use('Env')

Factory.blueprint('App/Models/User', (faker) => {
    return {
        // username: faker.username()
        username: Env.get('APP_USERNAME_DEFAULT'),
        email: Env.get('APP_EMAIL_DEFAULT'),
        password: Env.get('APP_PASSWORD_DEFAULT'),
        access: Env.get('APP_ACCESS_DEFAULT'),
        status: true
    }
})
