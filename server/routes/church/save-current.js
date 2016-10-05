const churchService = require('services/church'),
  churchValidator = require('validators/church');

module.exports = function(req, res, next) {
  churchValidator(req.body).then(model => {
    return churchService.save(model, req.user);
  }).then(church => {
    res.json(church);
  }).catch(next);
};
