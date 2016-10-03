const userModel = require('models/user');

function findByEmail(email) {
  return userModel.query().where({ email }).first();
}

module.exports = { findByEmail };
