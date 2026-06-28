import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { HEADER_FONT_COLOR } from "@/lib/WickedTheme";

import sunSvg from "./sun.svg";
import moonSvg from "./moon.svg";

const mk = new ControlMaker("DMBtn");

export const ROOT_CLASS: string = representClassNames("DMBtn-ROOT_CLASS");
export const TOGGLE_CLASS: string = representClassNames("DMBtn-TOGGLE_CLASS");
  
const sun = convertSvgToCssUrl(sunSvg);
const moon = convertSvgToCssUrl(moonSvg);

const vars = mk.newCSSVariableMap({
  IMG_VAR: [ sun, moon ],
  BG_VAR: [ '#7b7b7b21', '#ffffff21' ],
});

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS}
{
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid ${HEADER_FONT_COLOR};
  box-sizing: border-box;
}

.${ROOT_CLASS}:hover
{
  background-color: ${vars.BG_VAR.asVar()};
}

.${TOGGLE_CLASS}
{
  background-image: ${vars.IMG_VAR.asVar()};
  display: block;
  height: 100%;
  width: 100%;
  border: 3px solid transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    width: 60px;
    height: 60px;
  }
}
`);
