$("document").ready(function() {

  var inputArray = [];
  var decimal = false;
  var value = 0;
  var memory = null;
  var opperation = '';
  var ASDM = '';
  var result = 0; 

//-------------------------------------------------

    $('#clear').click(function() {
      inputArray = [];
      decimal = false;
      value = 0;
      memory = null;
      opperation = '';
      ASDM = '';
      result = 0;
      $('#screen').html('0');
    })

//-------------------------------------------------

    $('.num').click(function() {

      if (inputArray.length == 0)  //resets screen upon entry of new number
        $('#screen').html('');

      if (inputArray.length < 9) // keeps entry length below 10 characters
        value = $(this).attr('id');

      if (value != '.') {  //checks for decimal
        inputArray.push(value);

        if (inputArray[0] == 0) //ensures no leading 0s in entry
          inputArray.shift();
        else
          $('#screen').append(value);
      }

      else if (decimal === false) {  //ensures that only one decimal is allowed
        inputArray.push(value);
        $('#screen').append(value);
        decimal = true;
      }
    });

//-------------------------------------------------

    $('.opp').click(function() {
      if (memory == null) {      // checks to see if first number (no memory)
        if (inputArray.length != 0) {
        ASDM = $(this).attr('id');  // assigns function based on button id
        memory = Number(inputArray.join('')); // joins array to number
        inputArray = []; // resets input
        }
      }

      else if (inputArray.length == 0)
        ADSM = $(this).attr('id');

      else {
        // calculation - sends first number from memory, converted array
        // from second entry, and the opperation to be completed
        result = doMath(memory, Number(inputArray.join('')), ASDM);
        ASDM = $(this).attr('id');
        memory = result;  // sends result to memory
        inputArray = [];  // resets input
        $('#screen').html(result); // sends result to screen;
      }

      decimal = false; // resets decimal bool
    });

//-------------------------------------------------

    var doMath = function(val1, val2, expression) {
      switch (expression) {
        case 'divide':
          return (val1 / val2);
          break;
        case 'multiply':
          return (val1 * val2);
          break;
        case 'add':
          return (val1 + val2);
          break;
        case 'subtract':
          return (val1 - val2);
          break;
        case 'equal':
          return val1;
          break;
        default :
          console.log('error: ' + expression);
      }
    }

});
