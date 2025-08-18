const Test = require('../../dist/Test.cjs');
const { describe, it, assert } = Test();

describe("Test Boolean", () => {
  it("Should pass", () => {
    assert(true);
  });
  it("Should fail", () => {
    assert(false);
  });
});

describe("Test String", () => {
  it('Should say "OK"', () => {
    assert("O" + "K" === "OK");
  });
  it('Should say "OK"', () => {
    assert("O" + "K" === "NO");
  });
});

describe("Test Aray", () => {
  it("assert([a, b])", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert([a, b]);
  });
  it("assert([a, b])", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(4);
    assert([a, b]);
  });
  it("assert(a === b)", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert(a === b);
  });
});

describe("Test Object", () => {
  it("assert([a, b])", () => {
    let a = { value: 1 };
    let b = { value: 1 };
    assert([a, b]);
  });
  it("assert([one, two])", () => {
    let one = { value: 'ONE' };
    let two = { value: 'TWO' };
    assert([one, two]);
  });
});
