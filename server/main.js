var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  timeout = require('connect-timeout'),
  Test = require('./middlewares');

console.log(new Test());
console.log(Test.age());

const app = express();

app.use(timeout('5s'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json('ok now');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server start at ' + port);
});
