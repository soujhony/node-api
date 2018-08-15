'use strict'

const User = use('App/Models/User')
class UserController {

    async index({ response, auth, transform }) {
        try {
            const users = await User.all()
            return transform.collection(users, user => ({
                username: user.username,
                email: user.email
              }))
        } catch (error) {
            response.json('Error');
        }
    }
}

module.exports = UserController
