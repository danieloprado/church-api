'use strict';

import * as objeciton from 'objection';
import * as bcrypt from '../services/bcrypt';

class User extends Model {

  password: string;

  static get tableName() {
    return 'User';
  }

  setPassword(password: string) {
    return bcrypt.hash(password).then(hash => {
      this.password = hash;
    });
  }

  checkPassword(password: string) {
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
