async function buildEntry(buildersUrl) {
  const lines = [];

  const buildersModule = await import(buildersUrl);

  for (const [key, buildComponent] of Object.entries(buildersModule)) {
    let template = buildComponent();
    if (template instanceof Promise)
      template = await template;
    lines.push(`const ${key} = ${JSON.stringify(template, null, 2)};`);
  }

  lines.push("");

  lines.push(`export {`);
  for (const iter of Object.keys(buildersModule))
    lines.push(`  ${iter},`);
  lines.push(`};`);

  lines.push("");

  return lines.join("\n");
}

export default function(source) {
  const { builders } = this.getOptions();
  const callback = this.async();
	(async () => {
		return await buildEntry(builders);
	})().then((res) => callback(undefined, res), (err) => callback(err));
}
