import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_DBC_FONT_SANS } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCAttribute', import.meta.url);

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "attribute",
  "dbc_attributes_root",
  "dbc_attributes_list",
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.ROOT_CLASS} ${clss.dbc_attributes_root} ${clss.attribute}">
  <h5>Attributes</h5>
  <div>
    <span class="${clss.dbc_attributes_list}"></span>
  </div>
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

.${clss.ROOT_CLASS} h5
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS} > h5
{
  line-height: 15px;
  font-size: 1.13em;
  font-weight: 600;
  position: relative;
  top: 8px;
  left: 20px;
  width: max-content;
  padding-top: 10px;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${clss.attribute} > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${clss.ROOT_CLASS} > div span 
{
    display: table;
    border-spacing: 0px 5px;
    padding: 20px 30px 20px 30px;
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