const appointmentService = require('services/appointment'),
  appointmentValidator = require('validators/appointment');

module.exports = function(req, res, next) {
  appointmentValidator(req.body).then(model => {
    return appointmentService.save(model, req.user);
  }).then(appointment => {
    res.json(appointment);
  }).catch(next);
};
