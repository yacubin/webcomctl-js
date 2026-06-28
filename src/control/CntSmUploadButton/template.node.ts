import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

import loadSvg from "./load.svg";

const mk = new ControlMaker("CntSmUploadButton");

export const ROOT_CLASS: string = representClassNames("CntSmUploadButton-ROOT_CLASS");
export const LOAD_CLASS: string = representClassNames("CntSmUploadButton-LOAD_CLASS");

const LOAD_IMG = convertSvgToCssUrl(loadSvg);

const COLOR = '#c50000';
const BORDER_COLOR = '#c50000';
const LD_COLOR = '#c5000078';
const LD_BORDER_COLOR = '#c5000078';

const vars = mk.newCSSVariableMap({
  DBG_VAR: [ '#ffffff', '#472f2f42' ],
  HBG_VAR: [ '#f5eaea', '#ba8f8f29' ],
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span></span>
  <label class="notranslate" translate="no">Upload</label>
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

.${ROOT_CLASS} input
{
    display: none;
}

.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  width: 140px;
  height: 32px;
  border-radius: 5px;
  font-size: 24px;
  box-sizing: content-box;
  float: right;
}

.${ROOT_CLASS}
{
  background-color: ${vars.DBG_VAR.asVar()};
  color: ${COLOR};
  border: 2px solid ${BORDER_COLOR};
  cursor: pointer;
}

.${ROOT_CLASS}:hover 
{
  background-color: ${vars.HBG_VAR.asVar()};
}

.${ROOT_CLASS} > label
{
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  flex-shrink: 0;
}

.${LOAD_CLASS}
{
  background-color: ${vars.HBG_VAR.asVar()};
  color: ${LD_COLOR};
  border: 2px solid ${LD_BORDER_COLOR};
  cursor: no-drop;
  pointer-events: none;
}

.${LOAD_CLASS} > span
{
  position: relative;
  left: 39%;
  display: block;
  width: 33px;
  height: 100%;
  background-image: ${LOAD_IMG};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  flex-shrink: 0;
}

.${LOAD_CLASS} label
{
  position: relative;
  right: 33px;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    width: 280px;
    height: 64px;
    border-radius: 10px;
    font-size: 48px;
    margin-top: 10px;
  }
  .${LOAD_CLASS} span
  {
    width: 66px;
  }
  .${LOAD_CLASS} label
  {
    right: 66px;
  }
}
`);
