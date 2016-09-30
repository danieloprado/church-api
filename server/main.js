require('app-module-path/register');

const express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  timeout = require('connect-timeout'),
  allowCors = require('middlewares/allowCors'),
  bindUser = require('middlewares/bindUser'),
  errors = require('middlewares/errors');

const publicDir = __dirname + '/../dist';
const env = process.env.NODE_ENV || 'production';
const port = process.env.NODE_PORT || 3000;
const app = express();

if (env === 'development') {
  app.use(logger('dev'));
}

app.use(express.static(publicDir));
app.use(timeout('5s'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCors);
app.use(bindUser);

app.use('/api', require('routes'));
app.get('*', (req, res) => res.sendFile('index.html', { root: publicDir }));

app.use(errors.notFound);
app.use(errors.validationErrors);

if (env === 'development') {
  app.use(errors.developmentError);
} else {
  app.use(errors.productionError);
}

app.listen(port, () => console.log('server start at ' + port));
