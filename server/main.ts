import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as timeout from 'connect-timeout';

import * as config from './config';
import * as db from './db';
import * as errors from './middlewares/errors';
import { allowCors } from './middlewares/allowCors';
import { bindUser } from './middlewares/bindUser';

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
app.use(errors.validationErrors);

if (config.env === 'development') {
  app.use(errors.developmentError);
} else {
  app.use(errors.productionError);
}

app.listen(config.port, () => console.log('server start at ' + config.port));
