import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("DBCContentBlock");

export const ROOT_CLASS: string = representClassNames("DBCContentBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("DBCContentBlock-PORT_CLASS");

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

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  grid-area: right;
  align-self: start;
  width: 100%;
  height: inherit;
  min-width: 450px;
  padding: 0px 15px 15px 15px;
  box-sizing: border-box;
}

.${ROOT_CLASS} > *
{
  padding-top: 15px;
}
`);
