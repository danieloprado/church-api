const churchModel = require('models/church');

function findById(id) {
  return churchModel.query().where({ id }).first();
}

function findBySlug(slug) {
  return churchModel.query().where({ slug }).first();
}

function update(church) {
  return churchModel.query().patchAndFetchById(church.id, church);
}

module.exports = { findById, update, findBySlug };
