const informativeRepository = require('repositories/informative');

module.exports = function(req, res, next) {
  informativeRepository.list(req.user.church.id).then(informatives => {
    res.json(informatives);
  }).catch(next);
};
