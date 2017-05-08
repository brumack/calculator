$("document").ready(function() {

var numerArray = [0,1,2,3,4,5,6,7,8,9];
var oppArray = ['a','s','m','d'];
var symbolArray = ['+', '-', 'x', '/'];

var ans = 0;
var entry = [];
var number = 0;

var add = function(ans, number) {
  return ans + number;
}

var sub = function(ans, number) {
  return ans - number;
}

var mult = function(ans, number) {
  return ans * number;
}

var divide = function(ans, number) {
  return ans / number;
}

$('#zero').click(function() {
  entry.push('0');
  $('#screen').append('0')
});

$('#one').click(function() {
  entry.push('1');
  $('#screen').append('1');
});

$('#two').click(function() {
  entry.push('2');
  $('#screen').append('2');
});

$('#three').click(function() {
  entry.push('3');
  $('#screen').append('3');
});

$('#four').click(function() {
  entry.push('4');
  $('#screen').append('4');
});

$('#five').click(function() {
  entry.push('5');
  $('#screen').append('5');
});

$('#six').click(function() {
  entry.push('6');
  $('#screen').append('6');
});

$('#seven').click(function() {
  entry.push('7');
  $('#screen').append('7');
});

$('#eight').click(function() {
  entry.push('8');
  $('#screen').append('8');
});

$('#nine').click(function() {
  entry.push('9');
  $('#screen').append('9');
});

$('.opp').click(function() {
  number = entry.join('');
  console.log(number);
});

});
