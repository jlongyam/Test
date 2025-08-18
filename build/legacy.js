import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import babel from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(__dirname);
let input = fs.readFileSync(project + '/src/Test.js', 'utf-8');

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
  fs.writeFileSync(project+'/dist/Test.js', code, 'utf-8');
} catch (e) {
  console.error(e)
}

try {
  let code_current = fs.readFileSync(project + '/dist/Test.js', 'utf-8');
  let code_iife = `var Test = (function(){\n${code_current}\nreturn Test\n})();`
  fs.writeFileSync(project+'/dist/Test.js', code_iife, 'utf-8');
} catch (e) {
  console.error(e)
}