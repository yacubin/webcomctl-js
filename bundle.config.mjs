import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const outputPath = argv.outputPath || path.resolve(__dirname, 'dist');
  const config = {
    target: 'web',
    entry: "webentry-loader!",
    mode: 'production',
    resolveLoader: {
      alias: {
        'module-loader': path.resolve(__dirname, 'src/loader/ModuleLoader.mjs'),
        'uictmplt-loader': path.resolve(__dirname, 'src/loader/UICTemplateLoader.mjs'),
        'webentry-loader': path.resolve(__dirname, 'src/loader/WebEntryLoader.mjs'),
      },
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

  if (argv.mode === 'development') {
    config.mode = argv.mode;
    config.devtool = 'source-map';
    config.output.sourceMapFilename = 'index.map';
    process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  }

  return config;
}
