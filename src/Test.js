function Test() {
  let cases = [];
  function describe(description, fn) {
    console.log(`\n${description}`);
    fn();
  }
  function it(description, fn) {
    cases.push({ description, fn });
  }
  function assert(condition, message = "Failed") {
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
    cases.forEach(testCase => {
      try {
        testCase.fn();
        console.log(`✔ ${testCase.description}`);
      } catch (error) {
        console.error(`✖ ${testCase.description} - ${error.message}`);
      }
    });
  }
  return { describe, it, assert, run };
}

export default Test;