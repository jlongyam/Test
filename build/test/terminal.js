import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(dirname(__dirname));
let input = fs.readFileSync(project + '/test/html/directly.js', 'utf-8');
let output = {
  cjs: `const Test = require('../../dist/Test.cjs');\n${input}`,
  mjs: `import Test from '../../dist/Test.mjs';\n${input}`
};

fs.writeFileSync(project+'/test/terminal/common.cjs', output.cjs, 'utf-8');
fs.writeFileSync(project+'/test/terminal/module.mjs', output.mjs, 'utf-8');