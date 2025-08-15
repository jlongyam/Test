import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs-plus';
import buble from 'buble';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let project = dirname(__dirname);
let input = fs.readFileSync(project+'/src/Test.js', 'utf-8');

async function compile(data) {
  return new Promise((resolve) => {
    let output = buble.transform(data, {
      transforms: {
        modules: false
      }
    }).code;
    resolve(output)
  })
}

try {
  let code = await compile(input);
  fs.writeFileSync(project+'/stage/Test.js', code, 'utf-8');
} catch(e) {
  console.error(e)
}