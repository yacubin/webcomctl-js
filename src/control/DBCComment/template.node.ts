import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("DBCComment");

const rpanel_bor = '#aeaeae8f';
const RPANEL_BS = '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
});

export const ROOT_CLASS: string = representClassNames("DBCComment-ROOT_CLASS");
export const COMMENT_CLASS: string = representClassNames("DBCComment-COMMENT_CLASS");

export const ROOT_HTML = `
<b class="${ROOT_CLASS}">
  <h5>Comment</h5>
  <div class="${COMMENT_CLASS}"></div>
</b>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} h5
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}


.${ROOT_CLASS}
{
  display: block;
  font-size: 0.94em;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  text-decoration: none;
  font-weight: 400;
  background-color: ${vars.rpanel_bg.asVar()};
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

.${ROOT_CLASS} > div
{
  display: block;
  padding: 20px 30px 20px 30px;
  font-weight: 400;
  border: 1px solid ${rpanel_bor};
  box-shadow: ${RPANEL_BS};
  border-radius: 3px;
}

.${ROOT_CLASS} > div > span
{
    display: block;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);
