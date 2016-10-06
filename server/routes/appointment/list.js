const appointmentRepository = require('repositories/appointment');

module.exports = function(req, res, next) {
  appointmentRepository.list(req.user.church.id).then(appointments => {
    res.json(appointments);
  }).catch(next);
};
