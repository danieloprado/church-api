'use strict';
const Model = require('objection').Model;

class Church extends Model {

  static get tableName() {
    return 'Church';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 100 },
        email: { type: 'string', minLength: 1, maxLength: 150 },
        phone: { type: 'string', minLength: 1, maxLength: 20 },
        adress: { type: 'string', minLength: 1, maxLength: 150 },
        latitude: { type: 'number' },
        longitude: { type: 'number' }
      }
    };
  }

  static get relationMappings() {
    return {

      users: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/ChurchUser',
        join: {
          from: 'Church.id',
          to: 'ChurchUser.churchId'
        }
      }

    };
  }
}

module.exports = Church;
