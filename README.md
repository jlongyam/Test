[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/jlongyam/Test)
[![ReadMe](https://img.shields.io/badge/ReadMe-018EF5?logo=readme&logoColor=fff)](#)
[![NPM](https://nodei.co/npm/@jlongyam/test.svg?style=flat&data=n,v,d&color=blue)](https://www.npmjs.com/package/@jlongyam/test)

# Test #

Simple Test utility.

### Install ###

```shell
npm i @jlongyam/test -D
```

### Script ###

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

More usage see [docs](./docs/README.md)
