'use strict'

const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Token:
*      type: object
*      properties:
*        id:
*          type: uint
*        user_id:
*          type: uint
*        token:
*          type: string
*        type:
*          type: string
*        is_revoked:
*          type: boolean
*      required:
*        - token
*        - type
*        - user_id
*/
class Token extends Model {
}

module.exports = Token
