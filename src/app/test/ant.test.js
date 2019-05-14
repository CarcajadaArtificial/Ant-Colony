// =====================================================================================================
//               _          _   
//              / \   _ __ | |_ 
//    _____    / _ \ | '_ \| __|
//   |_____|  / ___ \| | | | |_ 
//           /_/   \_\_| |_|\__|
//
// =====================================================================================================
const expect = require('chai').expect;
var Ant = require('../ant');
/**
 * Tests the class inside `~/src/app/ant.js`.
 * 
 * @memberof Test
 * @name Ant
 * 
 * @requires NPM:chai .expect
 * @requires ../ant:Ant
 */
describe('Ant', function() {
  describe('Class methods', function() {
    it('talk()', function() {
      var antony = new Ant;
      expect(antony.talk()).to.equal('Hi, I am an ant.');
    });
  });
});