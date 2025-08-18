function Test() {
  let cases = [];
  let currentDescription = '';
  function run() {
    if (!cases || cases.length === 0) {
      console.warn("Zero cases");
      return;
    }
    let currentDescribe = null;
    if (typeof window !== "undefined") {
      const resultsContainer =
        document.getElementById("test-results") ||
        document.createElement("pre");
      resultsContainer.id = "test-results";
      resultsContainer.style.fontSize = "110%";
      if (!document.getElementById("test-results")) {
        document.body.appendChild(resultsContainer);
      }
      cases.forEach((testCase) => {
        const describeText = testCase.description.split(" - ")[0];
        const itText = testCase.description.split(" - ")[1];
        if (currentDescribe !== describeText) {
          currentDescribe = describeText;
          const groupHeader = document.createElement("h2");
          groupHeader.textContent = currentDescribe;
          resultsContainer.appendChild(groupHeader);
        }
        const resultElement = document.createElement("p");
        try {
          testCase.fn();
          resultElement.textContent = `✔ ${itText}`;
          resultElement.style.color = "green";
        } catch (error) {
          resultElement.textContent = `✖ ${itText} - ${error.message}`;
          resultElement.style.color = "red";
        }
        resultsContainer.appendChild(resultElement);
      });
      return;
    }
    cases.forEach((testCase) => {
      if (currentDescribe !== testCase.description.split(" - ")[0]) {
        if (currentDescribe !== null) {
          console.groupEnd();
        }
        currentDescribe = testCase.description.split(" - ")[0];
        console.group(currentDescribe);
      }
      try {
        testCase.fn();
        console.log(`\x1b[32m✔ ${testCase.description}\x1b[0m`);
      } catch (error) {
        console.error(
          `\x1b[31m✖ ${testCase.description} - ${error.message}\x1b[0m`
        );
      }
    });
    if (currentDescribe !== null) {
      console.groupEnd();
    }
  }
  function deepCompare(obj1, obj2) {
    if (
      typeof obj1 !== "object" ||
      obj1 === null ||
      typeof obj2 !== "object" ||
      obj2 === null
    ) {
      return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
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
    cases.push({ description: currentDescription + " - " + description, fn });
  }
  function assert(condition, message = "") {
    if (typeof window !== "undefined") {
      if (Array.isArray(condition) && condition.length === 2) {
        if (!deepCompare(condition[0], condition[1])) {
          throw new Error(
            message +
              ` Expected ${JSON.stringify(
                condition[0]
              )} equals ${JSON.stringify(condition[1])}`
          );
        }
      } else {
        if (!condition) {
          throw new Error(message + ` Expected ${String(condition)}`);
        }
      }
    } else {
      if (Array.isArray(condition) && condition.length === 2) {
        if (!deepCompare(condition[0], condition[1])) {
          throw new Error(
            message +
              ` Expected ${JSON.stringify(
                condition[0]
              )} equals ${JSON.stringify(condition[1])}`
          );
        }
      } else {
        if (!condition) {
          throw new Error(message + ` Expected ${String(condition)}`);
        }
      }
    }
  }

  return { describe, it, assert };
}

export default Test