const multiplyWithSelf = require("package-one");

function multiplyWithSelfTwice(number) {
  return multiplyWithSelf(multiplyWithSelf(number));
}

module.exports = multiplyWithSelfTwice;