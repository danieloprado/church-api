const express = require('express'),
  user = require('models/user'),
  errors = require('middlewares/errors');

const router = express.Router();

//router.use("/account", require("./account/routes"));
//router.use("/profile", require("./profile/routes"));

router.get('/user', function(req, res) {
  user.query().then(function(users) {
    res.json(users);
  });
});

router.use(errors.notFound);

module.exports = router;
