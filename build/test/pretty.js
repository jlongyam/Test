import prettier from "prettier";
import fs from 'fs-plus';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let project = dirname(dirname(__dirname));

async function prettifyFileContent(fileContent) {
  let prettyFile; 
  try {
    prettyFile = await prettier.format(fileContent, {
      semi: false,
      parser: "babel",
    });
    return prettyFile;
  } catch (error) {
    console.error("Error prettifying file:", error);
    return null; 
  }
  return;
}

let code = {
  test: project + '/test/html/legacy/test.js',
  amd: project+ '/test/html/legacy/test.amd.js',
  system: project+ '/test/html/legacy/test.system.js'
}
let source = {
  test: fs.readFileSync( code.test, 'utf-8'),
  amd: fs.readFileSync( code.amd, 'utf-8'),
  system: fs.readFileSync( code.system, 'utf-8')
}
try {
  let result = {
    test: await prettifyFileContent(source.test),
    amd: await prettifyFileContent(source.amd),
    system: await prettifyFileContent(source.system)
  } 
  if(result.test) fs.writeFileSync(code.test, result.test, 'utf-8');
  if(result.amd) fs.writeFileSync(code.amd, result.amd, 'utf-8');
  if(result.system) fs.writeFileSync(code.system, result.system, 'utf-8');
} catch(e) {
  console.error(e)
}
