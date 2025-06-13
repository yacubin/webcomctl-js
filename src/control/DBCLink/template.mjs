import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCLink', import.meta.url);

const OpS = '#85858526';
const dbc_col = '#5063b1';
const GitHub_IMG = await mk.loadSvgAsCssUrl('./GitHub.svg');
const GitHub_IMG2 = await mk.loadSvgAsCssUrl('./GitHub2.svg');

const vars = mk.newCSSVariableMap({
  dbc_col_hov: [ '#1e2955', '#a0a5ba' ],
  GitHub: [ GitHub_IMG, GitHub_IMG2 ],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
  <a href="https://github.com/ykbin/dbc" class="${clss.ROOT_CLASS} notranslate" translate="no" target="_blank" draggable="false">
    <div></div><span>(GitHub)</span>
  </a>
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

.${clss.ROOT_CLASS}
{
  display: flex;
  align-items: center;
  color: ${dbc_col};
  width: auto;
  height: auto;
  margin: 0 0 0 5px;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: Open Sans, Arial, sans-serif;
  text-decoration: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS}:hover
{
  background-color: ${OpS};
  color: ${vars.dbc_col_hov.asVar()};
}

.${clss.ROOT_CLASS} > div
{
  height: 30px;
  width: 30px;
  border: 4px solid transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${vars.GitHub.asVar()};
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
  .${clss.ROOT_CLASS} span
  {
    display: none;
  }
}

@media (device-width < 230px)
{
  .${clss.ROOT_CLASS}
  {
    display: none;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}