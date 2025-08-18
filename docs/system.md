# Sytemjs

Using Test.js as **Systemjs**

## In Terminal

Install first:

```shell
npm i systemjs
```

Then:

```js
import url from "url";
import systemjs from "systemjs";

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    Test: "./node_modules/@jlongyam/test/dist/Test.js",
  },
});

const Test = await System.import(["Test"]);
const { describe, it, assert } = Test.default();

describe("Test", () => {
  it("should 5", () => {
    assert(2 + 3 === 5);
  });
  it("should 4", () => {
    assert(-1 + 5 === 5);
  });
  it("should 0", () => {
    assert(0 + 0 === 0);
  });
});
```

## in HTML

Local

```html
<script src="./lib/s.min.js"></script>
<script type="systemjs-importmap">
  {
    "imports": {
      "Test": "../node_modules/@jlongyam/test/dist/system/Test.min.js"
    }
  }
</script>
<script>
  (async function () {
    const Test = await System.import(["Test"]);
    const { describe, it, assert } = Test.default();

    describe("Test", () => {
      it("should 5", () => {
        assert(2 + 3 === 5);
      });
      it("should 4", () => {
        assert(-1 + 5 === 5);
      });
      it("should 0", () => {
        assert(0 + 0 === 0);
      });
    });
  })();
</script>
```

See also: [CDN](./CDN.md)