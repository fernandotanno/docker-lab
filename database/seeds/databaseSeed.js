'use strict'

const UserSeed = require('./UserSeeder')

class DatabaseSeed {
    async run() {
        await UserSeed.run()
    }
}

module.exports = DatabaseSeed