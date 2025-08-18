import { fileURLToPath } from "url";
import { dirname } from "path";
import { minify } from "terser";
import fs from "fs-plus"; // Import the promises API


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const project = dirname(__dirname);
const files = [
  project + "/dist/Test.js",
  project + "/dist/Test.mjs",
  project + "/dist/Test.cjs",
  project + "/dist/amd/Test.js",
  project + "/dist/system/Test.js",
];

for (let i in files) {
  let code = fs.readFileSync(files[i], 'utf-8');
  let options = {};
  let pretty_code = await minify(code, options);
  try {
    let file_name = files[i].substring(0, files[i].lastIndexOf('.'))
    let file_ext = files[i].split('.').pop();
    let file_min = file_name+'.min.'+file_ext;
    fs.writeFileSync(file_min, pretty_code.code,'utf-8');
  } catch(e) {
    console.error(e)
  }
}

