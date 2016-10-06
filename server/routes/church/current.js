const churchRepository = require('repositories/church');

module.exports = function(req, res, next) {
  churchRepository.findById(req.user.church.id).then(church => {
    res.json(church);
  }).catch(next);
};
