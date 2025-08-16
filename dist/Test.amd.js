define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function Test() {
    var cases = [];
    function describe(description, fn) {
      console.log("\n" + description);
      fn();
    }
    function it(description, fn) {
      cases.push({
        description: description,
        fn: fn
      });
    }
    function assert(condition, message) {
      if (message === void 0) message = "Failed";
      message = message || String(condition);
      if (!condition) {
        throw new Error(message);
      }
    }
    function run() {
      if (!cases || cases.length === 0) {
        console.warn("Zero cases");
        return;
      }
      cases.forEach(function (testCase) {
        try {
          testCase.fn();
          console.log("✔ " + testCase.description);
        } catch (error) {
          console.error("✖ " + testCase.description + " - " + error.message);
        }
      });
    }
    return {
      describe: describe,
      it: it,
      assert: assert,
      run: run
    };
  }
  var _default = _exports["default"] = Test;
});