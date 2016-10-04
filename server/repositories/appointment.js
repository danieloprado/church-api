const appointmentModel = require('models/appointment');

function list(churchId) {
  return appointmentModel.query().where({ churchId });
}

module.exports = { list };
