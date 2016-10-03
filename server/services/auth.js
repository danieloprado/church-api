const userRepository = require('repositories/user');

function login(email) {
  return userRepository.findByEmail(email).then(user => {
    if (!user) throw 'user-not-found';


    return user;
  });
}

module.exports = { login };
