import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("DBCContentBlock");

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

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

.${clss.ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  grid-area: right;
  align-self: start;
  width: 100%;
  height: inherit;
  min-width: 450px;
  padding: 0px 15px 15px 15px;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  padding-top: 15px;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
