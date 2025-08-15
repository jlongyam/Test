import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import babel from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(__dirname);
let input = fs.readFileSync(project + '/stage/Test.js', 'utf-8');

async function compile(data) {
  return new Promise((resolve)=> {
    let output = babel.transform(data, {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-transform-modules-systemjs"]
    }).code;
    resolve(output)
  })
}
async function compileToCJS(data) {
  return new Promise((resolve)=> {
    let output = babel.transform(data, {
      presets: ['@babel/preset-env'],
      moduleIds: true,
      moduleId: 'Test'
    }).code;
    resolve(output)
  })
}
try {
  let code = await compile(input);
  fs.writeFileSync(project + '/dist/Test.js', code, 'utf-8');
  let code_cjs = await compileToCJS(input);
  fs.writeFileSync(project+'/dist/Test.cjs', code_cjs, 'utf-8');
} catch (e) {
  console.error(e)
}