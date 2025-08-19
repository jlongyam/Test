"use strict"

var _Test = Test(),
  describe = _Test.describe,
  it = _Test.it,
  assert = _Test.assert
describe("Test Boolean", function () {
  it("Should pass", function () {
    assert(true)
  })
  it("Should fail", function () {
    assert(false)
  })
})
describe("Test String", function () {
  it('Should say "OK"', function () {
    assert("O" + "K" === "OK")
  })
  it(function () {
    assert("O" + "K" === "NO", "It should fail: ")
  })
})
describe("Test Aray", function () {
  it("assert ([a, b])", function () {
    var a = [1, 2]
    var b = [1, 2, 3]
    a.push(3)
    assert([a, b])
  })
  it("assert (a === b)", function () {
    var a = [1, 2]
    var b = [1, 2, 3]
    a.push(3)
    assert(a === b)
  })
  it("assert (String(a) === String(b))", function () {
    var a = [1, 2]
    var b = [1, 2, 3]
    a.push(3)
    assert(String(a) === String(b))
  })
})
describe("Test Object", function () {
  it("", function () {
    var a = {
      value: 1,
    }
    var b = {
      value: 1,
    }
    assert([a, b])
  })
  it(function () {
    var one = {
      value: "ONE",
    }
    var two = {
      value: "TWO",
    }
    assert([one, two])
  })
})
