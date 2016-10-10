const router = require('express').Router();

router.get('/:church/informatives/', require('./informatives'));

module.exports = router;
