// =====================================================================================================
//       _          _   
//      / \   _ __ | |_ 
//     / _ \ | '_ \| __|
//    / ___ \| | | | |_ 
//   /_/   \_\_| |_|\__|
//
// =====================================================================================================
/** 
 * `~/src/app/ant.js` Contains the class Ant.
 * 
 * @class
 * @property {foo} bar - Foobar
 */
class Ant {
  /**
   * Creates a new Ant object.
   * @constructor
   * @example
   * var antony = new Ant();
   */
  constructor() {
  }

  /**
   * Prints a message from the ant.
   * @return {string} Message spoken.
   * @example
   * var antony = new Ant();
   * console.log(antony.talk());
   */
  talk() {
    return "Hi, I am an ant.";
  }
}

module.exports = Ant;