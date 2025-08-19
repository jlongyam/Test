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
      for (var i = 0; i < cases.length; i++) {
        var _testCase = cases[i];
        var sub0 = String(_testCase.fn);
        var sub1 = sub0.indexOf('assert(');
        var sub = sub0.substring(sub1, sub0.lastIndexOf(')') + 1);
        var describeText = _testCase.description.split(" - ")[0];
        if (currentDescribe !== describeText) {
          currentDescribe = describeText;
          var groupHeader = document.createElement("h2");
          setTextContent(groupHeader, currentDescription);
          resultsContainer.appendChild(groupHeader);
        }
        var resultElement = document.createElement("p");
        try {
          _testCase.fn();
          setTextContent(resultElement, " ".concat(sub));
          resultElement.style.color = "green";
        } catch (error) {
          setTextContent(resultElement, " ".concat(sub, " - ").concat(error.message));
          resultElement.style.color = "red";
        }
        resultsContainer.appendChild(resultElement);
      }
      return;
    } else {
      console.group(currentDescription);
      for (var _i = 0; _i < cases.length; _i++) {
        var testCase = cases[_i];
        var sub0 = String(testCase.fn);
        var sub1 = sub0.indexOf('assert(');
        var sub = sub0.substring(sub1, sub0.lastIndexOf(')') + 1);
        try {
          testCase.fn();
          console.log('\x1b[32m' + sub + '\x1b[0m');
        } catch (error) {
          console.error('\x1b[31m' + sub + ' - ' + error.message + '\x1b[0m');
        }
      }
      console.groupEnd();
    }
  }
  function setTextContent(element, text) {
    if (typeof element.textContent !== 'undefined') {
      element.textContent = text;
    } else {
      element.innerText = text;
    }
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
    if (arguments.length === 1) {
      fn = arguments[0];
    }
    cases.push({
      description: '',
      fn: fn
    });
  }
  function assert(condition, message) {
    message = 'Fail: ';
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
return Test
})();