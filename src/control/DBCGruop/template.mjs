import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_DBC_FONT_SANS } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCGruop', import.meta.url);

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "GROUP",
  "dbc_title_group",
  "dbc_group_signals",
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.ROOT_CLASS} ${clss.GROUP}">
  <h4>Group:<u class="${clss.dbc_title_group}"></u></h4>
  <ul class="${clss.dbc_group_signals}"></ul>
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
  font-size: 16px;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
}

.${clss.ROOT_CLASS} h4
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

div.${clss.GROUP}
{
  padding-top: 15px;
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