import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import moonSvg from "./moon.svg";
import sunSvg from "./sun.svg";

const mk = new ControlMaker("DMKikoBtn");

const MOON_IMG = convertSvgToCssUrl(moonSvg);
const SUN_IMG = convertSvgToCssUrl(sunSvg);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const IMAGE_BORDER_COLOR = 'transparent';
const BORDER_COLOR = '#6a6a6a';

const vars = mk.newCSSVariableMap({
  img: [ MOON_IMG,  SUN_IMG ],
});

mk.newCSS('CSS', `
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
  width: 50px;
  height: 50px;
  border: 2px solid ${BORDER_COLOR};
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > div
{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 4px solid ${IMAGE_BORDER_COLOR};
  background-image: ${vars.img.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
