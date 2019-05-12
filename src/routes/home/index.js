// =====================================================================================================
//    _   _                      
//   | | | | ___  _ __ ___   ___ 
//   | |_| |/ _ \| '_ ` _ \ / _ \
//   |  _  | (_) | | | | | |  __/
//   |_| |_|\___/|_| |_| |_|\___|
//                            
// =====================================================================================================
var template = require('./template.marko');
/** 
 * `~/src/routes/home/index.js` Contains the route for home.
 * 
 * @memberof Routes
 * @name home
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
module.exports = function(req, res) {
  template.render({}, res);
};
