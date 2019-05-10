require('marko/node-require').install();

var express = require('express');
var app = express();

require('lasso').configure({
  plugins: ['lasso-marko', 'lasso-sass']
});

app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./src/routes/home'));

app.listen(8080, function() {
  console.log('Listening on port 8080');

  // Browser refresh traffic server.
  if (process.send) {
    process.send({ event:'online', url:'http://localhost:8080/' });
  }
});
