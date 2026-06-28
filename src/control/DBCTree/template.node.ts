import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { createSvgOptimize, SvgOptimizeParams } from "@/lib/SVG";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

import documentSvg from "./document.svg";
import messageSvg from "./message.svg";
import groupSvg from "./group.svg";
import signalSvg from "./signal.svg";

const NORMAL_LIGHT_COLOR = "#000000";
const NORMAL_DARK_COLOR = "#eeeeee";
const PSEUDO_LIGHT_COLOR = "#520b0bc2";
const PSEUDO_DARK_COLOR = "#ffd5d570";

const normalLightSvgParams: SvgOptimizeParams = { outputType: "CSS-URL",  stroke: NORMAL_LIGHT_COLOR };
const normalDarkSvgParams: SvgOptimizeParams = { outputType: "CSS-URL",  stroke: NORMAL_DARK_COLOR };
const pseudoLightSvgParams: SvgOptimizeParams = { outputType: "CSS-URL",  stroke: PSEUDO_LIGHT_COLOR };
const pseudoDarkSvgParams: SvgOptimizeParams = { outputType: "CSS-URL",  stroke: PSEUDO_DARK_COLOR };

const documentNormalLightSvg = createSvgOptimize(documentSvg, normalLightSvgParams);
const documentNormalDarkSvg = createSvgOptimize(documentSvg, normalDarkSvgParams);

const messageNornalLightSvg = createSvgOptimize(messageSvg, normalLightSvgParams);
const messageNormalDarkSvg = createSvgOptimize(messageSvg, normalDarkSvgParams);
const messagePseudoLightSvg = createSvgOptimize(messageSvg, pseudoLightSvgParams);
const messagePseudoDarkSvg = createSvgOptimize(messageSvg, pseudoDarkSvgParams);

const groupNornalLightSvg = createSvgOptimize(groupSvg, normalLightSvgParams);
const groupNormalDarkSvg = createSvgOptimize(groupSvg, normalDarkSvgParams);
const groupPseudoLightSvg = createSvgOptimize(groupSvg, pseudoLightSvgParams);
const groupPseudoDarkSvg = createSvgOptimize(groupSvg, pseudoDarkSvgParams);

const signalNornalLightSvg = createSvgOptimize(signalSvg, normalLightSvgParams);
const signalNormalDarkSvg = createSvgOptimize(signalSvg, normalDarkSvgParams);
const signalPseudoLightSvg = createSvgOptimize(signalSvg, pseudoLightSvgParams);
const signalPseudoDarkSvg = createSvgOptimize(signalSvg, pseudoDarkSvgParams);

const mk = new ControlMaker("DBCTree");

const left_on_sc = 'transparent';
const vars = mk.newCSSVariableMap({
  left_col: ['#3d3d3d','#bebebe'],
  dbc_doc_icon: [ documentNormalLightSvg, documentNormalDarkSvg ],
  dbc_mes_icon: [ messageNornalLightSvg, messageNormalDarkSvg ],
  dbc_mes_pseudo_icon: [ messagePseudoLightSvg, messagePseudoDarkSvg ],
  dbc_sig_icon: [ signalNornalLightSvg, signalNormalDarkSvg ],
  dbc_sig_pseudo_icon: [ signalPseudoLightSvg, signalPseudoDarkSvg ],
  dbc_group_icon: [ groupNornalLightSvg, groupNormalDarkSvg ],
  dbc_group_icon_lock: [ groupPseudoLightSvg, groupPseudoDarkSvg ],
  mes_pseudo_list_col: [ PSEUDO_LIGHT_COLOR, PSEUDO_DARK_COLOR ],
  mes_pseudo_hov_bg: ['#f3e9e9','#2f2c2c'],
  tree_act_col: [ NORMAL_LIGHT_COLOR, NORMAL_DARK_COLOR ],
  left_name_hov: ['#e9e9e9', '#c1c1c126'],
  mes_pseudo_list_bor: [ PSEUDO_LIGHT_COLOR, PSEUDO_DARK_COLOR ],
  mes_pseudo_bor: ['#470000e3','#a77d7de0'],
  tree_list_bor: [ 'black', 'white' ],
  tree_list_col: [ 'black', 'white' ],
  left_sc_th_bg: ['#3a3a3a', '#3e3e43']
});

