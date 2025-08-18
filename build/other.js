import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import babel from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(__dirname);
let input = fs.readFileSync(project + '/dist/Test.mjs', 'utf-8');

async function compileSYS(data) {
  return new Promise((resolve)=> {
    let output = babel.transform(data, {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-transform-modules-systemjs"]
    }).code;
    resolve(output)
  })
}

async function compileToAMD(data) {
  return new Promise((resolve)=> {
    let output = babel.transform(data, {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-modules-amd']
    }).code;
    resolve(output)
  })
}

try {
  let code_sys = await compileSYS(input);
  fs.writeFileSync(project + '/dist/system/Test.js', code_sys, 'utf-8');
  let code_amd = await compileToAMD(input);
  fs.writeFileSync(project+'/dist/amd/Test.js', code_amd, 'utf-8');
} catch (e) {
  console.error(e)
}