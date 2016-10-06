const informativeRepository = require('repositories/informative');

module.exports = function(req, res, next) {
  informativeRepository.findById(req.params.id).then(informative => {
    res.json(informative);
  }).catch(next);
};
