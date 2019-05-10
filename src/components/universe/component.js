var d3 = require('d3');

var color = {
  ground: '#8A9544',
  ant: '#D76729',
  food: '#E7B834',
  water: '#3FA483',
  other: '#503038'
}

function does() {
  var svg = d3.select('svg').append('rect').attr('width', '256').attr('height', '256').attr('fill', color.ground);
}

module.exports = class {
  onMount(){
    does();
  }
}