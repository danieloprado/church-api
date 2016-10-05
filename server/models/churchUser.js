'use strict';

const Model = require('objection').Model;

class ChurchUser extends Model {

  static get tableName() {
    return 'ChurchUser';
  }

  static get relationMappings() {
    return {

      user: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'ChurchUser.userId',
          to: 'User.id'
        }
      },
      church: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/Church',
        join: {
          from: 'ChurchUser.churchId',
          to: 'Church.id'
        }
      }

    };
  }
}

module.exports = ChurchUser;
