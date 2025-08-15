const Test = require('../../dist/Test.cjs');
const { describe, it, assert, run } = Test.default();

describe("Test", () => {
  it("should 5", () => {
    assert(2+3 === 5);
  });
  it("should 4", () => {
    assert(-1+5 === 5);
  });
  it("should 0", () => {
    assert(0+0 === 0);
  });
});

run();