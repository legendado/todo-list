'use strict'

const User = use('App/Models/User')
// const Task = use('App/Models/Task')

class TestController {
    async getUser() {
        const user = await User.all()
        return user
    }
}

module.exports = TestController
