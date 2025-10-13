import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotScrollBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "LIST",
  "SCROLL",
]);

const sc_th_bg = '#b5b5b5c7';
const sc_tr_bg = 'transparent';

const vars = mk.newCSSVariableMap({
});


mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div class="${clss.SCROLL} ${clss.PORT_CLASS}">
    </div>
  </div>
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
  width: 100%;
  height: 100%;
}

.${clss.SCROLL}
{   
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${clss.SCROLL}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.SCROLL}::-webkit-scrollbar-thumb
{
  background-color: ${sc_th_bg};
  border-radius: 10px;
}

.${clss.SCROLL}::-webkit-scrollbar-corner,
.${clss.SCROLL}::-webkit-scrollbar-track
{
  background-color: ${sc_tr_bg};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
