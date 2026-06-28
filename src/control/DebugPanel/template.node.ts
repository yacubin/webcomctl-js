import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

import arrowSvg from "./arrow.svg";
import shSvg from "./SH.svg";

const mk = new ControlMaker("DebugPanel");

const ARROW_IMG = convertSvgToCssUrl(arrowSvg);
const SH_IMG = convertSvgToCssUrl(shSvg);

export const ROOT_CLASS: string = representClassNames("DebugPanel-ROOT_CLASS");
export const LIST_CLASS: string = representClassNames("DebugPanel-LIST_CLASS");
export const TEXT_CLASS: string = representClassNames("DebugPanel-TEXT_CLASS");
export const CONTROL_CLASS: string = representClassNames("DebugPanel-CONTROL_CLASS");
export const TOP_CLASS: string = representClassNames("DebugPanel-TOP_CLASS");
export const RIGHT_CLASS: string = representClassNames("DebugPanel-RIGHT_CLASS");
export const DOWN_CLASS: string = representClassNames("DebugPanel-DOWN_CLASS");
export const HIDE_CLASS: string = representClassNames("DebugPanel-HIDE_CLASS");
export const SIDE_CLASS: string = representClassNames("DebugPanel-SIDE_CLASS");

const on_sc = 'transparent';
const hovBut = '#417cc8';
const sc_th_bg = '#b5b5b5c7';

const vars = mk.newCSSVariableMap({
  bor: [ '#d0dbe9', '#35383c' ],
  bg:  [ '#fdfdfd', 'rgb(43 43 45)' ],
  control: [ '#efefef', '#2f2f2f' ],
  defBut: [ '#488ee9', '#2d5b96' ],
});

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${CONTROL_CLASS}">
      <span><div class="${HIDE_CLASS}"></div></span>
      <div><div class="${SIDE_CLASS}"></div></div>
      <s><div></div></s>
    </div>
    <div class="${LIST_CLASS}"></div>
  </div>
`;

export const ITEM_HTML = `
<div class="${TEXT_CLASS}"></div>
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
  position: fixed;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 2px;
  width: auto;
  height: max-content;
  max-height: 60%;
  padding: 0px 5px 0px 5px;
  font-family: ${TOOLBAR_FONT_SANS};
  user-select: none;
  cursor: default;
  z-index: 1000;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${RIGHT_CLASS}
{
  right: 2px;
  left: auto;
  align-items: flex-end;
}

.${TOP_CLASS}
{
  top: 0px;
}

.${LIST_CLASS}:empty,
.${DOWN_CLASS} .${LIST_CLASS}
{
  display: none;
}

.${CONTROL_CLASS}
{
  display: flex;
  width: max-content;
  padding: 5px;
  border-top: 1px solid ${vars.bor.asVar()};
  border-left: 1px solid ${vars.bor.asVar()};
  border-right: 1px solid ${vars.bor.asVar()};
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${vars.control.asVar()};
}

.${TOP_CLASS}
{
  flex-direction: column-reverse;
  justify-content: flex-end;
}

.${RIGHT_CLASS} .${CONTROL_CLASS}
{
  flex-direction: row-reverse;
}

.${CONTROL_CLASS} > *
{
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${vars.defBut.asVar()};
}

.${RIGHT_CLASS} .${CONTROL_CLASS} > *
{
  margin-right: 0;
  margin-left: 5px;
}

.${CONTROL_CLASS} > *:last-child
{
  margin-right: 0;
  margin-left: 0;
}

.${CONTROL_CLASS} > * > div
{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.${CONTROL_CLASS} > *:hover
{
  background-color: ${hovBut};
}

.${CONTROL_CLASS} > div > div,
.${CONTROL_CLASS} > s > div
{
  background-image: ${ARROW_IMG};
  background-size: 85%;
}

.${CONTROL_CLASS} > div > div
{
  transform: scaleX(-1);
}

.${RIGHT_CLASS} .${CONTROL_CLASS} > div > div
{
  transform: scaleX(1);
}

.${CONTROL_CLASS} > span > div
{
  transform: rotate(180deg);
  background-image: ${SH_IMG};
  background-size: 85%;
}

.${TOP_CLASS} .${CONTROL_CLASS} > span > div
{
  transform: rotate(0deg);
}

.${DOWN_CLASS} .${CONTROL_CLASS} > span > div
{
  transform: rotate(0deg);
}

.${TOP_CLASS}.${DOWN_CLASS} .${CONTROL_CLASS} > span > div
{
  transform: rotate(180deg);
}


.${CONTROL_CLASS} > s > div
{
  transform: rotate(90deg);
}

.${TOP_CLASS} .${CONTROL_CLASS} > s > div
{
  transform: rotate(270deg);
}

.${LIST_CLASS}
{
  padding: 5px 5px 0px 5px;
  border: 1px solid ${vars.bor.asVar()};
  background-color: ${vars.bg.asVar()};
  overflow: auto;
}

.${LIST_CLASS}::-webkit-scrollbar
{
  height:10px;
  width:10px;
  background-color: ${on_sc};
}

.${LIST_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${on_sc};
  border-radius: 10px;
}

.${LIST_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${sc_th_bg};
  border-radius: 10px;
}

.${LIST_CLASS} > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  max-width: 200px;
  padding: 0 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  background-color: ${vars.defBut.asVar()};
  overflow: hidden;
  cursor: pointer;
}

.${LIST_CLASS} > div:hover
{
  background-color: ${hovBut};
}
`);
