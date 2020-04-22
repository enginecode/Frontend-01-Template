const StringRegExp = require("./StringRegExp");

console.assert(StringRegExp(`"测试"`) === true, `测试不是合法的String`);
console.assert(StringRegExp(`"测试\n "`) === true, `测试\n 不是合法的String`);
console.assert(StringRegExp(`"测试\n \u00a9"`) === true, `测试\n \u00a9不是合法的String`);
