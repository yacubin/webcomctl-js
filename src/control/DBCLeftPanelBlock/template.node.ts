import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCLeftPanelBlock");

export const ROOT_CLASS: string = representClassNames("DBCLeftPanelBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("DBCLeftPanelBlock-PORT_CLASS");

const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const button_bg = '#dddddd40';

const vars = mk.newCSSVariableMap({
  left_col: ['#494949', '#ffffff9e'],
  left_bg: ['#ffffff', 'rgb(23, 23, 26)'],
  left_fog_grad: ['linear-gradient(#ffffff00, white)', 'linear-gradient(#ffffff00, rgb(23, 23, 26))'],
  leftgrad: ['linear-gradient(white 0% 69%, #ff000000 100%)', 'linear-gradient(rgb(23, 23, 26) 0% 69%, #ff000000 100%)'],
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
 <s><div></div></s>
  <div class="${PORT_CLASS}"></div>
  <span><div></div></span>
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
  height: inherit;
  max-height: calc(100vh - 143px);
  min-height: 400px;
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: ${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.left_col.asVar()};
  background-color: ${vars.left_bg.asVar()};
}

.${PORT_CLASS}
{
  display: flex;
  width: 100%;
  height: 100%;
}

.${ROOT_CLASS} > span 
{
  display: flex;
  height: 0px;
  align-items: flex-end;
}

.${ROOT_CLASS} > s
{
  display: flex;
  height: 0px;
  align-items: flex-start;
}

.${ROOT_CLASS} > s > div
{
  height: 25px;
  width: calc(100% - 20px);
  background: ${vars.leftgrad.asVar()};
  z-index: 1;
}

.${ROOT_CLASS} > span > div 
{
  height: 25px;
  width: calc(100% - 20px);
  background: ${vars.left_fog_grad.asVar()};
  z-index: 1;
}

@media (device-width <= 700px)
{

  div.${ROOT_CLASS}
  {
    max-height: calc(100vh - 180px);
  }
}

@media (device-width <= 550px)
{
  div.${ROOT_CLASS}
  {
    border-right: none;
    background-color: transparent;
    width: 45px;
    height: 50px;
    margin-left: 15px;
  }
}

`);
