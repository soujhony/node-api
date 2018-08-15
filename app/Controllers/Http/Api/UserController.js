'use strict'

class UserController {

    async currentUser({ response, auth }) {
        try {
            const user = await auth.getUser();
            return response.json(user);
        } catch (error) {
            response.json('Error');
        }
    }
}

module.exports = UserController
