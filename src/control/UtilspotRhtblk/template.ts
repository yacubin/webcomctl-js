import ControlMaker from "@/lib/ControlMaker.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker('UtilspotRhtblk', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
  <span class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></spah>
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
  flex-direction: row-reverse;
  height: inherit;
  padding: 10px 10px 0px 0px;
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
