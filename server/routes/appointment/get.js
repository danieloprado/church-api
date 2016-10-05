const appointmentRepository = require('repositories/appointment');

module.exports = function(req, res) {
  appointmentRepository.findById(req.params.id).then(appointment => {
    res.json(appointment);
  });
};
