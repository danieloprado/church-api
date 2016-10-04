const userRepository = require('repositories/user'),
  tokenService = require('./tokenService');

function login(email, password) {
  return userRepository.findByEmail(email).then(user => {
    if (!user) throw new Error('user-not-found');
    return user.checkPassword(password).then(() => user);
  }).then(user => {
    return tokenService.generate(user, user.churches[0]);
  }).catch(err => {
    if (err.message === 'bcript-invalid') throw new Error('invalid-password');
    throw err;
  });
}

module.exports = { login };
