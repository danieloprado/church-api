const express = require('express'),
  errors = require('middlewares/errors');

const router = express.Router();

//router.use("/account", require("./account/routes"));
//router.use("/profile", require("./profile/routes"));

router.use(errors.notFound);

module.exports = router;
