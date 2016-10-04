const appointmentRepository = require('repositories/appointment');

module.exports = function(req, res) {
  appointmentRepository.list(req.user.church.id).then(appointments => {
    res.json(appointments);
  });
};
