import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCLink', import.meta.url);

const OpS = '#85858526';
const dbc_col = '#5063b1';
const GitHub_IMG = await mk.loadSvgAsCssUrl('./GitHub.svg');

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
  <a href="https://github.com/ykbin/dbc" class="${clss.ROOT_CLASS} notranslate" translate="no" target="_blank" draggable="false">
    <div></div>Sources code <span>(GitHub)</span>
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
  display: block;
  color: ${dbc_col};
  width: auto;
  height: 25px;
  margin: 0 0 0 5px;
  padding: 3px;
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
}

.${clss.ROOT_CLASS} > div
{
  height: 30px;
  width: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${GitHub_IMG};
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