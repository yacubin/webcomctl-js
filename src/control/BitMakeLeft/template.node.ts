import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("BitMakeLeft");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';
const SC1 = 'linear-gradient(to bottom, white 0%, #f8f8f8 5% 95%, white)';
const SC2 = 'linear-gradient(to bottom, rgb(23, 23, 26) 0%, #1c1c1c 5% 95%, rgb(23, 23, 26) 100%)';

const vars = mk.newCSSVariableMap({
  list_hover: ['#50505026', '#202020'],
  col: ['black', 'white'],
  SC_col: [SC1, SC2],
});

export const ROOT_CLASS: string = representClassNames("BitMakeLeft-ROOT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
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

.${ROOT_CLASS} > ul::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS} > ul::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${ROOT_CLASS} > ul::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${ROOT_CLASS} > ul::-webkit-scrollbar-track
{
  background: ${vars.SC_col.asVar()};
}

.${ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  max-width: 300px;
  min-width: 240px;
  padding: 40px 15px 30px 15px;
  color: ${vars.col.asVar()};
  overflow: hidden;
}

.${ROOT_CLASS} ul
{
  list-style-type: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: auto;
}

.${ROOT_CLASS} ul li
{
  padding: 7px 20px;
  border-radius: 10px;
  text-overflow: ellipsis;
  word-break: normal;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
}

.${ROOT_CLASS} ul li:hover
{
  background-color: ${vars.list_hover.asVar()};
}

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}
`);
