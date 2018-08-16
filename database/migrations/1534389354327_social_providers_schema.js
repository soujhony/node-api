'use strict'

const Schema = use('Schema')

class SocialProvidersSchema extends Schema {
  up () {
    this.create('social_providers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      $table->string('provider_token').notNullable().unique().index();
      $table->string('provider').notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('social_providers')
  }
}

module.exports = SocialProvidersSchema
