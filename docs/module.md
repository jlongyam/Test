# ES Module

Using Test.js as **ES6 Module** in HTML

```html
<script type="module">
  import Test from "https://cdn.jsdelivr.net/npm/@jlongyam/test@0.3.0/src/Test.min.js";
  
  const { describe, it, assert, run } = Test();

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
</script>
```
