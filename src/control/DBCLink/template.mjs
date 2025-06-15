import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

import { HEADER_FONT_SIZE } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCLink', import.meta.url);

const OpS = '#85858526';
const GitHub_IMG = await mk.loadSvgAsCssUrl('./GitHub.svg');

const vars = mk.newCSSVariableMap({
  btnBg: [ HEADER_BACKGROUND_COLOR ],
  btnCol: [ HEADER_COLOR_HOVER, HEADER_COLOR_HOVER_DARK ],
  image: [
    await mk.loadSvgAsCssUrl('./GitHub_light_hover.svg'),
    await mk.loadSvgAsCssUrl('./GitHub_dark_hover.svg'),
  ],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
  <a href="https://github.com/ykbin/dbc" class="${clss.ROOT_CLASS} notranslate" translate="no" target="_blank" draggable="false">
    <div></div><span>GitHub</span>
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
  width: min-content;
  height: min-content;
  padding-right: 5px;
  margin: 0 0 0 5px;
  color: ${HEADER_FONT_COLOR};
  font-family: ${HEADER_FONT_FAMILY};
  font-size: ${HEADER_FONT_SIZE};
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS}:hover
{
  color: ${vars.btnCol.asVar()};
  background-color: ${vars.btnBg.asVar()};
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${clss.ROOT_CLASS}:hover > div
{
  background-image: ${vars.image.asVar()};
}

.${clss.ROOT_CLASS} > div
{
  display: block;
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${GitHub_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  text-decoration: none;
  flex-shrink: 0;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS} > div
  {
    width: 60px;
    height: 55px;
  }
  .${clss.ROOT_CLASS}
  {
    font-size: 60px;
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