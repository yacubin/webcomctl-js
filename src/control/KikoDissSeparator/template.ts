import ControlMaker from "@/lib/ControlMaker.mjs";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker("KikoDissSeparator", import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  col: [ '#656565', '#4d4d4d' ],
  bagcol: [ 'linear-gradient(#c8c8c8 10%, #ffffff)', 'linear-gradient(#434343 10%, rgb(23, 23, 26))' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span>20.10.1979</span>
  <div></div>
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
  width: inherit;
  margin: 10px 10px;
  padding: 3px 5% 0 5%;
  font-size: 14px;
  font-weight: 600;
  color: ${vars.col.asVar()};
  font-family: cursive;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span
{
  display: block;
  margin: 0 0 3px 3px;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  align-items: center;
  width: inherit;
  height: 2px;
  background: ${vars.bagcol.asVar()};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
