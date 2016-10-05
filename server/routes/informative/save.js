const informativeService = require('services/informative'),
  informativeValidator = require('validators/informative');

module.exports = function(req, res, next) {
  informativeValidator(req.body).then(model => {
    return informativeService.save(model, req.user);
  }).then(informative => {
    res.json(informative);
  }).catch(next);
};
