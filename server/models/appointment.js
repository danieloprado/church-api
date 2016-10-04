'use strict';
const Model = require('objection').Model;

class Appointment extends Model {

  static get tableName() {
    return 'Appointment';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'beginDate', 'churchId'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 100 },
        description: { type: 'string', minLength: 1, maxLength: 1000 },
        beginDate: { type: 'date' },
        endDate: { type: 'date' },
        churchId: { type: 'integer' }
      }
    };
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
