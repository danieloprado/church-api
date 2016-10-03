const jwt = require('jsonwebtoken'),
  auth = require('config').jwtSecret;

function generate(user, church) {
  return new Promise((resolve) => {

    const tokenData = {
      id: user.id,
      email: user.email,
      name: user.name,
      roles: [],
      exp: Math.floor(Date.now() / 1000) + auth.timeout
    };

    if (!church) {
      resolve(jwt.sign(tokenData, auth.secret));
    }

    tokenData.roles = church.getUserRoles(user).then((roles) => {
      tokenData.roles = roles;
      tokenData.church = {
        id: church.id,
        name: church.name,
        slug: church.slug
      };

      resolve(jwt.sign(tokenData, auth.secret));
    });

  });
}

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, auth.secret, function(err, decoded) {
      if (err || !decoded) {
        return reject();
      }

      resolve(decoded);
    });
  });
}

function renew(decoded) {
  return new Promise((resolve) => {
    const now = Math.floor(Date.now() / 1000);
    decoded.exp = now + auth.timeout;

    resolve(jwt.sign(decoded, auth.secret));
  });
}

function updateChurch(decoded, church) {
  return new Promise((resolve) => {
    decoded.church = {
      id: church.id,
      name: church.name,
      slug: church.slug
    };

    resolve(jwt.sign(decoded, auth.secret));
  });

}

module.exports = {
  generate: generate,
  verify: verify,
  renew: renew,
  updateChurch: updateChurch
};
