# Test #

Simple Test utility.

### Script

__`test/test.js`__

```js
import Test from "@jlongyam/test";

// Only 4 keywords
const { describe, it, assert, run } = Test();

describe("Test", () => {  // Container
  it("should 5", () => {  // Section
    assert(2+3 === 5);    // True
  });
  it("should 4", () => {
    assert(-1+5 === 5);   // False
  });
  it("should 0", () => {
    assert(0+0 === 0);
  });
});

run();                    // Report
```

__`package.json`__:

```JSON
"scripts": {
  "test": "node ./test/test.js"
}
```

### Terminal

```shell
npm test
```

```shell
Test
✔ should 5
✖ should 4 - Failed
✔ should 0
```