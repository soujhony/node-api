const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
 
class UserTransformer extends TransformerAbstract {
  transform (model) {
    return {
      id: model.id,
      username: model.username,
      email: model.email
    }
  }
}
 
module.exports = UserTransformer