import path from 'node:path';
import fs from 'node:fs';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const config = {
    target: 'node',
    entry: {},
    mode: 'production',
    output: {
      chunkFormat: 'module',
      library: {
        type: 'module',
      },
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].mjs',
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
  };

  const controlDir = path.posix.join(__dirname, "src/control");
  for (const iter of fs.readdirSync(controlDir)) {
    config.entry[iter] = path.posix.join(controlDir, iter, "template.mjs");
  }
  
  const documentDir = path.posix.join(__dirname, "src/document");
  for (const iter of fs.readdirSync(documentDir)) {
    if (config.entry[iter])
      throw new Error(`${iter} control already exists`);
    config.entry[iter] = path.posix.join(documentDir, iter, "index.mjs");
  }

  if (argv.mode === 'development') {
    config.mode = argv.mode;
    config.devtool = 'source-map';
    config.output.sourceMapFilename = '[name].map';
    process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  }

  return config;
}
