import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import moonSvg from "./moon.svg";
import sunSvg from "./sun.svg";

const mk = new ControlMaker("DMBtn2");

const MOON_IMG = convertSvgToCssUrl(moonSvg);
const SUN_IMG = convertSvgToCssUrl(sunSvg);

export const ROOT_CLASS: string = representClassNames("DMBtn2-ROOT_CLASS");

const vars = mk.newCSSVariableMap({
  img:   [ MOON_IMG,  SUN_IMG   ],
  bgHov: [ '#e4e6e8', '#6a6a6a' ],
  bsHov: [ '#ffffff', '#000000' ],
  bor:   [ '#7c7c7c', '#616161' ],
  bs:    [ '#c8c8c8', '#373737' ],
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
  height: 32px;
  width: 32px;
  margin-left: 3px;
  border-radius: 50%;
  border: 1px solid ${vars.bor.asVar()};
  background-image: ${vars.img.asVar()};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0px 0px 3px 0px ${vars.bs.asVar()};
}

.${ROOT_CLASS}:hover
{
  background-color: ${vars.bgHov.asVar()};
  box-shadow: inset 0px 0px 6px 0px ${vars.bsHov.asVar()};
}
`);
