const appointmentRepository = require('repositories/appointment');

function save(model, user) {
  if (model.id) {
    return update(model, user);
  }

  return create(model, user);
}

function create(model, user) {
  model.churchId = user.church.id;
  return appointmentRepository.insert(model);
}

function update(model, user) {
  return appointmentRepository.findById(model.id).then(appointment => {
    if (!appointment) throw new Error('not-found');
    if (appointment.churchId !== user.churchId) throw new Error('access-denied');

    return appointmentRepository.update(model);
  });
}


module.exports = { save };
