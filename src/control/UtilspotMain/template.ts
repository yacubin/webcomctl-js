import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

const mk = new ControlMaker("UtilspotMain");

const sc_th_bg = '#b5b5b5c7';
const sc_tr_bg = "transparent";

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "SCROLL_CLASS",
]);

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div class="${clss.SCROLL_CLASS}"></div>
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} h4
{
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 400;
}

.${clss.ROOT_CLASS}
{
  position: fixed;
  width: 100%;
  height: 100%;
}

.${clss.SCROLL_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${clss.SCROLL_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.SCROLL_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${sc_th_bg};
  border-radius: 10px;
}

.${clss.SCROLL_CLASS}::-webkit-scrollbar-corner,
.${clss.SCROLL_CLASS}::-webkit-scrollbar-track
{
  background-color: ${sc_tr_bg};
}

@media (device-width <= 550px)
{
 .${clss.ROOT_CLASS} 
  {
    font-size: 37px;
  }
  .${clss.SCROLL_CLASS} 
  {
    min-width: auto;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
