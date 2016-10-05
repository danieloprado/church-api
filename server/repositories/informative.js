const informativeModel = require('models/informative');

function list(churchId) {
  return informativeModel.query().where({ churchId });
}

function findById(id) {
  return informativeModel.query().where({ id }).first();
}

function insert(informative) {
  return informativeModel.query().insert(informative);
}

function update(informative) {
  return informativeModel.query().patchAndFetchById(informative.id, informative);
}

module.exports = { list, findById, insert, update };
