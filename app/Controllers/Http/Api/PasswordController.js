'use strict'

const Mail = use('Mail')
const User = use('App/Models/User')
const { validate } = use('Validator')
const Uuid = require('uuid/v4');

class PasswordController {

  /**
  * @swagger
  * /api/v1/password/reset/request:
  *   get:
  *     tags:
  *       - Passwords
  *     summary: Request New Password
  *     parameters:
  *       - name: email
  *         description: Email of the user
  *         in: query
  *         required: True
  *         type: string
  */
    async requestReset({ request, response }) {
        const { email } = request.only(['email'])
        const user = await User.findByOrFail('email', email )
        user.reset_token = Uuid()
        await user.save()
        await Mail.send('emails.passwords.forgot', user.toJSON(), (message) => {
          message.from('foo@bar.com')
          message.subject('Reset your password')
          message.to( user.email )
        })
        return response.status(200).json({ message: 'Reset password email has been sent.' })
      }
    
    /**
     * @swagger
     * api/v1/password/reset_from_token/:email/:token:
     *   get:
     *     tags:
     *       - Passwords
     *     summary: Reset a password based on a token
     *     parameters:
     *       - name: token
     *         description: The reset token sent to user email
     *         in: body
     *         required: true
     */
    async resetPassword ({request, response, auth}) {
    const rules = {
        token: 'required',
        email: 'required|email',
        password: 'required|confirmed'
        }
        const validation = await validate(request.all(), rules)
        if (!validation.fails()) {
        const { email, token, password} = request.only(['email', 'password', 'token'])
        const user = await User.findBy('email', email )
        if(user.reset_token != token){
            response.status(401).send('Invalid');
        } else {
            user.reset_token = null
            user.password = password
            await user.save()
            const result = await auth.withRefreshToken().generate(user)
            await Mail.send('emails.passwords.passwordChanged', user.toJSON(), (message) => {
                message
                    .to(user.email)
                    .from('<from-email>')
                    .subject('Password Changed')
                })
            response.status(201).json(result)
        }
        } else {
            response.status(401).send(validation.messages());
        }
    }

}

module.exports = PasswordController
