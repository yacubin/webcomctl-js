import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import splitterSvg from "./splitter.svg";
import splitterHoverSvg from "./splitter-hover.svg";
import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCLeft");

const left_on_sc = 'transparent';
const button_bg = '#dddddd40';
const dbc_split_norm = convertSvgToCssUrl(splitterSvg);
const dbc_split_hov = convertSvgToCssUrl(splitterHoverSvg);
const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const vars = mk.newCSSVariableMap({
  sep_bg: ['linear-gradient(to bottom,transparent 0%, #bcbcbc30 35% 85%, transparent 100%)'],
  sep_hov_bg: ['linear-gradient(to bottom,transparent 0%, #7d7d7d30 35% 85%, transparent 100%)'],
  left_sc_th_bg: ['#3a3a3a', '#3e3e43'],
  left_bg: ['#ffffff','rgb(23, 23, 26)'],
  left_grad: ['linear-gradient(white 0% 69%, #ff000000 100%)','linear-gradient(rgb(23, 23, 26) 0% 69%, #ff000000 100%)'],
  left_fog_grad: ['linear-gradient(#ffffff00, white)','linear-gradient(#ffffff00, rgb(23, 23, 26))'],
  dbc_doc_icon: ['url(/dbc-online/document.svg)','url(/dbc-online/document2.svg)'],
  dbc_mes_pseudo_icon:  ['url(/dbc-online/lock_message.svg)','url(/dbc-online/lock_message_dark.svg)'],
  dbc_group_icon: ['url(/dbc-online/group.svg)','url(/dbc-online/group2.svg)'],
  dbc_sig_icon: ['url(/dbc-online/signal.svg)', 'url(/dbc-online/signal2.svg)'],
  dbc_mes_icon: ['url(/dbc-online/message.svg)','url(/dbc-online/message2.svg)'],
  dbc_sig_pseudo_icon: ['url(/dbc-online/lock_signal.svg)','url(/dbc-online/lock_signal_dark.svg)'],
  mes_pseudo_bor: ['#470000e3','#a77d7de0'],
  mes_pseudo_col: ['#470000e3','#a77d7de0'],
  tree_list_bor: ['black','white'],
  tree_list_col: ['black','white'],
  tree_act_col: ['black','#eeeeee'],
  mes_pseudo_list_col: ['#684a4acc','#ffd5d570'],
  mes_pseudo_list_bor: ['#684a4acc','#ffd5d570'],
  left_name_hov: ['#e9e9e9', '#c1c1c126'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "BN_NAV",
  "TREE",
  "PANEL_SEPARATOR",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">

  <s>
    <div>
      <div class="${clss.BN_NAV}"></div>
    </div>
  </s>

  <nav class="${clss.TREE} ${clss.PORT_CLASS}"></nav>

  <div class="${clss.PANEL_SEPARATOR}"><div></div></div>

  <span><div></div></span>

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

.${clss.ROOT_CLASS} > nav::-webkit-scrollbar
{
  height:10px;
  width:10px;
  background-color: ${left_on_sc};
}

.${clss.ROOT_CLASS} > nav::-webkit-scrollbar-thumb
{
  background-color: ${left_on_sc};
  border-radius: 10px;
}

.${clss.ROOT_CLASS} > nav:hover::-webkit-scrollbar-thumb
{
  background-color: ${vars.left_sc_th_bg.asVar()};
  border-radius: 10px;
}

.${clss.ROOT_CLASS}
{
  display: grid;
  grid-template-rows: 35px auto min-content;
  grid-template-columns: auto 10px;
  grid-template-areas:
  'header header'
  'content stick'
  'footer footer';
  width: inherit;
  grid-area: left;
  align-self: start;
  position: sticky;
  top: 0px;
  height: inherit;
  max-height: calc(100vh - 143px);
  min-height: 400px;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: ${vars.left_bg.asVar()};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > nav
{
  grid-area: content;
  padding: 30px 10px 20px 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
}

div.${clss.ROOT_CLASS} > nav + div
{
  grid-area: stick;
  width: 10px;
  height: 100%;
  background: ${vars.sep_bg.asVar()};
  flex-shrink: 0;
  cursor: e-resize;
}

div.${clss.ROOT_CLASS} > nav + div:hover
{
  background: ${vars.sep_hov_bg.asVar()};
}

div.${clss.ROOT_CLASS} > nav + div > div
{
  width: 10px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  background-image: ${dbc_split_norm};
}

div.${clss.ROOT_CLASS} > nav + div:hover > div
{
  background-image: ${dbc_split_hov};
}

.${clss.ROOT_CLASS} > s
{
  grid-area: header;
  display: flex;
  height: 50px;
  width: calc(100% - 20px);
  align-items: center;
  background: ${vars.left_grad.asVar()};
  z-index: 2;
}

.${clss.ROOT_CLASS} > s > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;
  margin-left: 10px;
  border-radius: 10px;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > s > div > div
{
  width: 20px;
  height: 20px;
  background-image: ${left_but_img};
  background-size: contain;
  background-origin: padding-box;
  background-repeat: no-repeat;
  background-position: center;
}

.${clss.ROOT_CLASS} > s > div:hover
{
  background-color: ${button_bg};
}

.${clss.ROOT_CLASS} > s > div:hover > div
{
  background-image: ${left_but_hov_img};
  transition: background-image 0.5s;
}

.${clss.ROOT_CLASS} > span 
{
  grid-area: footer;
  display: flex;
  height: 0px;
  align-items: flex-end;
}

.${clss.ROOT_CLASS} > span > div 
{
  height: 25px;
  width: 100%;
  background: ${vars.left_fog_grad.asVar()};
}

.${clss.ROOT_CLASS} nav:hover + div + span > div 
{
  width: calc(100% - 20px);
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}