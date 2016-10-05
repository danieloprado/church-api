const router = require('express').Router(),
  errors = require('middlewares/errors');

router.use('/auth', require('./auth'));
router.use('/appointment', require('./appointment'));
router.use('/informative', require('./informative'));
router.use(errors.notFound);

module.exports = router;
