import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCLeftPanelBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
   "PORT_CLASS",
]);

const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const vars = mk.newCSSVariableMap({
});

mk.newHTML("ROOT_HTML", `

  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
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

`);

export function buildComponent()
{
  return mk.buildComponent();
}