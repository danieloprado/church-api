import * as knex from 'knex';
import * as config from './config';

const knexConfig = require('../knexfile'),
  model = require('objection').Model;

export function connect() {
  const connection = knex(knexConfig[config.env]);
  model.knex(connection);
}
