# Sytemjs

Using Test.js as **AMD**

## HTML

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html" />
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test: require</title>
    <script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.7/require.min.js"></script>
  </head>
  <body>
    <script>
      require([
        "https://cdn.jsdelivr.net/npm/@jlongyam/test@0.4.0/dist/Test.amd.js",
      ], function (Test) {
        
        const { describe, it, assert} = Test.default();

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
        
      });
    </script>
  </body>
</html>
```
