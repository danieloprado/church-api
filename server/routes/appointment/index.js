const router = require('express').Router(),
  checkUser = require('middlewares/checkUser');

router.use(checkUser());
router.get('/', require('./list'));

module.exports = router;
