import path from 'node:path';
import fs from 'node:fs';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const outputPath = argv.outputPath || path.resolve(__dirname, 'dist');
  const tsconfig = isDevelopment ? "tsconfig.dev.json" : "tsconfig.json";
  const sourceDir = path.resolve(__dirname, "src");

  const pkgContent = await fs.promises.readFile(path.join(__dirname, "package.json"), "utf8");
  const pkg = JSON.parse(pkgContent);

  const builders = path.join(outputPath, "builders.mjs");

  const config = {
    target: 'web',
    entry: `templates-entry-loader?builders=${url.pathToFileURL(builders)}!`,
    mode: 'production',
    resolveLoader: {
      alias: {
        'templates-entry-loader': path.join(__dirname, 'src/loader/TemplatesEntryLoader.mjs'),
      },
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".mjs", ".js" ],
      alias: {
        "@": sourceDir,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: path.join(__dirname, "node_modules"),
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: path.join(__dirname, tsconfig),
              }
            }
          ],
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
      path: outputPath,
      filename: 'templates.mjs',
      // clean: true,
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

  for (const iter of Object.keys(pkg.dependencies))
    config.externals[iter] = iter;

  for (const iter of Object.keys(pkg.devDependencies))
    config.externals[iter] = iter;

  if (isDevelopment) {
    config.mode = argv.mode;
    config.devtool = "inline-source-map";
    // config.devtool = 'source-map';
    // config.output.sourceMapFilename = 'index.map';
    process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  }

  return config;
}
