# Sytemjs

Using Test.js as **AMD**

## HTML

Local

```html
<script src="./lib/require.js"></script>
<script>
  require(["../node_modules/@jlongyam/test/dist/amd/Test.min.js"], function (
    Test
  ) {
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
  });
</script>
```

See also: [CDN](./CDN.md)
