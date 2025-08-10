import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme.mjs";

import header1Svg from "./header1.svg";
import header2Svg from "./header2.svg";

const mk = new ControlMaker("HdrCntLogoNane");

const width = 509.184;
const height = 64.584;

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  header: [
    convertSvgToCssUrl(header1Svg),
    convertSvgToCssUrl(header2Svg),
  ],
});

mk.newHTML('ROOT_HTML', `
  <h2 class="${clss.ROOT_CLASS}"></h2>
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
  width: 130px;
  margin: 0 15px 0 0;
  background-size: 180px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-image: ${vars.header.asVar()};
  flex-shrink: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 400;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    width: 255px;
    background-size: 360px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
