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
]);

mk.newHTML('ROOT_HTML', `

<b class="${clss.ROOT_CLASS} ${clss.dbc_comment_root}">
  <h5>Comment</h5>
  <div class="${clss.dbc_comment_text}"></div>
</b>

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
  display: block;
  font-size: 16px;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  text-decoration: none;
  font-weight: 400;
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
  color: var(--rpanel-col);
  background-color: var(--rpanel-bg);
}

.${clss.ROOT_CLASS} > div
{
  display: block;
  padding: 20px 30px 20px 30px;
  font-weight: 400;
}

.${clss.ROOT_CLASS} > div > span
{
    display: block;
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