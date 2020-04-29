function convertNumberToString(number, x) {
  var integer = Math.floor(number);
  var fraction = number - integer;

  var string = '';

  while (integer > 0) {
    string = String.fromCharCode(integer % x + "0".codePointAt(0)) + string;
    integer = Math.floor(integer/x);
  }  

  if (fraction > 0) {
    string += ".";
  }

  while (fraction > 0) {
    string += String.fromCharCode(Math.floor(fraction*x) + "0".codePointAt(0));
    fraction = fraction*x - Math.floor(fraction*x);
    console.log(fraction);
  }

  return string;
}

console.log(convertNumberToString(10.01, 10));