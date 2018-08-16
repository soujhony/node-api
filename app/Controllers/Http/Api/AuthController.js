'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')
const Encryption = use('Encryption');
const Mail = use('Mail')
const Uuid = require('uuid/v4');

class AuthController {

  /**
  * @swagger
  * /api/v1/auth/register:
  *   get:
  *     tags:
  *       - Authentication
  *     summary: Register
  *     parameters:
  *       - name: email
  *         description: Email of the user
  *         in: query
  *         required: True
  *         type: string
  */
    async register ({ request, response, auth }) {
        const rules = {
          username: 'required|unique:users,username',
          email: 'required|email|unique:users,email',
          password: 'required|confirmed'
        }
        const validation = await validate(request.all(), rules)
        if (!validation.fails()) {
            const { username, email, password } = request.only(['username', 'email', 'password'])
            const user = await User.create({ username, email, password })
            await Mail.send('emails.welcome', user.toJSON(), (message) => {
                message
                  .to(user.email)
                  .from('<from-email>')
                  .subject('Welcome to Node API')
              })
            const result = await auth.withRefreshToken().generate(user)
            response.status(201).json(result)
        } else {
            response.status(401).send(validation.messages());
        }
      }

 /**
  * @swagger
  * /api/v1/auth/confirm:
  *   get:
  *     tags:
  *       - Authentication
  *     summary: Confirm Email
  *     parameters:
  *       - name: email
  *         description: Email of the user
  *         in: query
  *         required: True
  *         type: string
  */
    async confirmEmail ({ request, response, auth}) {
        const rules = {
            email: 'required|email',
            confirmation_token: 'required'
          }
          const validation = await validate(request.all(), rules)
            if (!validation.fails()) {
                const { email, confirmation_token } = request.only(['email', 'confirmation_token'])
                const user = await User.findByOrFail('email', email )
                if(user.confirmation_token != confirmation_token) {
                    response.status(401).send('Invalid');
                } else {
                user.confirmed = true
                user.confirmation_token = null
                await user.save();
                response.status(201).json(await auth.withRefreshToken().generate(user))
                }                
            } else {
                response.status(401).send(validation.messages());
            }
    }

/**
  * @swagger
  * /api/v1/auth/login:
  *   get:
  *     tags:
  *       - Authentication
  *     summary: Login
  *     parameters:
  *       - name: email
  *         description: Email of the user
  *         in: query
  *         required: True
  *         type: string
  */
    async login ({request, response, auth}) {
        const rules = {
            email: 'required|email',
            password: 'required'
          };
          const { email, password } = request.only(['email', 'password']);
          const validation = await validate({ email, password }, rules);
          if (!validation.fails()) {
              const token = await auth.withRefreshToken().attempt(email, password)
              if(token){
                const user = await User.findByOrFail('email', email )
                const data = {
                  "token": token,
                  "user": user
                }
                response.status(201).json(data)
              }
              
          } else {
            response.status(401).send(validation.messages());
          }
    }

    /**
  * @swagger
  * /api/v1/auth/token/refresh:
  *   get:
  *     tags:
  *       - Authentication
  *     summary: Refresh JWT
  *     parameters:
  *       - name: refresh_token
  *         description: Refresh Token
  *         in: query
  *         required: True
  *         type: string
  */
    async refreshToken({ request, response, auth }) {
        const rules = {
          refresh_token: 'required'
        };
    
        const { refresh_token } = request.only(['refresh_token']);
    
        const validation = await validate({ refresh_token }, rules);
    
        if (!validation.fails()) {
          try {
            return await auth
              .newRefreshToken()
              .generateForRefreshToken(refresh_token);
          } catch (err) {
            response.status(401).send({ error: 'Invalid refresh token' });
          }
        } else {
          response.status(401).send(validation.messages());
        }
      }
    

  /**
  * @swagger
  * /api/v1/auth/logout:
  *   get:
  *     tags:
  *       - Authentication
  *     summary: Logout
  *     parameters:
  *       - name: refresh_token
  *         description: Refresh Token
  *         in: query
  *         required: True
  *         type: string
  */
    async logout({ request, response, auth }) {
        const rules = {
          refresh_token: 'required'
        };
        const { refresh_token } = request.only(['refresh_token']);
        const validation = await validate({ refresh_token }, rules);
        const decrypted = Encryption.decrypt(refresh_token);
        if (!validation.fails()) {
          try {
            const refreshToken = await Token.findBy('token', decrypted);
            if (refreshToken) {
              refreshToken.delete();
              response.status(200).send({ status: 'ok' });
            } else {
              response.status(401).send({ error: 'Invalid refresh token' });
            }
          } catch (err) {
            response.status(401).send({ error: 'something went wrong' });
          }
        } else {
          response.status(401).send(validation.messages());
        }
      }

}
    
module.exports = AuthController
