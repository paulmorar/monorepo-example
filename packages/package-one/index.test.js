const multiplyWithSelf = require("./index");

describe("multiplyWithSelf", () => {
  it("should multiply with self", () => {
    expect(multiplyWithSelf(2)).toEqual(4);
  });
});