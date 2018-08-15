'use strict'

const User = use('App/Models/User')
const UserTransformer = use('App/Transformers/UserTransformer')

class UserController {

    async index({ response, transform }) {
        const users = await User.all()
        return transform.collection(users, UserTransformer)  
    }

    async show({ response, params, transform }) {
        const user = await User.find(params.id)
        return transform.item(user, UserTransformer)  
    }
}

module.exports = UserController
