const Test = require("../src/Test.cjs");
const { describe, it, assert } = Test();

describe("Test 1", () => {
  it("Should pass", () => {
    assert(true);
  });
  it("Should fail", () => {
    assert(false);
  });
});

describe("Test 2", () => {
  it('Should say "OK"', () => {
    assert("O" + "K" === "OK");
  });
});

describe("Test 3", () => {
  it("Should array [1,2,3]", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert([a, b]);
  });
});
describe("Test 4", () => {
  it("Should object {value: 1}", () => {
    let a = { value: 1 };
    let b = { value: 1 };
    assert([a, b]);
  });
});
