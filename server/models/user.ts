import * as bcrypt from '../services/bcrypt';
import * as objection from 'objection';

class User extends objection.Model {

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

  static get relationMappings() {
    return {

      churches: {
        relation: objection.Model.HasManyRelation,
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
