function convertStringToNumber(str, x) {
  if (arguments.length < 2) 
    x = 10;

  let i = 0;
  let inter = 0;

  while (i < str.length && str[i] != '.') {
    inter = inter * x + str[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }

  if (str[i] == '.') {
    i++;
  }

  let fraction = 1;
  while (i < str.length) {
    fraction /= x;
    inter = inter + (str[i].codePointAt(0) - "0".codePointAt(0))*fraction;
    i++;
  }

  return inter;
}

console.log(convertStringToNumber("11.11", 2));