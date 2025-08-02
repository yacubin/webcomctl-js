import ControlMaker from "@/lib/ControlMaker.mjs";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";

const mk = new ControlMaker("SplitterBlock", import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "NONE_CLASS",
  "RIGHT_CLASS",
  "LEFT_CLASS",
  "TOP_CLASS",
  "BOTTOM_CLASS",
]);

const vars = mk.newCSSVariableMap({
  bor: [ '#e6e6e6', '#3c3c3c' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div class="${clss.PORT_CLASS}"></div>
  <span class="${clss.NONE_CLASS}"><div></div></span>
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid ${vars.bor.asVar()};
}

.${clss.PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.${clss.ROOT_CLASS} > span
{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
}

.${clss.ROOT_CLASS} > span > div
{
  flex-shrink: 0;
  background-color: blue;
}

.${clss.BOTTOM_CLASS} > div,
.${clss.TOP_CLASS} > div
{
  width: 100%;
  height: 5px;
}

.${clss.TOP_CLASS}
{
  top: 0;
  width: 100%;
  height: 0;
}

.${clss.BOTTOM_CLASS}
{
  bottom: 0;
  width: 100%;
  height: 0;
}

.${clss.RIGHT_CLASS}
{
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
}

.${clss.LEFT_CLASS} > div,
.${clss.RIGHT_CLASS} > div
{
  width: 5px;
  height: 100%;
}

.${clss.LEFT_CLASS}
{
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
