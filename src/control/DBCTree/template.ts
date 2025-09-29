import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("DBCTree");

const vars = mk.newCSSVariableMap({
  dbc_doc_icon: ['url(/dbc-online/document.svg)','url(/dbc-online/document2.svg)'],
  dbc_mes_icon: ['url(/dbc-online/message.svg)','url(/dbc-online/message2.svg)'],
  dbc_mes_pseudo_icon:  ['url(/dbc-online/lock_message.svg)','url(/dbc-online/lock_message_dark.svg)'],
  dbc_sig_pseudo_icon: ['url(/dbc-online/lock_signal.svg)','url(/dbc-online/lock_signal_dark.svg)'],
  dbc_group_icon_lock: ['url(/dbc-online/lock_group.svg)','url(/dbc-online/lock_group_dark.svg)'],
  mes_pseudo_list_col: ['#684a4acc','#ffd5d570'],
  mes_pseudo_hov_bg: ['#f3e9e9','#2f2c2c'],
  dbc_group_icon: ['url(/dbc-online/group.svg)','url(/dbc-online/group2.svg)'],
  dbc_sig_icon: ['url(/dbc-online/signal.svg)', 'url(/dbc-online/signal2.svg)'],
  tree_act_col: ['black','#eeeeee'],
  left_name_hov: ['#e9e9e9', '#c1c1c126'],
  mes_pseudo_list_bor: ['#684a4acc','#ffd5d570'],
  mes_pseudo_bor: ['#470000e3','#a77d7de0'],
  tree_list_bor: ['black','white'],
  tree_list_col: ['black','white'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "TREE_ACTIVE",
  "PANEL_SEPARATOR",
  "STATE_COLLAPSE",
  "STATE_EXPAND",
  "STATE_NONE",
  "NODE_DOCUMENT",
  "NODE_MESSAGE",
  "NODE_MESSAGE_PSEUDO",
  "NODE_GROUP",
  "NODE_SIGNAL",
  "STATE_CLICK",
  "SHOWCASE_CLICK",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}"></div>
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

.${clss.NODE_DOCUMENT}  > s > h2 > s
{
  background-image: ${vars.dbc_doc_icon.asVar()};
}

.${clss.NODE_MESSAGE} > s > h2 > s
{
  background-image: ${vars.dbc_mes_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} > s > h2 > s
{
  background-image: ${vars.dbc_mes_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} div.${clss.NODE_SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} s h2:hover 
{
  background-color: ${vars.mes_pseudo_hov_bg.asVar()};
}

.${clss.NODE_GROUP} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon.asVar()};
}

div.${clss.NODE_MESSAGE_PSEUDO} div.${clss.NODE_GROUP} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon_lock.asVar()};
}

.${clss.NODE_SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_icon.asVar()};
}

div.${clss.ROOT_CLASS} div > s > h2 > div
{
  flex-shrink: 0;
  text-overflow: ellipsis;
  padding-right: 5px;
}

div.${clss.ROOT_CLASS} div.${clss.TREE_ACTIVE} > s > h2 > div
{
  color: ${vars.tree_act_col.asVar()};
  font-weight: 600;
  padding: 0px;
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} s > h2 > div
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

div.${clss.ROOT_CLASS} div.${clss.STATE_NONE} > s b
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

div.${clss.ROOT_CLASS} div.${clss.STATE_EXPAND} > s b div
{
  transform: rotate(315deg);
}

div.${clss.ROOT_CLASS} div > s b div
{
  transform: rotate(228deg);
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} > s b div
{
  border-color: ${vars.mes_pseudo_list_bor.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.NODE_MESSAGE_PSEUDO} s b:hover div
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