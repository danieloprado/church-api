const appointmentModel = require('models/appointment');

function list(churchId) {
  return appointmentModel.query().where({ churchId });
}

function findById(id) {
  return appointmentModel.query().where({ id }).first();
}

function insert(appointment) {
  return appointmentModel.query().insert(appointment);
}

function update(appointment) {
  return appointmentModel.query().patchAndFetchById(appointment.id, appointment);
}

function remove(id) {
  return appointmentModel.query().delete().where({ id });
}

module.exports = { list, findById, insert, update, remove };
