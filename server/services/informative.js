const informativeRepository = require('repositories/informative');

function save(model, user) {
  if (model.id) return update(model, user);
  return create(model, user);
}

function create(model, user) {
  model.creatorId = user.id;
  model.churchId = user.church.id;
  return informativeRepository.insert(model);
}

function update(model, user) {
  return informativeRepository.findById(model.id).then(informative => {
    if (!informative) throw new Error('not-found');
    if (informative.churchId !== user.church.id) throw new Error('access-denied');

    return informativeRepository.update(model);
  });
}

function remove(id, user) {
  return informativeRepository.findById(id).then(appointment => {
    if (!appointment) throw new Error('not-found');
    if (appointment.churchId !== user.church.id) throw new Error('access-denied');

    return informativeRepository.remove(id);
  });
}

module.exports = { save, remove };
