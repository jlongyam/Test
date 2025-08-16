# Sytemjs #

Using Test.js as __Systemjs__

## Node

```js
import url from 'url';
import systemjs from 'systemjs';

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    "Test": "./node_modules/@jlongyam/test/dist/Test.js"
  }
});

const Test = await System.import(['Test']);
const { describe, it, assert, run } = Test.default();

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

run();
```

## HTML

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html" />
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test: systemjs</title>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.15.1/dist/system.min.js"></script>
  </head>
  <body>
    <script type="systemjs-importmap">
      {
        "imports": {
          "Test": "https://cdn.jsdelivr.net/npm/@jlongyam/test@0.4.0/dist/Test.js"
        }
      }
    </script>
    <script>
      (async function () {
        const Test = await System.import(["Test"]);
        const { describe, it, assert, run } = Test.default();

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

        run();
      })();
    </script>
  </body>
</html>
```