const _ = require('lodash');

module.exports = function(roles) {

  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      return next();
    }

    if (!req.user) {
      return res.status(401).json('Senta lá Cláudia!');
    }

    if (!roles) {
      return next();
    }

    roles = _.flattenDeep([roles, ['sysAdmin', 'admin']]);

    const isAuthorized = _.intersection(roles, req.user.roles).length > 0;
    if (!isAuthorized) {
      return res.status(403).json('Senta lá Cláudia!');
    }

    return next();
  };

};
