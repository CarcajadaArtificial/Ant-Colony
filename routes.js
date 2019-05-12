// =====================================================================================================
//    ____             _            
//   |  _ \ ___  _   _| |_ ___  ___ 
//   | |_) / _ \| | | | __/ _ \/ __|
//   |  _ < (_) | |_| | ||  __/\__ \
//   |_| \_\___/ \__,_|\__\___||___/
//
// =====================================================================================================
/** 
 * `~/routes.js` Manages all HTML and JSON API end points.
 * 
 * @namespace Routes
 * @see {@link https://github.com/marko-js-samples/weather/blob/master/routes.js example}.
 * 
 * @param {object} app - Express app object.
 */
module.exports = function(app) {
  app.get('/', require('./src/routes/home'));
};