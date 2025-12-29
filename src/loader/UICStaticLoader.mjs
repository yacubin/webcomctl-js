import url from 'node:url';

async function makeStaticRegisterScript(module, templates)
{
  const {PKG, CTLS} = module;

  let scriptContent = `import { ControlManager } from 'webnetq-js';\n\n`;
  for (const name in CTLS) {
    scriptContent += `import { ${name} } from "${PKG}/controls";\n`;
  };
  scriptContent += `\n`;

  scriptContent += `const manager = ControlManager.getInstance();\n\n`;

  for (const name in CTLS) {
    let params = `{rootClass: ${name}.classList.ROOT_CLASS, portClass: ${name}.classList.PORT_CLASS }`;
    const ctlModule = templates[PKG][name];
    if (ctlModule) {
      for (const iter of ['ROOT_CLASS']) {
        if (!(iter in ctlModule)) {
          throw `Can't find ${iter} for '${name}' control`;
        }
        if (typeof ctlModule[iter] !== 'string') {
          console.info(`${iter}:`, ctlModule[iter]);
          throw `Class ${iter} isn't string of '${name}' control`;
        }
      }
      const ctlParams = {
        rootClass: ctlModule.ROOT_CLASS,
      };
      if (typeof ctlModule.PORT_CLASS === 'string') {
        ctlParams.portClass = ctlModule.PORT_CLASS;
      }
      else if (typeof ctlModule.PORT_CLASS !== 'undefined') {
        throw `Wrong type of 'PORT_CLASS' for '${name}' control`;
      }
      params = JSON.stringify(ctlParams);
    }
    scriptContent += `manager.register("${name}", ${name}.Control || ${name}, ${name}.createElement, ${params});\n`;
  };
  scriptContent += `\n`;

  scriptContent += `export const PKG = '${PKG}';\n`;
  scriptContent += `export const CTLS = {\n`;
  for (const name in CTLS) {
    scriptContent += `  ${name}: ${name}.Control || ${name},\n`;
  };
  scriptContent += `};\n`;

  return scriptContent;
}

export default function(source) {
  const options = this.getOptions();

  const resourceUrl = url.pathToFileURL(this.resourcePath);
  const callback = this.async();
	(async () => {
    const templatesEntries = {};
    for (const [key, val] of Object.entries(options)) {
      templatesEntries[key] = await import(val);
    }
    const module = await import(resourceUrl);
		return await makeStaticRegisterScript(module, templatesEntries);
	})().then((res) => callback(undefined, res), (err) => callback(err));
}
