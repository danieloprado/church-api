const jwt = require('jsonwebtoken'),
  auth = require('config').auth;

module.exports = function bindUser(req, res, next) {
  const token = req.get('Authorization');
  if (!token) return next();

  jwt.verify(token.split(' ')[1], auth.secret, (err, decoded) => {
    console.log(err);
    if (!decoded) return next();
    req.user = decoded;
    next();
  });
};
