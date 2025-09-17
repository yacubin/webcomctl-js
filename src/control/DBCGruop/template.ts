import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCGruop");

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "GROUP",
  "dbc_title_group",
  "GROUP_SIGNALS_CLASS",
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.ROOT_CLASS} ${clss.GROUP}">
  <h4>Group:<u class="${clss.dbc_title_group}"></u></h4>
  <ul class="${clss.GROUP_SIGNALS_CLASS}"></ul>
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

.${clss.ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  font-size: 0.94em;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${clss.ROOT_CLASS} h4
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS} > h4
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${clss.ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

div.${clss.GROUP} b,
div.${clss.GROUP} > ul
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

div.${clss.GROUP} > ul
{
  padding: 20px 30px 20px 30px;
  margin: 0;
}

.${clss.GROUP} li
{
    list-style-type: none;
}

div.${clss.GROUP} > ul > li
{
  margin-bottom: 5px;
}

div.${clss.GROUP} > ul > li:last-child
{
  margin-bottom: 0px;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}