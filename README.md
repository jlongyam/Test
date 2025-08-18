[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/jlongyam/Test)
[![ReadMe](https://img.shields.io/badge/ReadMe-018EF5?logo=readme&logoColor=fff)](#)
[![NPM](https://nodei.co/npm/@jlongyam/test.svg?style=flat&data=n,v,d&color=blue)](https://www.npmjs.com/package/@jlongyam/test)

# Test #

Simple Test utility.

- __deepCompare__ for nested Array and Object.
- Run automatically.

### Install ###

```shell
npm i @jlongyam/test -D
```

### Script ###

__`test/test.js`__

```js
import Test from "@jlongyam/test";

// Only 4 keywords
const { describe, it, assert } = Test();

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

```

__`package.json`__:

```JSON
"scripts": {
  "test": "node ./test/test.js"
}
```

### Terminal ###

```shell
npm test
```

```shell
Test
✔ should 5
✖ should 4 - Failed
✔ should 0
```

## Usage ##

How to test `Array` or `Object`:

Just like `console.assert`, comparing using `===` will fail,

There are two method:
- use `String(A) === String(B)`
- use __deepCompare__ `[A,B]` bracket.

Example:

```js
describe("Test", () => {
  it("assert ([a, b])", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    // PASS
    assert([a, b]);
  });
  it("assert (a === b)", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    // FAIL
    assert(a === b);
  });
  it("assert (String(a) === String(b))", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    a.push(3);
    // PASS
    assert(String(a) === String(b));
  });
});
```

More usage see [DOCS](./docs/README.md)
