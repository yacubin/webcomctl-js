import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('DMBtn', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "TOGGLE_CLASS",
  ]);
  
  const sun = await mk.loadSvgAsCssUrl('./sun.svg');
  const moon = await mk.loadSvgAsCssUrl('./moon.svg');

  const vars = mk.newCSSVariableMap({
  IMG_VAR: [ sun, moon ],
  BG_VAR: [ '#7b7b7b21', '#ffffff21' ],
  });

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span class="${clss.TOGGLE_CLASS}"></span>
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

.${clss.ROOT_CLASS}
{
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid ${HEADER_FONT_COLOR};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}:hover
{
  background-color: ${vars.BG_VAR.asVar()};
}

.${clss.TOGGLE_CLASS}
{
  background-image: ${vars.IMG_VAR.asVar()};
  display: block;
  height: 100%;
  width: 100%;
  border: 3px solid transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    width: 60px;
    height: 60px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
