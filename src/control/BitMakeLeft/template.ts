import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("BitMakeLeft");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const vars = mk.newCSSVariableMap({
  list_hover: ['#50505026', '#202020'],
  col: ['black', 'white'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <ul>
    <li>Introductioniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</li>
    <li>Introduction Introductioniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
    <li>Introduction</li>
  </ul>
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

.${clss.ROOT_CLASS} > ul::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS} > ul::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS} > ul::-webkit-scrollbar-track,
.${clss.ROOT_CLASS} > ul::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${clss.ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  max-width: 300px;
  min-width: 240px;
  padding: 40px 15px 30px 15px;
  color: ${vars.col.asVar()};
  overflow: hidden;
}

.${clss.ROOT_CLASS} ul
{
  list-style-type: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: auto;
}

.${clss.ROOT_CLASS} ul li
{
  padding: 7px 20px;
  border-radius: 10px;
  text-overflow: ellipsis;
  word-break: normal;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
}

.${clss.ROOT_CLASS} ul li:hover
{
  background-color: ${vars.list_hover.asVar()};
}

.${clss.ROOT_CLASS} * 
{
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}