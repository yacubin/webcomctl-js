import path from 'node:path';
import fs from 'node:fs';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function detectScriptFile(filepath) {
  for (const ext of [ ".ts", ".tsx", ".mjs", ".js" ]) {
    try {
      if ((await fs.promises.stat(filepath + ext)).isFile());
        return path.basename(filepath) + ext;
    } catch { }
  }
  return undefined;
}

async function buildEntry() {
  const lines = [];
  const exportList = [];

  const controlDir = "./src/control";
  const controlAbsoluteDir = path.resolve(__dirname, "../..", controlDir);
  const controlDirs = await fs.promises.readdir(controlAbsoluteDir);
  for (const iter of controlDirs) {
    const templateName = await detectScriptFile(`${controlAbsoluteDir}/${iter}/template`);
    if (templateName === undefined)
      continue;
    lines.push(`import { buildComponent as ${iter} } from "${controlDir}/${iter}/${templateName}";`);
    exportList.push(iter);
  }

  lines.push("");

  const documentDir = "./src/document";
  const documentAbsoluteDir = path.resolve(__dirname, "../..", documentDir);
  const documentDirs = await fs.promises.readdir(path.resolve(__dirname, "../..", documentDir));
  for (const iter of documentDirs) {
    const templateName = await detectScriptFile(`${documentAbsoluteDir}/${iter}/template`);
    if (templateName === undefined)
      continue;
    lines.push(`import { buildComponent as ${iter} } from "${documentDir}/${iter}/${templateName}";`);
    exportList.push(iter);
  }
  
  lines.push("");

  lines.push(`export {`);
  for (const iter of exportList)
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
