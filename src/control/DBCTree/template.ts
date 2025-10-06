import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { createSvgOptimize, SvgOptimizeParams } from "@/lib/SVG";

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

const vars = mk.newCSSVariableMap({
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
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "DOCUMENT_CLASS",
  "MESSAGE_CLASS",
  "PSEUDO_CLASS",
  "GROUP_CLASS",
  "SIGNAL_CLASS",
  "ACTIVE_CLASS",
  "CHILDFREE_CLASS", // Do we need this?
  "EXPAND_CLASS",
  "TITLE_CLASS",
  "CHILDS_CLASS",
  "DO_EXPAND_CLASS",
  "DO_ACTIVE_CLASS",
]);

mk.newHTML("ROOT_HTML", `
<div class="${clss.ROOT_CLASS}"></div>
`);

mk.newHTML("ITEM_HTML", `
<div>
  <s>
    <b class="${clss.DO_EXPAND_CLASS}">
      <div></div>
    </b>
    <h2 class="${clss.DO_ACTIVE_CLASS}">
      <s></s>
      <div class="${clss.TITLE_CLASS}"></div>
    </h2>
  </s>
  <span class="${clss.CHILDS_CLASS}"></span>
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

div.${clss.ROOT_CLASS} div > span > div
{
  display: none;
}

div.${clss.ROOT_CLASS} div.${clss.EXPAND_CLASS} > span > div
{
  display: block;
}

.${clss.ROOT_CLASS} s
{
  text-decoration: none;
}

.${clss.ROOT_CLASS} div s h2
{
  display: block;
  font-weight: 500;
  overflow-wrap: normal;
  white-space: nowrap;
}

.${clss.ROOT_CLASS} div > s
{
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 20px;
  margin-bottom: 7px;
  user-select: none;
}

div.${clss.ROOT_CLASS} div > s + span
{
  padding-left: 10px;
  display: block;
}

div.${clss.ROOT_CLASS} div > s > h2 > s
{
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  flex-shrink: 0;
}

.${clss.DOCUMENT_CLASS}  > s > h2 > s
{
  background-image: ${vars.dbc_doc_icon.asVar()};
}

.${clss.MESSAGE_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_mes_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_mes_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} div.${clss.SIGNAL_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_sig_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} s h2:hover 
{
  background-color: ${vars.mes_pseudo_hov_bg.asVar()};
}

.${clss.GROUP_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon.asVar()};
}

div.${clss.PSEUDO_CLASS} div.${clss.GROUP_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon_lock.asVar()};
}

.${clss.SIGNAL_CLASS} > s > h2 > s
{
  background-image: ${vars.dbc_sig_icon.asVar()};
}

div.${clss.ROOT_CLASS} div > s > h2 > div
{
  flex-shrink: 0;
  text-overflow: ellipsis;
  padding-right: 5px;
}

div.${clss.ROOT_CLASS} div.${clss.ACTIVE_CLASS} > s > h2 > div
{
  color: ${vars.tree_act_col.asVar()};
  font-weight: 600;
  padding: 0px;
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} s > h2 > div
{
  color: ${vars.mes_pseudo_list_col.asVar()};
}

div.${clss.ROOT_CLASS} div s h2
{
  display: flex;
  align-items: center;
  font-size: 1.02em;
  flex-shrink: 0;
  margin-left: 7px;
}

div.${clss.ROOT_CLASS} div s h2:hover
{
  background-color: ${vars.left_name_hov.asVar()};
}

div.${clss.ROOT_CLASS} div s b
{
  display: flex;
  width: 15px;
  height: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

div.${clss.ROOT_CLASS} div.${clss.CHILDFREE_CLASS} > s b
{
  pointer-events: none;
  visibility: hidden;
}

div.${clss.ROOT_CLASS} div s b div
{
  display: block;
  width: 7px;
  height: 7px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

div.${clss.ROOT_CLASS} div.${clss.EXPAND_CLASS} > s b div
{
  transform: rotate(315deg);
}

div.${clss.ROOT_CLASS} div > s b div
{
  transform: rotate(228deg);
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} > s b div
{
  border-color: ${vars.mes_pseudo_list_bor.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.PSEUDO_CLASS} s b:hover div
{
  border-color: ${vars.mes_pseudo_bor.asVar()};
  color: ${vars.mes_pseudo_bor.asVar()};
}

div.${clss.ROOT_CLASS} div s b:hover div
{
  border-color: ${vars.tree_list_bor.asVar()};
  color: ${vars.tree_list_col.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}