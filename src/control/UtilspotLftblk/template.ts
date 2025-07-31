import ControlMaker from "@/lib/ControlMaker.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker('UtilspotLftblk', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  header_bor: [ 'transparent', 'transparent' ],
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
