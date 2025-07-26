import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const outputPath = argv.outputPath || path.resolve(__dirname, 'dist');
  const tsconfig = isDevelopment ? "tsconfig.dev.json" : "tsconfig.json";
  const sourceDir = path.resolve(__dirname, "src");

  const config = {
    target: 'web',
    entry: "webentry-loader!",
    mode: 'production',
    resolveLoader: {
      alias: {
        'module-loader': path.join(__dirname, 'src/loader/ModuleLoader.mjs'),
        'uictmplt-loader': path.join(__dirname, 'src/loader/UICTemplateLoader.mjs'),
        'webentry-loader': path.join(__dirname, 'src/loader/WebEntryLoader.mjs'),
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
      chunkFormat: 'module',
      library: {
        type: 'module',
      },
      path: outputPath,
      filename: 'index.mjs',
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    externals: {
      "webnetq-js": "webnetq-js",
    },
  };

  if (isDevelopment) {
    config.mode = argv.mode;
    config.devtool = "inline-source-map";
    // config.devtool = 'source-map';
    // config.output.sourceMapFilename = 'index.map';
    process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  }

  return config;
}
