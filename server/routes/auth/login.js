const authService = require('services/auth');

module.exports = function(req, res, next) {

  authService.login(req.body.email, req.body.password).then(token => {
    res.setHeader('X-Token', token);
    res.json(token);
  }).catch(err => {
    switch (err.message) {
      case 'user-not-found':
      case 'invalid-password':
        return res.status(400).send();
      default:
        return next(err);
    }
  });

};
