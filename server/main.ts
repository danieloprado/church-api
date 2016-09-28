import { express } from 'express';

var app = express();

app.get('/', function(req, res) {
  res.send('Ok');
});

app.listen(3000, function() {
  console.log('server start at 3000');
});
