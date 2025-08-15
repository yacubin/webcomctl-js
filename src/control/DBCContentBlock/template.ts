import ControlMaker from "@/lib/ControlMaker.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker("DBCContentBlock");

const vars = mk.newCSSVariableMap({
});

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "dbc_view_document",
  "dbc_view_message",
  "dbc_view_signal",
  "dbc_view_group",
  "dbc_comment_root",
  "dbc_comment_text",
  "dbc_attributes_root",
  "dbc_attributes_list",
  "dbc_group_signals", 
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>

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

.${clss.ROOT_CLASS}
{
  grid-area: right;
  align-self: start;
  width: 100%;
  height: inherit;
  min-width: 450px;
  padding: 0px 15px 15px 15px;
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}