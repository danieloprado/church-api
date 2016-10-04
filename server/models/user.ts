'use strict';

const Model = require('objection').Model,
  bcrypt = require('services/bcrypt');

class User extends Model {

  static get tableName() {
    return 'User';
  }

  setPassword(password: string) {
    return bcrypt.hash(password).then(hash => {
      this.password = hash;
    });
  }

  checkPassword(password) {
    return bcrypt.compare(this.password, password);
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 50 },
        lastName: { type: 'string', minLength: 1, maxLength: 50 },
        email: { type: 'string', minLength: 1, maxLength: 150 },
        password: { type: 'string', minLength: 1, maxLength: 72 }
      }
    };
  }

  static get relationMappings() {
    return {

      churches: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/ChurchUser',
        join: {
          from: 'User.id',
          to: 'ChurchUser.userId'
        }
      }

    };
  }
}

module.exports = User;
