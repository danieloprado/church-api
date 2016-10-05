const router = require('express').Router(),
  checkUser = require('middlewares/checkUser');

router.use(checkUser());
router.get('/', require('./list'));
router.get('/:id', require('./get'));
router.post('/', require('./save'));

module.exports = router;
