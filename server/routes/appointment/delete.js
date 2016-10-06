const appointmentService = require('services/appointment');

module.exports = function(req, res, next) {
  return appointmentService.remove(req.params.id, req.user).then(() => {
    res.send();
  }).catch(next);
};
