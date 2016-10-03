const userRepository = require('repositories/user');

function login(email, password) {
  return userRepository.findByEmail(email).then(user => {
    if (!user) {
      throw new Error('user-not-found');
    }

    return user.checkPassword(password);
  }).then(() => {
    return 'Token!';
  }).catch(err => {
    if (err.message === 'bcript-invalid') {
      throw new Error('invalid-password');
    }

    throw err;
  });
}

module.exports = { login };
