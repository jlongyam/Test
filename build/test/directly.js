import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import babel from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(dirname(__dirname));
let input = fs.readFileSync(project + '/test/html/directly.js', 'utf-8');

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
  fs.writeFileSync(project+'/test/html/legacy/directly.js', code, 'utf-8');
} catch (e) {
  console.error(e)
}