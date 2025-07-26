import path from 'node:path';
import fs from 'node:fs';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function detectScriptFile(filepath) {
  for (const ext of [ ".ts", ".tsx", ".mjs", ".js" ]) {
    try {
      const asa = (await fs.promises.stat(filepath + ext)).isFile();
      return path.basename(filepath) + ext;
    } catch { }
  }
  throw new Error(`Script Not found ${filepath}`);
}

async function loadTemplate(filepath) {
  let templateModule = await import(url.pathToFileURL(filepath));
  if (typeof templateModule.buildComponent === 'function')
    templateModule = templateModule.buildComponent();
  if (templateModule instanceof Promise)
    templateModule = await templateModule;
  return templateModule;
}

async function buildEntry() {
  const lines = [];

  const templates = {};

  const controlDir = "./src/control";
  const controlAbsoluteDir = path.resolve(__dirname, "../..", controlDir);
  const controls = await fs.promises.readdir(controlAbsoluteDir);
  for (const iter of controls) {
    const indexName = await detectScriptFile(`${controlAbsoluteDir}/${iter}/index`);
    lines.push(`import { ${iter} } from "${controlDir}/${iter}/${indexName}";`);
    templates[iter] = await loadTemplate(`${controlAbsoluteDir}/${iter}/template.mjs`);
  }

  lines.push("");

  const documentDir = "./src/document";
  const documentAbsoluteDir = path.resolve(__dirname, "../..", documentDir);
  const documents = await fs.promises.readdir(path.resolve(__dirname, "../..", documentDir));
  for (const iter of documents) {
    const indexName = await detectScriptFile(`${documentAbsoluteDir}/${iter}/index`);
    lines.push(`import { ${iter} } from "${documentDir}/${iter}/${indexName}";`);
    templates[iter] = await loadTemplate(`${documentAbsoluteDir}/${iter}/template.mjs`);
  }
  
  lines.push("");

  lines.push(`export const templates = {`);
  for (const [key, val] of Object.entries(templates))
    lines.push(`${key}: ${JSON.stringify(val, null, 2)},`);
  lines.push(`};`);
  
  lines.push("");

  lines.push(`export {`);
  for (const iter of [ ...controls, ...documents ])
    lines.push(`  ${iter},`);
  lines.push(`};`);

  lines.push("");

  return lines.join("\n");
}

export default function(source) {
  const callback = this.async();
	(async () => {
		return await buildEntry();
	})().then((res) => callback(undefined, res), (err) => callback(err));
}
