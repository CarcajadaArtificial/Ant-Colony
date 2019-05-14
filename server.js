// =====================================================================================================
//    ____
//   / ___|  ___ _ ____   _____ _ __
//   \___ \ / _ \ '__\ \ / / _ \ '__|
//    ___) |  __/ |   \ V /  __/ |
//   |____/ \___|_|    \_/ \___|_|
//
// =====================================================================================================
/**
 * `~/server.js` Manages the server and ports.
 * 
 * @namespace Server
 * @see {@link https://markojs.com/docs/express/ docs} for further information.
 * @see {@link https://github.com/marko-js-samples/weather/blob/master/server.js example}.
 *
 * @requires NPM:marko (and install)
 * @requires NPM:express
 * @requires NPM:lasso (and configure)
 * @requires ./routes:routes
 */

// Imports Express.js module.
var express = require('express');
// Initiate the express app.
var app = express();
// Enable Lasso for rendering responses.
app.use(require('lasso/middleware').serveStatic());

// Enables `require(foo.marko);` with the default configuration options. 
// Add configuration options with `require('marko/node-require').install(options)`.
require('marko/node-require');
// Lasso configuration with marko and sass plugins enabled. Allowing to require marko files like normal js files and to add sass files as dependencies inside browser.json files.
require('lasso').configure({
  plugins: ['lasso-marko', 'lasso-sass']
});

// Importing all routes from the helper file.
require('./routes.js')(app);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Running inside the terminal the command `npm start` or `node server.js` will start the server and listen to the port `8080`. Additionally the command `browser-refresh server.js` will run a 
 * @memberof Server
 * @name listen
 */
app.listen(8080, function() {
  console.log('Listening on port 8080');

  // Browser refresh traffic server.
  if (process.send) {
    process.send({ event: 'online', url: 'http://localhost:8080/' });
  }
});
