import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCGroup");

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

export const ROOT_CLASS: string = representClassNames("DBCGroup-ROOT_CLASS");
export const GROUP_CLASS: string = representClassNames("DBCGroup-GROUP_CLASS");
export const TITLE_CLASS: string = representClassNames("DBCGroup-TITLE_CLASS");
export const SIGNALS_CLASS: string = representClassNames("DBCGroup-SIGNALS_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h4>Group:<u class="${TITLE_CLASS}"></u></h4>
  <ul class="${SIGNALS_CLASS}"></ul>
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

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  font-size: 0.94em;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${ROOT_CLASS} h4
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${ROOT_CLASS} > h4
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

div.${ROOT_CLASS} b,
div.${ROOT_CLASS} > ul
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

div.${ROOT_CLASS} > ul
{
  padding: 20px 30px 20px 30px;
  margin: 0;
}

.${ROOT_CLASS} li
{
    list-style-type: none;
}

div.${ROOT_CLASS} > ul > li
{
  margin-bottom: 5px;
}

div.${ROOT_CLASS} > ul > li:last-child
{
  margin-bottom: 0px;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);
