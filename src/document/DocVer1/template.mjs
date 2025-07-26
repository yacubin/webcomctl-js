import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DocVer1', import.meta.url);

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<!DOCTYPE html>
<html ${DARKMODE_ATTR_NAME}="${DARKMODE_DEFAULT_VALUE}">
  <head></head>
  <body class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></body>
</html>
`);

mk.newCSS('CSS', `
root:
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
}

.${clss.ROOT_CLASS}
{
  position: fixed;
  cursor: default;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: var(--uic-vrtblk-rootbg);
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
