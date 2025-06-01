import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker("AbsoluteBlock", import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "RIGHT_CLASS",
  "BOTTOM_CLASS",
]);

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
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
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
}

.${clss.RIGHT_CLASS}
{
  right: 0;
  left: auto;
  align-items: flex-end;
}

.${clss.BOTTOM_CLASS}
{
  bottom: 0;
  top: auto;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
