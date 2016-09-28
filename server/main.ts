import * as express from 'express';

var app = express();

app.get('/', function(req: express.Request, res: express.Response) {
  res.json('ok');
});

app.listen(3000, function() {
  console.log('server start at 3000');
});
