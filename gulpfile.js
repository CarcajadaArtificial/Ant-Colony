// =====================================================================================================
//   ____       _       
//  / ___|_   _| |_ __  
// | |  _| | | | | '_ \ 
// | |_| | |_| | | |_) |
//  \____|\__,_|_| .__/ 
//               |_|    
// =====================================================================================================
/** 
 * `~/gulpfile.js` Contains functions that do jobs otherwise done manually in a terminal, and tasks that orchestrate these.
 * 
 * @namespace Gulp
 * @see {@link https://gulpjs.com/docs/en/getting-started/creating-tasks docs} for further information.
 * 
 * @requires NPM:gulp
 * @requires NPM:fs (File System)
 * @requires NPM:jsdoc-to-markdown
 * @requires NPM:sassdoc
 */

/**
 * To-do list
 * @todo Add a testing task.
 * @todo Add a SassDoc task.
 */

const gulp = require('gulp');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
const mocha = require('mocha');
var sassdoc = require('sassdoc');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Job functions

/**
 * Turns JSDoc annotations into documentation inside `~/src/README.md`.
 * @memberof Gulp
 * @name jsDocs
 * @param {function} cb - Callback function for executing asynchronously.
 */
function jsDocs(cb) {
  const output = jsdoc2md.renderSync({ files: ['./src/**/*.js', './gulpfile.js', './server.js', './routes.js'] });
  fs.writeFileSync('src/README.md', output);
  cb();
}

/**
 * Turns sassdoc annotations into documentation inside `~/src/style/docs`.
 * @memberof Gulp
 * @name sassDocs
 * @param {function} cb - Callback function for executing asynchronously.
 */
function sassDocs(cb) {
  gulp.src('./src/style/**/*.scss').pipe(sassdoc({
    dest: './src/style/docs'
  }));
  cb();
}

/**
 * Executes automatic unit tests.
 * @memberof Gulp
 * @name unitTest
 * @param {function} cb - Callback function for executing asynchronously.
 */
function unitTest(cb) {
  cb();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Gulp tasks

/**
 * Running inside the terminal the command `gulp docs` executes all documentation functions in parallel.
 * @memberof Gulp
 * @name docs
 */
exports.docs = gulp.parallel(jsDocs, sassDocs);

/**
 * Running inside the terminal the command `gulp test` executes all testing functions in parallel.
 * @memberof Gulp
 * @name test
 */
exports.test = gulp.parallel(unitTest);

/**
 * Running inside the terminal the command `gulp watchDocs` watches and executes in parallel all documentation functions when `~/gulpfile.js`, `~/routes.js`, `~/server.js` or `~/src/ ** / *.js` are changed.
 * @memberof Gulp
 * @name watchDocs
 */
exports.watchDocs = function() {
  gulp.watch('./gulpfile.js', jsDocs);
  gulp.watch('./server.js', jsDocs);
  gulp.watch('./routes.js', jsDocs);
  gulp.watch('./src/**/*.js', jsDocs);
  gulp.watch('./src/style/**/*.scss', sassDocs);
}