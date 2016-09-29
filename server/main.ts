import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as timeout from 'connect-timeout';

const app = express();

app.use(timeout('5s'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req: express.Request, res: express.Response) {
  res.json('ok now');
});


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server start at ' + port);
});

