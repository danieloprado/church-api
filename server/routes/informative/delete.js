const informativeService = require('services/informative');

module.exports = function(req, res, next) {
  return informativeService.remove(req.params.id, req.user).then(() => {
    res.send();
  }).catch(next);
};
