import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("AbsoluteBlock");

export const ROOT_CLASS: string = representClassNames("AbsoluteBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("AbsoluteBlock-PORT_CLASS");
export const RIGHT_CLASS: string = representClassNames("AbsoluteBlock-RIGHT_CLASS");
export const BOTTOM_CLASS: string = representClassNames("AbsoluteBlock-BOTTOM_CLASS");

const vars = mk.newCSSVariableMap({
});

export const ROOT_HTML = `
  <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
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
  left: 0;
  top: 0;
  box-sizing: border-box;
}

.${RIGHT_CLASS}
{
  right: 0;
  left: auto;
  align-items: flex-end;
}

.${BOTTOM_CLASS}
{
  bottom: 0;
  top: auto;
}
`);
