'use strict';
const Model = require('objection').Model;

class Informative extends Model {

  static get tableName() {
    return 'Informative';
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
