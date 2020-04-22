/**
 * 
 * 整数,小数,+Infinity,-Infinity,+NaN,-NaN, +0, -0
 * /^[+-]?(0(\.\d*)?|[1-9](\d*\.\d*)?\d*|\.\d+|Infinity|NaN)$/
 * 
 * 科学计数
 * /^[+-]?(0(\.\d*)?|[1-9](\d*\.\d*)?\d*|\.\d+)e[+-]?\d+$/
 */
const NumberRegExp = function(str) {
  let regexp = /^[+-]?(0(\.\d*)?|[1-9](\d*\.\d*)?\d*|\.\d+|Infinity|NaN)$|^[+-]?(0(\.\d*)?|[1-9](\d*\.\d*)?\d*|\.\d+)[e|E][+-]?\d+$/;

  if (!regexp.test(str)) {
    return false;
  } 

  return true;
}

module.exports = NumberRegExp;