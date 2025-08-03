import ControlMaker from "@/lib/ControlMaker.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker("ProtocolContent", import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  con_col: [ '#353535', '#dcdcdc' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span>
    <ul id="wsock-message-list"></ul>
  </span>
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

.${clss.ROOT_CLASS}
{
  display: flex;
  padding: 0px 0px 0px 30px;
  flex-grow: 1;
  font-family: monospace;
}

.${clss.ROOT_CLASS} > span
{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.${clss.ROOT_CLASS} > span > ul
{
  width: inherit;
  padding: 10px 0px 15px 0px;
  margin: 0px;
  line-height: 20px;
  font-size: 0.95em;
  color: ${vars.con_col.asVar()};
}

.${clss.ROOT_CLASS} > span > ul > li
{
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  contain: paint;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}