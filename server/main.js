require('app-module-path/register');

const express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  timeout = require('connect-timeout'),
  config = require('config'),
  db = require('db'),
  allowCors = require('middlewares/allowCors'),
  bindUser = require('middlewares/bindUser'),
  errors = require('middlewares/errors');

db.connect();

const publicDir = __dirname + '/../dist';
const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
} else {
  app.use(timeout('5s'));
}

app.use(express.static(publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCors);
app.use(bindUser);

app.use('/api', require('routes'));
app.get('*', (req, res) => res.sendFile('index.html', { root: publicDir }));

app.use(errors.notFound);
app.use(errors.parser);

if (config.env === 'development') {
  app.use(errors.developmentError);
} else {
  app.use(errors.productionError);
}

app.listen(config.port, () => console.log('server start at ' + config.port));
