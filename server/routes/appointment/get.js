const appointmentRepository = require('repositories/appointment');

module.exports = function(req, res, next) {
  appointmentRepository.findById(req.params.id).then(appointment => {
    res.json(appointment);
  }).catch(next);
};
