var d3 = require('d3');
var Ant = require('../../app/ant');

var color = {
  ground: '#8A9544',
  ant: '#D76729',
  food: '#E7B834',
  water: '#3FA483',
  other: '#503038'
}

function does() {
  var svg = d3.select('svg').append('rect').attr('width', '256').attr('height', '256').attr('fill', color.ground);
  console.log(new Ant);
}

class Universe {
  onMount(){
    does();
  }
}

module.exports = Universe;