export const ROOT_CLASS: string = representClassNames("DBCTree-ROOT_CLASS");
export const DOCUMENT_CLASS: string = representClassNames("DBCTree-DOCUMENT_CLASS");
export const MESSAGE_CLASS: string = representClassNames("DBCTree-MESSAGE_CLASS");
export const PSEUDO_CLASS: string = representClassNames("DBCTree-PSEUDO_CLASS");
export const GROUP_CLASS: string = representClassNames("DBCTree-GROUP_CLASS");
export const SIGNAL_CLASS: string = representClassNames("DBCTree-SIGNAL_CLASS");
export const ACTIVE_CLASS: string = representClassNames("DBCTree-ACTIVE_CLASS");
export const CHILDFREE_CLASS: string = representClassNames("DBCTree-CHILDFREE_CLASS"); // Do we need this?
export const EXPAND_CLASS: string = representClassNames("DBCTree-EXPAND_CLASS");
export const TITLE_CLASS: string = representClassNames("DBCTree-TITLE_CLASS");
export const CHILDS_CLASS: string = representClassNames("DBCTree-CHILDS_CLASS");
export const DO_EXPAND_CLASS: string = representClassNames("DBCTree-DO_EXPAND_CLASS");
export const DO_ACTIVE_CLASS: string = representClassNames("DBCTree-DO_ACTIVE_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}"></div>
`;

export const ITEM_HTML = `
<div>
  <s>
    <b class="${DO_EXPAND_CLASS}">
      <div></div>
    </b>
    <h2 class="${DO_ACTIVE_CLASS}">
      <s></s>
      <div class="${TITLE_CLASS}"></div>
    </h2>
  </s>
  <span class="${CHILDS_CLASS}"></span>
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

.${ROOT_CLASS}::-webkit-scrollbar
{
  height:10px;
  width:10px;
  background-color: ${left_on_sc};
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${vars.left_sc_th_bg.asVar()};
  border-radius: 10px;
}

.${ROOT_CLASS}
{
  width: 100%;
  height: 100%;
  padding: 30px 10px 20px 15px;
  color: ${vars.left_col.asVar()};
  font-family: ${TOOLBAR_DBC_FONT_SANS};
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} div > span > div
{
  display: none;
}

.${ROOT_CLASS} div.${EXPAND_CLASS} > span > div
{
  display: block;
}

.${ROOT_CLASS} s
{
  text-decoration: none;
}

.${ROOT_CLASS} div s h2
{
  display: block;
  font-weight: 500;
  overflow-wrap: normal;
  white-space: nowrap;
}

.${ROOT_CLASS} div > s
{
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 20px;
  margin-bottom: 7px;
  user-select: none;
}

.${ROOT_CLASS} div > s + span
{
  padding-left: 10px;
  display: block;
}

.${ROOT_CLASS} div > s > h2 > s
{
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  flex-shrink: 0;
}

.${DOCUMENT_CLASS}  > s > h2 > s
{
  background-image: ${vars.dbc_doc_icon.asVar()};
}

.${MESSAGE_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_mes_icon.asVar()};
}

.${GROUP_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon.asVar()};
}

.${SIGNAL_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_sig_icon.asVar()};
}

.${ROOT_CLASS} div > s > h2 > div
{
  flex-shrink: 0;
  text-overflow: ellipsis;
  padding-right: 5px;
}

.${ROOT_CLASS} div.${ACTIVE_CLASS} > s > h2 > div
{
  color: ${vars.tree_act_col.asVar()};
  font-weight: 600;
  padding: 0px;
}

.${ROOT_CLASS} div s h2
{
  display: flex;
  align-items: center;
  font-size: 1.02em;
  flex-shrink: 0;
  margin-left: 7px;
}

.${ROOT_CLASS} div s h2:hover
{
  background-color: ${vars.left_name_hov.asVar()};
}

.${ROOT_CLASS} div s b
{
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.${ROOT_CLASS} div.${CHILDFREE_CLASS} > s b
{
  pointer-events: none;
  visibility: hidden;
}

.${ROOT_CLASS} div s b div
{
  display: block;
  width: 7px;
  height: 7px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

.${ROOT_CLASS} div.${EXPAND_CLASS} > s b div
{
  transform: rotate(315deg);
}

.${ROOT_CLASS} div > s b div
{
  transform: rotate(228deg);
}

.${ROOT_CLASS} div s b:hover div
{
  border-color: ${vars.tree_list_bor.asVar()};
  color: ${vars.tree_list_col.asVar()};
}

.${ROOT_CLASS} div.${PSEUDO_CLASS} s h2:hover 
{
  background-color: ${vars.mes_pseudo_hov_bg.asVar()};
}

.${ROOT_CLASS} div.${PSEUDO_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_mes_pseudo_icon.asVar()};
}

.${PSEUDO_CLASS} div.${SIGNAL_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_sig_pseudo_icon.asVar()};
}

.${PSEUDO_CLASS} div.${GROUP_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon_lock.asVar()};
}

.${ROOT_CLASS} div.${PSEUDO_CLASS} s > h2 > div
{
  color: ${vars.mes_pseudo_list_col.asVar()};
}

.${ROOT_CLASS} div.${PSEUDO_CLASS} > s b div
{
  border-color: ${vars.mes_pseudo_list_bor.asVar()};
}

.${ROOT_CLASS} div.${PSEUDO_CLASS} s b:hover div
{
  border-color: ${vars.mes_pseudo_bor.asVar()};
  color: ${vars.mes_pseudo_bor.asVar()};
}
`);
