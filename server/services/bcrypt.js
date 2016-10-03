const bcrypt = require('bcrypt-nodejs'),
  config = require('../config');

function hash(password) {
  return new Promise((resolve, reject) => {

    bcrypt.genSalt(config.bcryptSaltFactor, (err, salt) => {
      if (err) return reject(err);

      bcrypt.hash(password, salt, null, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });

  });
}

function compare(hash, password) {
  return new Promise((resolve, reject) => {

    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err || !isMatch) {
        return reject(new Error(err || 'bcript-invalid'));
      }

      resolve();
    });

  });
}

module.exports = { hash, compare };
