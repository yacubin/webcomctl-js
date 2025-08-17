import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("HorizontalReverseBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
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
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
