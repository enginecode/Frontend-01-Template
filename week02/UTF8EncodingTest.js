const UTF8Encoding = require("./UTF8Encoding");

console.log(`对"%s"UTF8编码后：${UTF8Encoding("中文")}`, "中文");
console.log(`对"%s"UTF8编码后：${UTF8Encoding("a")}`, "a");
console.log(`对"☹"UTF8编码后：${UTF8Encoding("☹")}`, "☹");