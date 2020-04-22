const NumberRegExp = require("./NumberRegExp");

console.assert(NumberRegExp("2.2e2") === true, `2.2e2不是合法的Number`);
console.assert(NumberRegExp("2.2E2") === true, `2.2E2不是合法的Number`);
console.assert(NumberRegExp("2.2e+2") === true, `2.2e+2不是合法的Number`);
console.assert(NumberRegExp("2.2e-2") === true, `2.2e-2不是合法的Number`);
console.assert(NumberRegExp("2.e2") === true, `2.e2不是合法的Number`);
console.assert(NumberRegExp(".2e2") === true, `.2e2不是合法的Number`);
console.assert(NumberRegExp(".e2") === true, `.e2不是合法的Number`);
console.assert(NumberRegExp("2.2e2d") === true, `2.2e2d不是合法的Number`);
console.assert(NumberRegExp("2.2") === true, `2.2不是合法的Number`);
console.assert(NumberRegExp(".2") === true, `.2不是合法的Number`);
console.assert(NumberRegExp("200") === true, `200不是合法的Number`);
console.assert(NumberRegExp("000.e2") === true, `000.e2不是合法的Number`);
console.assert(NumberRegExp("+Infinity") === true, `+Infinity不是合法的Number`);
console.assert(NumberRegExp("-Infinity") === true, `-Infinity不是合法的Number`);
console.assert(NumberRegExp("NaN") === true, `NaN不是合法的Number`);