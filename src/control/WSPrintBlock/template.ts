import ControlMaker from "@/lib/ControlMaker.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker("WSPrintBlock", import.meta.url);

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const clss: any = mk.newClassNameMap([
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

.${clss.ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-track,
.${clss.ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${clss.ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
