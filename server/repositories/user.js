const userModel = require('models/user');

function findByEmail(email) {
  return userModel.query().eager('churches.church').where({ email }).first();
}

module.exports = { findByEmail };
