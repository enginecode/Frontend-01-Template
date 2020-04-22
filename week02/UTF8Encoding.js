/**
 * 将字符串按UTF8规范转为字节
 * @param {*} sDOMStr 
 */
function strToUTF8Arr (sDOMStr) {
  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;
  /* mapping... */

  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.charCodeAt(nMapIdx);
    nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription... */

  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
    nChr = sDOMStr.charCodeAt(nChrIdx);
    if (nChr < 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* three bytes */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else /* if (nChr <= 0x7fffffff) */ {
      /* six bytes */
      aBytes[nIdx++] = 252 + (nChr >>> 30);
      aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    }
  }

  return aBytes;
}

//十进制 转十六进制
function to16(num) {

  function _to16(num) { //十六进制单位转换
      switch (num) {
          case 0: return "0"
          case 1: return "1"
          case 2: return "2"
          case 3: return "3"
          case 4: return "4"
          case 5: return "5"
          case 6: return "6"
          case 7: return "7"
          case 8: return "8"
          case 9: return "9"
          case 10: return "A"
          case 11: return "B"
          case 12: return "C"
          case 13: return "D"
          case 14: return "E"
          case 15: return "F"
      }
  }

  num = num;
  if (!isNaN(num)) {
      var result = "";
      while (num >= 16) {  //循环求余后反向连接字符串
          result = _to16(num % 16) + result;
          num = parseInt(num / 16);
      }
      result = _to16(num % 16) + result;
      return result;
  }
  else
      return 0x0;
}


const UTF8Encoding = function(str) {
  let bytes = strToUTF8Arr(str);
  let arr = Array.from(bytes).map((item) => {
    return to16(item);
  })

  return `\\x${arr.join("\\x")}`;
}

module.exports = UTF8Encoding;
