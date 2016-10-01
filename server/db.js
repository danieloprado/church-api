const knex = require('knex'),
  config = require('config'),
  knexConfig = require('../knexfile'),
  model = require('objection').Model;

function connect() {
  const connection = knex(knexConfig[config.env]);
  model.knex(connection);
}

module.exports = { connect };
