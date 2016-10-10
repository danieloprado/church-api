const informativeModel = require('models/informative');

function list(churchId) {
  return informativeModel.query().where({ churchId });
}

function listByChurchSlug(slug) {
  return informativeModel.query()
    .select('Informative.*')
    .join('Church', 'Informative.churchId', 'Church.id')
    .where('Church.slug', '=', slug);
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

function remove(id) {
  return informativeModel.query().delete().where({ id });
}

module.exports = { list, listByChurchSlug, findById, insert, update, remove };
