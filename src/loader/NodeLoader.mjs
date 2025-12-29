import path from "node:path";
import fs from "node:fs";
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

export default function(source) {
  const callback = this.async();
  const isDevelopment = this.mode === "development";
  const tsconfig = isDevelopment ? "tsconfig.dev.json" : "tsconfig.json";
  const entryPath = path.resolve(this.rootContext, this.resourcePath);
  const entryRelative = path.relative(this.rootContext, this.resourcePath);

  const config = {
    target: "node",
    mode: this.mode,
    entry: entryPath,
    resolve: {
      extensions: [ ".ts", ".tsx", ".mjs", ".js" ],
      alias: {
        "@": path.resolve(this.rootContext, "src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          exclude: path.join(this.rootContext, "node_modules"),
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: path.join(this.rootContext, tsconfig),
              }
            }
          ],
        },
        {
          test: /\.svg$/i,
          use: "raw-loader",
        },
      ],
    },
    output: {
      chunkFormat: "module",
      library: {
        type: "module",
      },
      module: true,
      iife: false,
      path: path.join(this.rootContext, "dist", "tmp"),
      filename: entryRelative + ".mjs",
    },
    optimization: {
        minimize: false,
    },
    experiments: {
      outputModule: true,
    },
    externals: {
    },
  };

  const compiler = webpack(config);
  compiler.run(async (err, stats) => {
    if (!err && stats.hasErrors()) {
      switch (stats.compilation.errors.length) {
      case 0: err = stats; break;
      case 1: err = stats.compilation.errors[0]; break;
      default: err = stats.compilation.errors; break;
      }
    }
    if (err)
      callback(err, undefined);
    else {
      const scriptPath = path.join(config.output.path, config.output.filename);
      const context = await buildEntry(url.pathToFileURL(scriptPath));
      await fs.promises.writeFile(path.join(config.output.path, entryRelative + ".js"), context, { encoding: "utf8", flag: "w" });
      callback(undefined, context)
    }
  });
}
