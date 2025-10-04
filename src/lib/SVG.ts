import svgo from 'svgo';

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

export function convertSvgToCssUrl(input: string) {
  return createSvgOptimize(input, { outputType: "CSS-URL" });
}

export function convertSvgToHtmlTag(input: string) {
  return createSvgOptimize(input, { outputType: "HTML-TAG" });
}
