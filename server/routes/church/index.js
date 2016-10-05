const router = require('express').Router(),
  checkUser = require('middlewares/checkUser');

router.use(checkUser());
router.get('/current', require('./current'));
router.post('/current', require('./save-current'));

module.exports = router;
