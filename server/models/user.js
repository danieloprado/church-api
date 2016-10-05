'use strict';

const Model = require('objection').Model,
  bcrypt = require('services/bcrypt');

class User extends Model {

  static get tableName() {
    return 'User';
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

  setPassword(password) {
    return bcrypt.hash(password).then(hash => {
      this.password = hash;
    });
  }

  checkPassword(password) {
    return bcrypt.compare(this.password, password);
  }
}

module.exports = User;
