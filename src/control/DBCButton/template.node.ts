import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCButton");

export const ROOT_CLASS: string = representClassNames("DBCButton-ROOT_CLASS");

const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const button_bg = '#dddddd40';

const vars = mk.newCSSVariableMap({
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div>
    <div></div>
  </div>
</div>
`;

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
  display: flex;
  height: 50px;
  width: calc(100% - 20px);
  align-items: center;
}

.${ROOT_CLASS} > div
{
  padding-left: 10px;
}

.${ROOT_CLASS} > div > div
{
  width: 20px;
  height: 20px;
  background-image: ${left_but_img};
  background-size: contain;
  background-origin: padding-box;
  background-repeat: no-repeat;
  background-position: center;
}

.${ROOT_CLASS} > div:hover
{
  background-color: ${button_bg};
}

.${ROOT_CLASS} > div:hover > div
{
  background-image: ${left_but_hov_img};
  transition: background-image 0.5s;
}
`);
