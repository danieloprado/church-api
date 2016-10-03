'use strict';

const Model = require('objection').Model;

class ChurchUser extends Model {

  static get tableName() {
    return 'Church_User';
  }


  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'churchId', 'role'],

      properties: {
        userId: { type: 'integer' },
        churchId: { type: 'integer' },
        role: { type: 'string', minLength: 1, maxLength: 1000 }
      }
    };
  }

  static get relationMappings() {
    return {

      users: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'ChurchUser.userId',
          to: 'User.id'
        }
      },

    };
  }
}

module.exports = ChurchUser;
