'use strict'

const User = use('App/Models/User')

class SocialAuthController {
    
    async redirect ({ ally, params }) {
        await ally.driver(params.provider).redirect()
      }
    
      async callback ({ ally, auth, params }) {
        try {
          const user = await ally.driver(params.provider).getUser()    
          // user details to be saved
          const userDetails = {
            email: user.getEmail(),
            username: user.getName(),
            password: user.getAccessToken()
          }
    
          // search for existing user
          const whereClause = {
            email: user.getEmail()
          }
    
          const newUser = await User.findOrCreate(whereClause, userDetails)
          return newUser
    
          return 'Logged in'
        } catch (error) {
          return error
        }
      }
}

module.exports = SocialAuthController
