const informativeRepository = require('repositories/informative');

module.exports = function(req, res) {
  informativeRepository.list(req.user.church.id).then(informatives => {
    res.json(informatives);
  });
};
