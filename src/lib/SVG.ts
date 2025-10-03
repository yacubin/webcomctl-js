import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import svgo from 'svgo';

const plugins = [
  { name: 'removeXMLProcInst', active: true },
  { name: 'removeDoctype', active: true },
  { name: 'removeComments', active: true },
  { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
  { name: 'convertColors', params: { names2hex: true, rgb2hex: true } },
  { name: 'removeMetadata', active: true },
  { name: 'removeTitle', active: true },
  { name: 'removeDesc', active: true },
  { name: 'removeEditorsNSData', active: true },
  { name: 'removeUnusedNS', active: true },
  { name: 'removeNonInheritableGroupAttrs', active: true },
  { name: 'collapseGroups', active: true },
];

const xmlCssPlugins: any = [
  ...plugins,
];

const htmlPlugins: any = [
  ...plugins,
  { name: 'removeXMLNS', active: true },
  { name: 'removeDimensions', active: true }, // Remove width and height
  { name: 'removeViewBox', active: false },
];

export function convertSvgToCssUrl(bytes: string) {
  const optimizeSvg = svgo.optimize(bytes, { plugins: xmlCssPlugins });
  
  const svgUriData1 = 'data:image/svg+xml,' +  encodeURIComponent(optimizeSvg.data);
  const svgUriData2 = 'data:image/svg+xml;base64,' +  Buffer.from(optimizeSvg.data).toString('base64');

  const svgUriData = svgUriData1.length < svgUriData2.length ? svgUriData1 : svgUriData2;
  return `url("${svgUriData}")`;
}

export async function loadSvgAsCssUrlAsync(metaUrl: string, filename: string) {
  const currentFilename = fileURLToPath(metaUrl);
  const currentDirname = path.dirname(currentFilename);
  
  const fname = path.resolve(currentDirname, filename);
  const bytes = await readFile(fname, { encoding: 'utf8', flag: 'r' });

  return convertSvgToCssUrl(bytes);
}

function replaceStrok(node: any, color: string) {
  switch (node.type) {
  case "element":
    if (node.attributes.stroke && node.attributes.stroke !== "none")
      node.attributes.stroke = color;
  case "root":
    for (const iter of node.children)
      replaceStrok(iter, color);
    return;

  default:
    return;
  }
}

export function replaceAllSvgStrokeColor(bytes: string, color: string) {
  const plugins: any = [
    {
      name: "replaceStroke",
      type: "perItem",
      fn: (node: any) => {
        replaceStrok(node, color);
      }
    }
  ];
  const optimizeSvg = svgo.optimize(bytes, { plugins });
  return optimizeSvg.data;
}

export function convertSvgToHtmlTag(bytes: string) {
  const optimizeSvg = svgo.optimize(bytes, { plugins: htmlPlugins });
  return optimizeSvg.data;
}

export interface SvgOptimizeParams {
  outputType?: "CSS-URL" | "HTML-TAG";
  stroke?: string;
};

export function createSvgOptimize(input: string, params: SvgOptimizeParams): string {
  const plugins: Array<any> = [
    { name: 'removeXMLProcInst', active: true },
    { name: 'removeDoctype', active: true },
    { name: 'removeComments', active: true },
    { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
    { name: 'convertColors', params: { names2hex: true, rgb2hex: true } },
    { name: 'removeMetadata', active: true },
    { name: 'removeTitle', active: true },
    { name: 'removeDesc', active: true },
    { name: 'removeEditorsNSData', active: true },
    { name: 'removeUnusedNS', active: true },
    { name: 'removeNonInheritableGroupAttrs', active: true },
    { name: 'collapseGroups', active: true },
  ];

  if (params.outputType === "HTML-TAG") {
    plugins.push({ name: 'removeXMLNS', active: true });
    plugins.push({ name: 'removeDimensions', active: true }); // Remove width and height
    plugins.push({ name: 'removeViewBox', active: false });
  }

  if (params.stroke) {
    const replaceStroke = (node: any) => {
      if (node.type === "element") {
        if (node.attributes.stroke && node.attributes.stroke !== "none")
          node.attributes.stroke = params.stroke;
      }
      if (node.type === "root" || node.type === "element") {
        for (const iter of node.children)
          replaceStroke(iter);
      }
    }
    plugins.push({
      name: "replaceStroke",
      type: "perItem",
      fn: replaceStroke,
    });
  }

  const optimizeSvg = svgo.optimize(input, { plugins });
  let result = optimizeSvg.data;

  if (params.outputType === "CSS-URL") {

    const svgUriData1 = 'data:image/svg+xml,' +  encodeURIComponent(result);
    const svgUriData2 = 'data:image/svg+xml;base64,' +  Buffer.from(result).toString('base64');

    const svgUriData = svgUriData1.length < svgUriData2.length ? svgUriData1 : svgUriData2;
    result = `url("${svgUriData}")`;
  }

  return result;
}
