const multiplyWithSelf = require("package-one");
const multiplyWithSelfTwice = require("package-two");

describe("When using multiplyWithSelf and multiplyWithSelfTwice", () => {
  it("should return correct number", () => {
    expect(multiplyWithSelf(multiplyWithSelfTwice(1))).toEqual(1);
  });
});