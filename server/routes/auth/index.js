const router = require('express').Router();

router.post('/login', require('./login'));
router.get('/test', test);

function test(req, res) {
  res.json(req.user);
}

module.exports = router;
