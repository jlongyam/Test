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
  it(() => {
    assert("O" + "K" === "NO", 'It should fail: ');
  });
});
describe("Test Aray", () => {
  it("assert ([a, b])", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert([a, b]);
  });
  it("assert (a === b)", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert(a === b);
  });
  it("assert (String(a) === String(b))", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    assert(String(a) === String(b));
  });
});
describe("Test Object", () => {
  it('', () => {
    let a = { value: 1 };
    let b = { value: 1 };
    assert([a, b]);
  });
  it(() => {
    let one = { value: "ONE" };
    let two = { value: "TWO" };
    assert([one, two]);
  });
});
