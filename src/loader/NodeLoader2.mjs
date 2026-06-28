import path from "node:path";
import url from "node:url";
import webpack from 'webpack';

async function buildEntry(scriptUrl) {
  const lines = [];

  const scriptModule = await import(scriptUrl);

  lines.push(`/* File generated from ${scriptUrl} */`);
  for (const [key, val] of Object.entries(scriptModule)) {
    lines.push(`export const ${key} = ${JSON.stringify(val)};`);
  }
  lines.push("");

  return lines.join("\n");
}

async function webpackBuild(config) {
  const compiler = webpack(config);

  const stats = await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      else if (stats.hasErrors()) reject(new Error(stats.toString()));
      else resolve(stats);
    });
  });

  await new Promise((resolve) => compiler.close(resolve));
  return stats;
}

async function buildResult(loaderContext, source) {
  const configUrl = url.pathToFileURL(path.resolve(loaderContext.rootContext, "webpack.config.mjs"));
  const configModule = await import(configUrl);

  const outputPath = path.join(loaderContext.rootContext, "node_modules", ".cache", "node-loader", path.relative(loaderContext.rootContext, loaderContext.context));
  const outputFilename = path.basename(loaderContext.resourcePath, ".ts") + ".mjs";

  const argv = { env: {} };
  const config = await configModule.default(argv.env, argv);

  config.target = "node";
  config.mode = loaderContext.mode;
  config.entry = loaderContext.resourcePath;
  config.output.path = outputPath;
  config.output.filename = outputFilename;

  const rules = [];
  for (const iter of config.module.rules) {
    if (iter.use !== "node-loader" && !(Array.isArray(iter.use) && iter.use.find(i => i.loader === "node-loader")))
      rules.push(iter);
  }
  config.module.rules = rules;

  const stats = await webpackBuild(config);

  console.log("--------------------------------------------------------------------------------");
  console.log("node-loader build", path.relative(loaderContext.rootContext, loaderContext.resourcePath));
  console.log(stats.toString({ colors: true }));

  const scriptPath = path.join(outputPath, outputFilename);
  return await buildEntry(url.pathToFileURL(scriptPath));
}

export default function(source) {
  const callback = this.async();
  buildResult(this, source).then((res) => callback(undefined, res)).catch(err => callback(err));
}
