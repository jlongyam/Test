# Commonjs #

Using Test.js as __Commonjs__.

__Note__: If your config `type` is `module`, make sure your file end with extension `.cjs`.

```js
const Test = require('@jlongyam/test');

const { describe, it, assert } = Test;

describe("Test", () => {
  it("should 5", () => {
    assert(2+3 === 5);
  });
  it("should 4", () => {
    assert(-1+5 === 5);
  });
  it("should 0", () => {
    assert(0+0 === 0);
  });
});
```