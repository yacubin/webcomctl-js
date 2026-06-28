import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

export namespace HdrLogoText {

interface Params {
  favicon: string | [string] | [string, string];
  header: string | [string] | [string, string];
};

interface Template {
  ROOT_CLASS: string;
  ROOT_HTML: string;
  CSS: string[];
};

export function template(name: string, {favicon, header}: Params): Template {
  const mk = new ControlMaker(name);

  const ROOT_CLASS: string = representClassNames(name + "-ROOT_CLASS");

  const vars = mk.newCSSVariableMap({
    favicon: [favicon].flat().map(i => convertSvgToCssUrl(i)) as any,
    header: [header].flat().map(i => convertSvgToCssUrl(i)) as any,
  });

  const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <h3></h3>
    <h2></h2>
  </div>
  `;

  const CSS = splitCSS(`
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${ROOT_CLASS} h2,
  .${ROOT_CLASS} h3
  {
    margin: 0px;
    padding: 0px;
    font-size: 1em;
    font-weight: 400;
  }

  .${ROOT_CLASS}
  {
    display: flex;
    height: 33px;
  }

  .${ROOT_CLASS} > h3
  {
    width: 36px;
    height: 100%;
    margin-right: 7px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: ${vars.favicon.asVar()};
    flex-shrink: 0;
  }

  .${ROOT_CLASS} > h2
  {
    width: 130px;
    height: 100%;
    margin-right: 15px;
    background-size: 180px;
    background-position-y: center;
    background-position-x: left;
    background-repeat: no-repeat;
    background-image: ${vars.header.asVar()};
    flex-shrink: 0;
  }

  @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
  {
    .${ROOT_CLASS}
    {
      height: 130px;
    }
    .${ROOT_CLASS} > h3
    {
      display: none;
    }
    .${ROOT_CLASS} > h2
    {
      width: 255px;
      background-size: 360px;
    }
  }
  `);

  return { ROOT_CLASS, ROOT_HTML, CSS };
}

export function build(name: string, {favicon, header}: Params) {
  const mk = new ControlMaker(name);

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    favicon: [favicon].flat().map(i => convertSvgToCssUrl(i)) as any,
    header: [header].flat().map(i => convertSvgToCssUrl(i)) as any,
  });

  mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <h3></h3>
    <h2></h2>
  </div>
  `);

  mk.newCSS('CSS', `
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${clss.ROOT_CLASS} h2,
  .${clss.ROOT_CLASS} h3
  {
    margin: 0px;
    padding: 0px;
    font-size: 1em;
    font-weight: 400;
  }

  .${clss.ROOT_CLASS}
  {
    display: flex;
    height: 33px;
  }

  .${clss.ROOT_CLASS} > h3
  {
    width: 36px;
    height: 100%;
    margin-right: 7px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: ${vars.favicon.asVar()};
    flex-shrink: 0;
  }

  .${clss.ROOT_CLASS} > h2
  {
    width: 130px;
    height: 100%;
    margin-right: 15px;
    background-size: 180px;
    background-position-y: center;
    background-position-x: left;
    background-repeat: no-repeat;
    background-image: ${vars.header.asVar()};
    flex-shrink: 0;
  }

  @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS}
    {
      height: 130px;
    }
    .${clss.ROOT_CLASS} > h3
    {
      display: none;
    }
    .${clss.ROOT_CLASS} > h2
    {
      width: 255px;
      background-size: 360px;
    }
  }
  `);

  return mk.buildComponent();
}
} // namespace HdrLogoText
