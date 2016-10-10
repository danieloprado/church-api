const router = require('express').Router(),
  errors = require('middlewares/errors');

router.use('/app', require('./app'));
router.use('/auth', require('./auth'));
router.use('/appointment', require('./appointment'));
router.use('/church', require('./church'));
router.use('/informative', require('./informative'));
router.use(errors.notFound);

module.exports = router;
