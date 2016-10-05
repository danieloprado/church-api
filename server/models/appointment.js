'use strict';
const Model = require('objection').Model;

class Appointment extends Model {

  static get tableName() {
    return 'Appointment';
  }

  static get relationMappings() {
    return {

      church: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/Church',
        join: {
          from: 'Appointment.churchId',
          to: 'Church.id'
        }
      }

    };
  }
}

module.exports = Appointment;
