'use strict';
const Model = require('objection').Model;

class Informative extends Model {

  static get tableName() {
    return 'Informative';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'date', 'message', 'creatorId', 'churchId'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 100 },
        date: { type: 'date' },
        message: { type: 'string' },
        creatorId: { type: 'integer' },
        churchId: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {

      creator: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'Informative.creatorId',
          to: 'User.id'
        }
      },

      church: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/Church',
        join: {
          from: 'Informative.churchId',
          to: 'Church.id'
        }
      }

    };
  }
}

module.exports = Informative;
