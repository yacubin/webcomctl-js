import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme.mjs";

export namespace HdrLogoImg {

interface Params {
  favicon: string | [string, string];
  width: number;
};

export function build(name: string, {favicon, width}: Params) {
  const mk = new ControlMaker(name);

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    favicon: [favicon].flat().map(i => convertSvgToCssUrl(i)),
  });

  mk.newHTML('ROOT_HTML', `
    <h3 class="${clss.ROOT_CLASS}"></h3>
  `);

  mk.newHTML('CSS', `
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${clss.ROOT_CLASS}
  {
    height: 100%;
    width: ${width}px;
    margin: 0 7px 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-image: ${vars.favicon.asVar()};
    flex-shrink: 0;
    padding: 0;
    font-size: 1em;
    font-weight: 400;
  }

  @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS}
    {
      display: none;
    }
  }
  `);

  return mk.buildComponent();
}

} // namespace HdrLogoImg
