import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("DBCAttribute");

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

export const ROOT_CLASS: string = representClassNames("DBCAttribute-ROOT_CLASS");
export const ATTRIBUTES_LIST: string = representClassNames("DBCAttribute-ATTRIBUTES_LIST");
const ATTRIBUTE_CLASS: string = representClassNames("DBCAttribute-ATTRIBUTE_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${ATTRIBUTE_CLASS}">
  <h5>Attributes</h5>
  <div>
    <span class="${ATTRIBUTES_LIST}"></span>
  </div>
</div>
`;

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  font-size: 0.94em;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${ROOT_CLASS} h5
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${ROOT_CLASS} > h5
{
  line-height: 15px;
  font-size: 1.13em;
  font-weight: 600;
  position: relative;
  top: 8px;
  left: 20px;
  width: max-content;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${ATTRIBUTE_CLASS} > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${ROOT_CLASS} > div span 
{
    display: table;
    border-spacing: 0px 5px;
    padding: 20px 30px 20px 30px;
}

.${ROOT_CLASS} > div span > div
{
    display: table-row-group;
}

.${ROOT_CLASS} > div span div h5, 
.${ROOT_CLASS} > div span div u 
{
  display: table-cell;
}

.${ROOT_CLASS}> div span div h5 
{
    font-weight: 400;
}

.${ROOT_CLASS} > div span div u  
{
    padding-left: 15px;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);
