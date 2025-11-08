import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCLeftPanelBlock2");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
   "PORT_CLASS",
]);

const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const button_bg = '#dddddd40';

const vars = mk.newCSSVariableMap({
  left_col: ['#494949', '#ffffff9e'],
  left_bg: ['#ffffff', 'rgb(23, 23, 26)'],
  left_fog_grad: ['linear-gradient(#ffffff00, white)', 'linear-gradient(#ffffff00, rgb(23, 23, 26))'],
  leftgrad: ['linear-gradient(white 0% 69%, #ff000000 100%)', 'linear-gradient(rgb(23, 23, 26) 0% 69%, #ff000000 100%)'],
});

mk.newHTML("ROOT_HTML", `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}">
</div>
`);

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
  display: grid;
  grid-template-columns: auto 10px;
  width: inherit;
  align-self: start;
  position: sticky;
  top: 0px;
  height: inherit;
  max-height: calc(100vh - 143px);
  min-height: 400px;
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: ${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.left_col.asVar()};
  background-color: ${vars.left_bg.asVar()};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}