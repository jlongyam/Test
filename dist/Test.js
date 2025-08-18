var Test = (function(){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function Test() {
  var cases = [];
  var currentDescription = '';
  function run() {
    if (!cases || cases.length === 0) {
      console.warn("Zero cases");
      return;
    }
    var currentDescribe = null;
    if (typeof window !== "undefined") {
      var resultsContainer = document.getElementById("test-results") || document.createElement("pre");
      resultsContainer.id = "test-results";
      resultsContainer.style.fontSize = "110%";
      if (!document.getElementById("test-results")) {
        document.body.appendChild(resultsContainer);
      }
      cases.forEach(function (testCase) {
        var describeText = testCase.description.split(" - ")[0];
        var itText = testCase.description.split(" - ")[1];
        if (currentDescribe !== describeText) {
          currentDescribe = describeText;
          var groupHeader = document.createElement("h2");
          groupHeader.textContent = currentDescribe;
          resultsContainer.appendChild(groupHeader);
        }
        var resultElement = document.createElement("p");
        try {
          testCase.fn();
          resultElement.textContent = "\u2714 ".concat(itText);
          resultElement.style.color = "green";
        } catch (error) {
          resultElement.textContent = "\u2716 ".concat(itText, " - ").concat(error.message);
          resultElement.style.color = "red";
        }
        resultsContainer.appendChild(resultElement);
      });
      return;
    }
    cases.forEach(function (testCase) {
      if (currentDescribe !== testCase.description.split(" - ")[0]) {
        if (currentDescribe !== null) {
          console.groupEnd();
        }
        currentDescribe = testCase.description.split(" - ")[0];
        console.group(currentDescribe);
      }
      try {
        testCase.fn();
        console.log("\x1B[32m\u2714 ".concat(testCase.description, "\x1B[0m"));
      } catch (error) {
        console.error("\x1B[31m\u2716 ".concat(testCase.description, " - ").concat(error.message, "\x1B[0m"));
      }
    });
    if (currentDescribe !== null) {
      console.groupEnd();
    }
  }
  function deepCompare(obj1, obj2) {
    if (_typeof(obj1) !== "object" || obj1 === null || _typeof(obj2) !== "object" || obj2 === null) {
      return obj1 === obj2;
    }
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (var _i = 0, _keys = keys1; _i < _keys.length; _i++) {
      var key = _keys[_i];
      if (!obj2.hasOwnProperty(key) || !deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  function describe(description, fn) {
    cases = [];
    currentDescription = description;
    fn();
    run();
  }
  function it(description, fn) {
    cases.push({
      description: currentDescription + " - " + description,
      fn: fn
    });
  }
  function assert(condition) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (typeof window !== "undefined") {
      if (Array.isArray(condition) && condition.length === 2) {
        if (!deepCompare(condition[0], condition[1])) {
          throw new Error(message + " Expected ".concat(JSON.stringify(condition[0]), " equals ").concat(JSON.stringify(condition[1])));
        }
      } else {
        if (!condition) {
          throw new Error(message + " Expected ".concat(String(condition)));
        }
      }
    } else {
      if (Array.isArray(condition) && condition.length === 2) {
        if (!deepCompare(condition[0], condition[1])) {
          throw new Error(message + " Expected ".concat(JSON.stringify(condition[0]), " equals ").concat(JSON.stringify(condition[1])));
        }
      } else {
        if (!condition) {
          throw new Error(message + " Expected ".concat(String(condition)));
        }
      }
    }
  }
  return {
    describe: describe,
    it: it,
    assert: assert
  };
}
return Test
})();