//rewriting. completed number click. finished opperator click - add.



$("document").ready(function() {

  var entryArray = [];
  valArray = [];
  opArray = [];
  var entry = 0;
  var decimal = false;
  var result = 0;
  var oppLock = false;

  var clear = function() {
    entryArray = [];
    decimal = false;
    valArray = [];
    opArray = [];
    $('#screen').html('0');
  }
  var doMath = function(operation, val1, val2) {
    var answer = 0;
    switch(operation) {
      case '+': {
        answer = ((val1 + val2) + '').split('').slice(0,12).join('');
        return Number(answer);
        break;
      }
      case '-': {
        answer =  ((val1 - val2) + '').split('').slice(0,12).join('');
        return Number(answer);
        break;
      }
      case 'x': {
        answer =  ((val1 * val2) + '').split('').slice(0,12).join('');
        return Number(answer);
        break;
      }
      case '/': {
        answer =  ((val1 / val2) + '').split('').slice(0,12).join('');
        return Number(answer);
        break;
      }
      case '=': {
        return val1;
      }
      case 'C': {
        clear();
        return null;
      }
      default: {
        console.log('error');
        clear();
      }
    }
  }

  $('.num').click(function() {
    oppLock = false;
    if (opArray[0] == '=') {
      console.log('clear');
      clear();
    }

    if (entryArray.length == 0)
      $('#screen').html('');

    entry = $(this).attr('id');

    if (entryArray.length < 12) {
      if (decimal === false && entry == ".") {
        decimal = true;
        $('#screen').append(entry);
        entryArray.push(entry);
      }
      else if (entry != '.') {
        $('#screen').append(entry);
        entryArray.push(entry);
      }

    }
  });
  $('.opp').click(function() {
    if (oppLock == false || $(this).attr('ID') != '=') {
      oppLock = true;
      decimal = false;

      valArray.push(Number(entryArray.join('')));
      opArray.push($(this).attr('id'));
      entryArray = [];

      if (valArray.length == 2) {
        result = doMath(opArray[0], valArray[0], valArray[1])
        $('#screen').html(result);
        valArray = [result];
        opArray.shift();
      }
    }
  });
  $('#evenOdd').click(function(){
    if (entryArray.length > 0 && entryArray[0] != '-') {
      console.log('- added');
      entryArray.unshift('-');
      console.log(entryArray);
      $('#screen').html('');
      for (var i = 0; i < entryArray.length; i++)
        $('#screen').append(entryArray[i]);
    }
    else if (entryArray.length > 0 && entryArray[0] == '-') {
      console.log('- removed');
      entryArray.shift();
      $('#screen').html('');
      for (var j = 0; j < entryArray.length; j++)
        $('#screen').append(entryArray[j]);
    }
    else if (entryArray.length == 0)
      if (valArray[0] != 0) {
        valArray[0]*=-1;
        $('#screen').html(valArray[0]);
      }
    });
  $('#percent').click(function(){
    var merge = 0;
    var length = 0;
    if (entryArray.length > 0 && entryArray.length + 2 < 11) {
      length = entryArray.length;
      console.log(length);
      if (Number(entryArray.join(''))/100 > .00001) {
        $('#screen').html('');
        console.log('less,', Number(entryArray.join(''))/100, Number(entryArray.join('')));
        entryArray = ((Number(entryArray.join(''))/100)+'').split('').slice(0,length+3);
        for (var k = 0; k < entryArray.length; k++)
          $('#screen').append(entryArray[k]);
        }
    }
    else if (valArray.length != 0 && valArray[0]/100 > .00001) {
      $('#screen').html('');
      valArray[0] = (valArray[0]/100);
      merge = (valArray[0]+'').split('').slice(0,12).join('');
      valArray[0] = Number(merge);
      $('#screen').html(valArray[0]);
    }

  });
  $('#C').click(function() {
    clear();
  });
});
