import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('AbsoluteBlock', import.meta.url);

export const PORT_CLASS = mk.newClassName("Port");

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const TOP_CLASS = mk.newClassName("TOP_CLASS");
const RIGHT_CLASS = mk.newClassName("RIGHT_CLASS");
const DOWN_CLASS = mk.newClassName("DOWN_CLASS");

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
  <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
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

.${ROOT_CLASS}
{
  position: fixed;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 2px;
  width: auto;
  height: max-content;
  padding: 0px 5px 0px 5px;
  font-family: ${TOOLBAR_FONT_SANS};
  user-select: none;
  cursor: default;
  z-index: 1000;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${RIGHT_CLASS}
{
  right: 2px;
  left: auto;
  align-items: flex-end;
}

.${TOP_CLASS}
{
  top: 0px;
}

.${TOP_CLASS}
{
  flex-direction: column-reverse;
  justify-content: flex-end;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
