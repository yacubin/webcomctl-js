import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("BitMakeControlBlock");

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("BitMakeControlBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("BitMakeControlBlock-PORT_CLASS");

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
  display: flex;
  width: 100%;
  height: 100%;
}

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}
`);
