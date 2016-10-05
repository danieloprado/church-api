const churchRepository = require('repositories/church');

function save(model, user) {
  model.id = user.church.id;
  return churchRepository.update(model);
}

module.exports = { save };
