define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
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
        for (var i = 0; i < cases.length; i++) {
          var _testCase = cases[i];
          var describeText = _testCase.description.split(" - ")[0];
          var itText = _testCase.description.split(" - ")[1];
          if (currentDescribe !== describeText) {
            currentDescribe = describeText;
            var groupHeader = document.createElement("h2");
            setTextContent(groupHeader, currentDescribe);
            resultsContainer.appendChild(groupHeader);
          }
          var resultElement = document.createElement("p");
          try {
            _testCase.fn();
            setTextContent(resultElement, getPassSymbol() + " ".concat(itText));
            resultElement.style.color = "green";
          } catch (error) {
            setTextContent(resultElement, getFailSymbol() + " ".concat(itText, " - ").concat(error.message));
            resultElement.style.color = "red";
          }
          resultsContainer.appendChild(resultElement);
        }
        return;
      } else {
        for (var _i = 0; _i < cases.length; _i++) {
          var testCase = cases[_i];
          if (currentDescribe !== testCase.description.split(" - ")[0]) {
            if (currentDescribe !== null && typeof console !== 'undefined') {
              console.groupEnd();
            }
            currentDescribe = testCase.description.split(" - ")[0];
            if (typeof console !== 'undefined') {
              console.group(currentDescribe);
            }
          }
          try {
            testCase.fn();
            if (typeof console !== 'undefined') {
              console.log('\x1b[32m' + getPassSymbol() + ' ' + testCase.description + '\x1b[0m');
            }
          } catch (error) {
            if (typeof console !== 'undefined') {
              console.error('\x1b[31m' + getFailSymbol() + ' ' + testCase.description + ' - ' + error.message + '\x1b[0m');
            }
          }
        }
        if (currentDescribe !== null && typeof console !== 'undefined') {
          console.groupEnd();
        }
      }
    }

    // Helper function to set text content
    function setTextContent(element, text) {
      if (typeof element.textContent !== 'undefined') {
        element.textContent = text;
      } else {
        element.innerText = text;
      }
    }
    function getPassSymbol() {
      return '>';
    }
    function getFailSymbol() {
      return '!';
    }
    function deepCompare(obj1, obj2) {
      if (_typeof(obj1) !== "object" || obj1 === null || _typeof(obj2) !== "object" || obj2 === null) {
        return obj1 === obj2;
      }
      var keys1 = [];
      for (var key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
          keys1.push(key);
        }
      }
      var keys2 = [];
      for (var key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
          keys2.push(key);
        }
      }
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];
        if (!Object.prototype.hasOwnProperty.call(obj2, key) || !deepCompare(obj1[key], obj2[key])) {
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
    function assert(condition, message) {
      if (typeof window !== "undefined") {
        if (_typeof(condition) === 'object' && condition !== null && typeof condition.length === 'number' && condition.length === 2) {
          if (!deepCompare(condition[0], condition[1])) {
            throw new Error(message + ' Expected ' + JSON.stringify(condition[0]) + ' equals ' + JSON.stringify(condition[1]));
          }
        } else {
          if (!condition) {
            throw new Error(message + ' Expected ' + String(condition));
          }
        }
      } else {
        if (_typeof(condition) === 'object' && condition !== null && typeof condition.length === 'number' && condition.length === 2) {
          if (!deepCompare(condition[0], condition[1])) {
            throw new Error(message + ' Expected ' + JSON.stringify(condition[0]) + ' equals ' + JSON.stringify(condition[1]));
          }
        } else {
          if (!condition) {
            throw new Error(message + ' Expected ' + String(condition));
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
  var _default = _exports["default"] = Test;
});