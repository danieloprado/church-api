'use strict';
const Model = require('objection').Model;

class Church extends Model {

  static get tableName() {
    return 'Church';
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
