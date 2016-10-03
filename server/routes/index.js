const router = require('express').Router(),
  user = require('models/user'),
  errors = require('middlewares/errors');

router.use('/auth', require('./auth'));
//router.use("/profile", require("./profile/routes"));

router.get('/user', function(req, res) {
  user.query().eager('churches.church').then(function(users) {
    res.json(users);
  });
});

router.use(errors.notFound);

module.exports = router;
