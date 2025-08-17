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

export function convertSvgToHtmlTag(bytes: string) {
  const optimizeSvg = svgo.optimize(bytes, { plugins: htmlPlugins });
  return optimizeSvg.data;
}

export async function loadSvgAsHtmlAsync(metaUrl: string, filename: string) {
  const currentFilename = fileURLToPath(metaUrl);
  const currentDirname = path.dirname(currentFilename);
  
  const fname = path.resolve(currentDirname, filename);
  const bytes = await readFile(fname, { encoding: 'utf8', flag: 'r' });

  return convertSvgToHtmlTag(bytes);
}
