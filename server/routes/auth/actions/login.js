const authService = require('services/auth');

module.exports = function(req, res) {
  authService.login(req.body.email).then(user => {
    res.json(user);
  });
};
