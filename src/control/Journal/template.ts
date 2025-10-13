import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("Journal");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "TITLE",
  "LIST",
]);

const vars = mk.newCSSVariableMap({
  jour_tit_bor: [ "#d6d6d6", "#727272" ],
  jour_tit_bg: [ "#fbfbfb", "transparent" ],
  jour_tit: [ "#555555", "#dedede" ],
  jour_tit_col: [ "#4e4e4e", "#dedede" ],
});


mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span>
    <u class="${clss.TITLE}"></u>
    <div>
      <span class="${clss.LIST}"></span>
    </div>
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
  flex-grow: 1;
  justify-content: center;
  padding: 10px 30px 20px 30px;
  width: inherit;
  line-height: 24px;
  font-size: 15px;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span
{
  display: block;
  width: inherit;
  max-width: 1200px;
}

.${clss.ROOT_CLASS} > span u
{
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${vars.jour_tit.asVar()};
  height: 25px;
}

.${clss.ROOT_CLASS} > span > div
{
  height: calc(100% - 35px);
  padding: 10px;
  border: 1px solid ${vars.jour_tit_bor.asVar()};
  background-color: ${vars.jour_tit_bg.asVar()};
  ord-break: break-all;
  font-family: monospace;
}

.${clss.ROOT_CLASS} > span div span > div
{
  padding: 3px 15px;
  color: ${vars.jour_tit_col.asVar()};
}

@media (device-width <= 550px)
{
  div.${clss.ROOT_CLASS} 
  {
    min-height: calc(100% - 550px);
  }
  div.${clss.ROOT_CLASS} > span u
  {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  div.${clss.ROOT_CLASS},
  div.${clss.ROOT_CLASS} > span u
  {
    font-size: 35px;
  }
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
