/**
 * 正则匹配字符串直接量
 */
const StringRegExp = function(str) {
  const regexp = /"[^]*"|'[^]*'/;
  if (!regexp.test(str)) {
    return false;
  }
  return true;
}

module.exports = StringRegExp;