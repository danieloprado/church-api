const informativeRepository = require('repositories/informative');

module.exports = function(req, res, next) {
  informativeRepository.listByChurchSlug(req.params.church).then(informatives => {
    res.json(informatives);
  }).catch(next);
};
