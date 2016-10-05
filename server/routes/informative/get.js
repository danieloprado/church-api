const informativeRepository = require('repositories/informative');

module.exports = function(req, res) {
  informativeRepository.findById(req.params.id).then(informative => {
    res.json(informative);
  });
};
