const jwt = require('jsonwebtoken'),
  config = require('config');

module.exports = function bindUser(req, res, next) {
  const token = req.get('Authorization');
  if (!token) return next();

  jwt.verify(token.split(' ')[1], config.jwtSecret, (err, decoded) => {
    if (!decoded) return next();
    req.user = decoded;
    next();
  });
};
