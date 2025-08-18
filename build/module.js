import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(__dirname);
let input = fs.readFileSync(project + '/src/Test.js', 'utf-8');
let output = {
  cjs: `${input}\nmodule.exports = Test`,
  mjs: `${input}\nexport default Test`
};

fs.writeFileSync(project+'/dist/Test.cjs', output.cjs, 'utf-8');
fs.writeFileSync(project+'/dist/Test.mjs', output.mjs, 'utf-8');