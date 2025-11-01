import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("DocVer1");

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { UIC_START_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_START_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  rootBg: [ UIC_START_BACKGROUND_COLOR, UIC_START_BACKGROUND_COLOR_DARK ],
});

mk.newCSS('CSS', `
root:
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
  cursor: default;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: ${vars.rootBg.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
