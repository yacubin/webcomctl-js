import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("DBCTreeInfo");

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("DBCTreeInfo-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("DBCTreeInfo-PORT_CLASS");
export const TREE_OFF: string = representClassNames("DBCTreeInfo-TREE_OFF");
export const LEFT_ON: string = representClassNames("DBCTreeInfo-LEFT_ON");
export const RIGHT_PANEL: string = representClassNames("DBCTreeInfo-RIGHT_PANEL");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS} ${PORT_CLASS}" style="grid-template-columns: minmax(160px, 225px) 1fr;"></div>
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
  display: grid;
  grid-template-areas: 'left right';
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

div.${TREE_OFF} > div.${ROOT_CLASS} > nav,
div.${TREE_OFF}  > div.${ROOT_CLASS} > nav + div,
div.${TREE_OFF}  > div.${ROOT_CLASS} > nav + div + span
{
  display: none;
}

div.${TREE_OFF}  > .${RIGHT_PANEL} 
{
  padding: 0px 15px 15px 75px;
}

div.${TREE_OFF} 
{
  grid-template-areas: 'right right';
}

div.${TREE_OFF}  > div.${LEFT_ON}
{
  display: block;
  grid-area: right;
  align-self: start;
  position: sticky;
  top: 10px;
  margin-left: 15px;
  height: 50px;
  width: 45px;
  max-height: initial;
  min-width: auto;
  max-width: initial;
}

div.${TREE_OFF}  > div.${ROOT_CLASS} > s > div > div
{
  width: 35px;
  height: 30px;
  transition: width 0.250s, height 0.250s;
}

div.${TREE_OFF}  > div.${LEFT_ON} > s > div
{
  width: inherit;
  height: initial;
  margin: 0;
}

div.${TREE_OFF}  div.${LEFT_ON} > s > div:hover
{
  border-radius: 20px;
}

div.${TREE_OFF}  > div.${LEFT_ON} > s
{
  height: inherit;
  width: inherit;
}
`);
