import url from 'url';
import systemjs from 'systemjs';

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    "Test": "./dist/Test.js"
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