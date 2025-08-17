import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("TripleBlock");

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
  width: inherit;
  height: 100%;
  min-width: 685px;
  flex-direction: column;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
