import path from 'node:path';

async function buildEntry(name, templatesUrl) {
  const templateModule = await import(templatesUrl);

  const lines = [];
  for (const [key, val] of Object.entries(templateModule[name])) {
    lines.push(`export const ${key} = ${JSON.stringify(val)};`);
  }

  lines.push("");

  return lines.join("\n");
}

export default function(source) {
  const name = path.basename(path.dirname(this.resourcePath));
  // const { templates } = this.getOptions();
  const templates = process.env.UICTMPLT_TEMPLATES;
  const callback = this.async();
	(async () => {
		return await buildEntry(name, templates);
	})().then((res) => callback(undefined, res), (err) => callback(err));
}
