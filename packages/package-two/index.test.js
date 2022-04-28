const multiplyWithSelfTwice = require("./index");

describe("multiplyWithSelfTwice", () => {
  it("should multiply with selftwice", () => {
    expect(multiplyWithSelfTwice(3)).toEqual(81);
  });
});