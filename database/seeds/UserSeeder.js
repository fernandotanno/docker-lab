'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  static async run () {
    await Factory
    .model('App/Models/User')
    .create()
  }
}

module.exports = UserSeeder
