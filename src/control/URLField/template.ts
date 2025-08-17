import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("URLField");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "CONNECT_BTN_ON",
  "CONNECT_BTN_OFF",
  "ADDRESSES_INPUT",
  "ADDRESSES_SHOW",
  "ADDRESSES_DISABLED",
  "ADDRESSES_LIST",
]);

const vars = mk.newCSSVariableMap({
  wsock_nav_col_hov: [ '#aaa8a821', '#aaa8a821' ],
  wsock_nav_col: [ '#5e5e5e', ' #dcdcdc' ],
  wsock_nav_inp_act_bg: [ '#dedede', '#d3d3d340' ],
  wsock_nav_inp_hov_bs: [ '0 1px 0 rgba(100, 100, 100, 0)', '0 1px 0 rgb(100 100 100 / 35%)' ],
  wsock_nav_inp_hov_bg: [ '#f4f4f4', '#b8b8b840' ],
  wsock_nav_inp_bg: [ '#f4f4f4', '#515151' ],
  wsock_nav_inp_col: [ 'black', 'white' ],
  wsock_nav_inp_car: [ 'black', 'white' ],
  wsock_nav_inp: [ 'white', 'rgb(23, 23, 26)' ],
  inp_but_col: [ '#1877f2', '#1877f2' ],
  inp_but_col2: [ '#820101', '#820101' ],
  wsock_nav_but_bg: ['white', 'rgb(23, 23, 26)'],
  inp_pla_col: [ '#b3b3b3', '#b3b3b3' ],
  inp_ms_inp_pla_col: [ '#b3b3b3', '#b3b3b3' ],
  wsock_nav_bef_bg: [ '#f4f4f4', '#515151' ],
  wsock_add_dis_bef_bg: [ '#f4efef', '#6a484885' ],
  wsock_add_dis_bg: [ '#f4efef', '#6a484885' ],
  wsock_nav_bs2: [ '#bababa8c', '#bababa21'],
  wsock_nav_bg2: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_nav_bor:[ '#ccc', '#454545' ],
});

mk.newHTML('ROOT_HTML', `
  <nav class="${clss.ROOT_CLASS}">
    <span>
      <input class="${clss.ADDRESSES_INPUT}" type="text" placeholder="Address"/>
    </span>

    <div>
      <input class="${clss.CONNECT_BTN_ON}" type="button" value="Connect"/>
    </div>

    <ul class="${clss.ADDRESSES_LIST}"></ul>
  </nav>
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
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  margin: 20px 0px 0px 0px;
  border: 1px solid ${vars.wsock_nav_bor.asVar()};
  border-radius: 18px;
  overflow: hidden;
  background-color: ${vars.wsock_nav_bg2.asVar()};
  box-shadow: 0px 2px 5px 0px ${vars.wsock_nav_bs2.asVar()};
  z-index: 1;
}

.${clss.ROOT_CLASS}.${clss.ADDRESSES_SHOW}
{
  height: auto;
}

.${clss.ROOT_CLASS} > span
{
  display: block;
  height: min-content;
  padding: 3px 0px;
  margin-left: 3px;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  position: relative;
}

.${clss.ROOT_CLASS}.${clss.ADDRESSES_DISABLED} > span > input[type="text"]
{
  background-color: ${vars.wsock_add_dis_bg.asVar()};
}

.${clss.ROOT_CLASS}.${clss.ADDRESSES_DISABLED} > span:before
{
  background-color: ${vars.wsock_add_dis_bef_bg.asVar()};
}

.${clss.ROOT_CLASS}.${clss.ADDRESSES_DISABLED} > span > input[type="text"]
{
  pointer-events: none;
}

.${clss.ROOT_CLASS} > span > input[type="text"]
{
  height: 30px;
  width: 340px;
  padding-left: 15px;
  font-size: 1em;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  border: none;
  color: ${vars.wsock_nav_inp_col.asVar()};
  caret-color: ${vars.wsock_nav_inp_car.asVar()};
  font-family: monospace;
  background-color: ${vars.wsock_nav_inp_bg.asVar()};
}

.${clss.ROOT_CLASS} > span:before
{
  content: ' ';
  display: block;
  width: 11px;
  height: calc(100% - 6px);
  position: absolute;
  background-color: ${vars.wsock_nav_bef_bg.asVar()};
  right: -11px;
  top: 3px;
}

.${clss.ROOT_CLASS} input[type="text"]::placeholder
{
  color: ${vars.inp_pla_col.asVar()};
}

.${clss.ROOT_CLASS} input[type="text"]::-ms-input-placeholder
{
  color: ${vars.wsock_nav_but_bg.asVar()};
}

.${clss.ROOT_CLASS} > span > input[type="text"]:focus-visible
{
  outline: none;
}

.${clss.ROOT_CLASS} > div
{
  padding: 0px 3px;
  border-radius: 20px;
  background-color: ${vars.wsock_nav_but_bg.asVar()};
  z-index: 1;
}

.${clss.ROOT_CLASS} input[type="button"]
{
  height: 30px;
  width: 95px;
  font-size: 1em;
  border-radius: 15px;
  background-color: ${vars.wsock_nav_inp.asVar()};
}

input[type="button"].${clss.CONNECT_BTN_ON}
{
  color: ${vars.inp_but_col.asVar()};
  border: 1px solid ${vars.inp_but_col.asVar()};
}

input[type="button"].${clss.CONNECT_BTN_OFF}
{
  color: ${vars.inp_but_col2.asVar()};
  border: 1px solid ${vars.inp_but_col2.asVar()};
}

.${clss.ROOT_CLASS} input[type="button"]:hover
{
  background-color: ${vars.wsock_nav_inp_hov_bg.asVar()};
  box-shadow: ${vars.wsock_nav_inp_hov_bs.asVar()};
}

.${clss.ROOT_CLASS} input[type="button"]:active
{
  background-color: ${vars.wsock_nav_inp_act_bg.asVar()};
}

.${clss.ROOT_CLASS} > ul
{
  grid-column: 1/3;
  display: none;
  padding: 0px;
  font-size: 0.95em;
  line-height: 20px;
  color: ${vars.wsock_nav_col.asVar()};
}

.${clss.ROOT_CLASS}.${clss.ADDRESSES_SHOW} > ul
{
  display: block;
}

.${clss.ROOT_CLASS} > ul > li
{
  padding: 3px 15px;
}

.${clss.ROOT_CLASS} > ul > li:hover
{
  background-color: ${vars.wsock_nav_col_hov.asVar()};
}

.${clss.ROOT_CLASS} > ul > li:last-child
{
  margin-bottom: 10px;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
