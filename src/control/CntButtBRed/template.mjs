import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('CntButtBRed', import.meta.url);

const WATER_IMG = await mk.loadSvgAsCssUrl('./water.svg');

const clss = mk.newClassNameMap([
"ROOT_CLASS",
"LOAD_CLASS",
"LABEL_CLASS",
"HEIGHT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  HOVBG_VAR: [ '#f5eaea', '#5841414f' ],
  DEF_COLOR: [ '#c50000', '#c50000' ],
  DEF_BORDER_COLOR: [ '#c50000', '#c50000' ],
  ACT_COLOR : [ '#a72f2f', '#a72f2f' ],
  ACT_BORDER_COLOR: [ '#a72f2f', '#a72f2f' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div><div class="${clss.HEIGHT_CLASS}"></div></div>
  <label class="${clss.LABEL_CLASS}">Upload</label>
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

.${clss.ROOT_CLASS} > div > div,
.${clss.LABEL_CLASS} > input
{
  display:none;
}

.${clss.ROOT_CLASS},
.${clss.LOAD_CLASS}
{
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 271px;
  height: 60px;
  font-size: 40px;
  box-sizing: content-box;
  overflow: hidden;
}

.${clss.ROOT_CLASS}
{
  color: ${vars.DEF_COLOR.asVar()};
  border: 3px solid ${vars.DEF_BORDER_COLOR.asVar()};
}

.${clss.ROOT_CLASS}:hover
{
  background-color: ${vars.HOVBG_VAR.asVar()};
}

.${clss.LOAD_CLASS}
{
  justify-items: center;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border: 3px solid ${vars.ACT_BORDER_COLOR.asVar()};
  color: ${vars.ACT_COLOR.asVar()};
  cursor: no-drop;
}

.${clss.LOAD_CLASS} > div
{
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  min-height: 110%;
  min-width: 100%;
}

.${clss.LOAD_CLASS} > div > div
{
  width: 100%;
  background-image: ${WATER_IMG};
  background-repeat: no-repeat;
  background-size: 120%;
}

.${clss.LABEL_CLASS}
{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;
  font-family: ${vars.TOOLBAR_FONT_SANS.asVar()};
}

.${clss.LOAD_CLASS} .${clss.LABEL_CLASS}
{
  position: relative;
  z-index: 1;
  top: 99%;
  pointer-events: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS},
  .${clss.LOAD_CLASS}
  {
    width: 542px;
    height: 120px;
    font-size: 70px;
    border-radius: 20px;
  }
}
`);

export async function buildComponent()
{
  return mk.buildComponent();
}
