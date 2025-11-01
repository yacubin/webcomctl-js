import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";

const mk = new ControlMaker("HdrDBCLogoImg");

const width = 225;
const height = 225;

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  favicon: [
    convertSvgToCssUrl(favicon1Svg),
    convertSvgToCssUrl(favicon2Svg),
  ],
});

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
  width: 93px;
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
    width: 195px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
