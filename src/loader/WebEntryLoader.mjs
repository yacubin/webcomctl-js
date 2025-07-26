import path from 'node:path';
import fs from 'node:fs';

async function buildEntry(projectPath) {
  const lines = [];

  const controlDir = "./src/control";
  const controls = await fs.promises.readdir(path.resolve(projectPath, controlDir));
  for (const iter of controls) {
    lines.push(`import { ${iter} } from "${controlDir}/${iter}/index.mjs";`);
  }
  
  lines.push("");

  const documentDir = "./src/document";
  const documents = await fs.promises.readdir(path.resolve(projectPath, documentDir));
  for (const iter of documents) {
    lines.push(`import { ${iter} } from "${documentDir}/${iter}/index.mjs";`);
  }
  
  lines.push("");

  lines.push(`export {`);
  for (const iter of [ ...controls, ...documents ])
    lines.push(`  ${iter},`);
  lines.push(`};`);

  lines.push("");

  return lines.join("\n");
}

export default function(source) {
  const projectPath = this._compiler.context;
  const callback = this.async();
	(async () => {
		return await buildEntry(projectPath);
	})().then((res) => callback(undefined, res), (err) => callback(err));
}
