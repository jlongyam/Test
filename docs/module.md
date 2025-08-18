# ES Module

Using Test.js as **ES6 Module** in HTML

Note: this is __browser__ side, __not__ in __Terminal__.

## Import in html directly

```html
<script type="module">
  import Test from "../node_modules/@jlongyam/test/dist/Test.min.mjs";

  const { describe, it, assert } = Test();
</script>
```

## Import in html using `importmap`

```html
<script type="importmap">
  {
    "imports": {
      "Test": "../node_modules/@jlongyam/test/dist/Test.min.mjs"
    }
  }
</script>

<script type="module">
  import Test from "Test";

  const { describe, it, assert } = Test();
</script>
```

## Import external script `module`

```html
<script type="module" src="./test.js"></script>
```

```js
import Test from "../node_modules/@jlongyam/test/dist/Test.min.mjs";

const { describe, it, assert } = Test();
```

## Import external script `module` using `importmap`

In HTML

```html
<script type="importmap">
  {
    "imports": {
      "Test": "../node_modules/@jlongyam/test/dist/Test.min.mjs"
    }
  }
</script>
<script type="module" src="./test.js"></script>
```

Then in __test.js__

```js
import Test from 'Test';

const { describe, it, assert } = Test();
```

See also: [CDN](./CDN.md)