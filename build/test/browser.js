import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import babel from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(dirname(__dirname));
let input = fs.readFileSync(project + '/test/html/test.js', 'utf-8');

async function compile(data) {
  return new Promise((resolve)=> {
    let output = babel.transform(data, {
      presets: ["@babel/preset-env"]
    }).code;
    resolve(output)
  })
}

try {
  let code = await compile(input);
  fs.writeFileSync(project+'/test/html/legacy/test.js', code, 'utf-8');
} catch (e) {
  console.error(e)
}

try {
  let code_test = fs.readFileSync(project + '/test/html/legacy/test.js', 'utf-8');
  let code_replace = code_test.replace('Test()', 'Test.default()');
  let code_amd = `define(["Test"], function (Test) {\n${code_replace}\n})`;
  fs.writeFileSync(project+'/test/html/legacy/test.amd.js', code_amd, 'utf-8');
} catch (e) {
  console.error(e)
}

try {
  let code_test = fs.readFileSync(project + '/test/html/legacy/test.js', 'utf-8');
  let code_replace = code_test.replace('Test()', 'Test.default()');
  let code_system = `System.import(["Test"]).then(function (Test) {\n${code_replace}\n})`;
  fs.writeFileSync(project+'/test/html/legacy/test.system.js', code_system, 'utf-8');
} catch(e) {
  console.error(e)
}