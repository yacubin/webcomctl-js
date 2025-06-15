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

const mk = new ControlMaker('HdrUploadButton', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "HIDDEN_CLASS",
]);

const MAIN_IMG = await mk.loadSvgAsCssUrl('./search_default.svg');

const vars = mk.newCSSVariableMap({
  btncol: [HEADER_COLOR_HOVER, HEADER_COLOR_HOVER_DARK ],
  image: [
    await mk.loadSvgAsCssUrl('./search_light_hover.svg'),
    await mk.loadSvgAsCssUrl('./search_dark_hover.svg'),
  ],
});

mk.newHTML('ROOT_HTML', `
<label class="${clss.ROOT_CLASS} ${clss.HIDDEN_CLASS} notranslate" translate="no" draggable="false">
  <div></div>
  <span>Upload</span>
  <!--<input type="file">-->
</label>
`);

mk.newHTML('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS} > input
{
  display: none;
}

.${clss.HIDDEN_CLASS}
{
  visibility: hidden;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding-right: 5px;
  color: ${HEADER_FONT_COLOR};
  font-size: ${HEADER_FONT_SIZE};
  font-family: ${HEADER_FONT_FAMILY};
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > div
{
  display: block;
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex-shrink: 0;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}:hover 
{
  color: ${vars.btncol.asVar()};
  background-color: ${HEADER_BACKGROUND_COLOR};
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${clss.ROOT_CLASS}:hover div
{
  background-image: ${vars.image.asVar()};
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
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
