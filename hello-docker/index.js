var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello Docker</title>
    </head>
    <body>
    <h1>Hello Docker</h1>
    </body>
    </html>
  `);
});

app.listen(80, function () {
  console.log('Example app listening on port 80');
});
