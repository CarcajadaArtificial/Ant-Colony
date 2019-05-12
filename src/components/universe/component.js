// =====================================================================================================
//   _   _       _                         
//  | | | |_ __ (_)_   _____ _ __ ___  ___ 
//  | | | | '_ \| \ \ / / _ \ '__/ __|/ _ \
//  | |_| | | | | |\ V /  __/ |  \__ \  __/
//   \___/|_| |_|_| \_/ \___|_|  |___/\___|
//
// =====================================================================================================
var d3 = require('d3');
var Ant = require('../../app/ant');
/** 
 * `~/src/components/universe/component.js` Contains the component class Universe.
 * @author Oscar Alfonso Guerrero
 * 
 * @class
 * @property {foo} bar - Foobar
 * 
 * @requires NPM:d3
 * @requires ~/src/app/ant:Ant
 */
class Universe {
  /**
   * This function is executed once after the component is mounted.
   */
  onMount() {
    does();
  }
}

/**
 * Contains the colors used in the universe.
 * @memberof Universe
 * @example
 * var color = {
 *   ground: '#8A9544',
 *   ant: '#D76729',
 *   food: '#E7B834',
 *   water: '#3FA483',
 *   other: '#503038'
 * }
 */
var color = {
  ground: '#8A9544',
  ant: '#D76729',
  food: '#E7B834',
  water: '#3FA483',
  other: '#503038'
}

function does() {
  var svg = d3.select('svg').append('rect').attr('width', '256').attr('height', '256').attr('fill', color.ground);
  var ant = new Ant;
  console.log(ant.talk());
}

module.exports = Universe;