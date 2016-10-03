const router = require('express').Router();

router.post('/login', require('./actions/login'));

module.exports = router;
