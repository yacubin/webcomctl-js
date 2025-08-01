import ControlMaker from "@/lib/ControlMaker.mjs";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";
import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme.mjs";
import { UIC_CONTENT_BACKGROUND_COLOR } from "@/lib/WickedTheme.mjs";
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme.mjs";
import { TOOLBAR_FONT_MONOSPACE } from "@/lib/WickedTheme.mjs";

const mk = new ControlMaker("TextContent", import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "NUMBERS",
  "CONTENT",
  "OFFSET",
  "BLUE",
]);

const vars = mk.newCSSVariableMap({
  bg: [ UIC_CONTENT_BACKGROUND_COLOR, UIC_CONTENT_BACKGROUND_COLOR_DARK ],
  col: [ 'black', '#b8b4b4' ],
  bor: [ '#e6e6e6', '#252525' ],
  numCol: [ '#fafafa', '#19191d' ],
});

const BLUE_COLOR = '#0000ff';
const OFFSET_COLOR = 'rgb(197, 6, 11)';
const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <ul class="${clss.NUMBERS}"></ul>
  <div class="${clss.CONTENT}">
  </div>
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

.${clss.ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar-track,
.${clss.ROOT_CLASS} > div::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${clss.ROOT_CLASS} > ul::-webkit-scrollbar
{
  width: 0;
  height: 10px;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1.4em;
  color: ${vars.col.asVar()};
  font-family: ${TOOLBAR_FONT_MONOSPACE};
  background-color: ${vars.bg.asVar()};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div
{
  height: auto;
  width: 100%;
  padding: 10px 10px 0px 10px;
  overflow-y: scroll;
  overflow-x: scroll;
}

.${clss.ROOT_CLASS} > div > span
{
  white-space: pre;
}

.${clss.ROOT_CLASS} > ul
{
  height: auto;
  min-width: 55px;
  padding: 10px 5px 10px 5px;
  border-right: 1px solid ${vars.bor.asVar()};
  background-color: ${vars.numCol.asVar()};
  text-align: center;
  overflow-y: auto;
  overflow-x: scroll;
  scrollbar-width: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > ul:empty
{
  display: none;
}

.${clss.ROOT_CLASS} > ul > li,
.${clss.ROOT_CLASS} > div > span
{
  display: block;
  height: 20px;
}

.${clss.BLUE}
{
  color: ${BLUE_COLOR};
}

.${clss.OFFSET}
{
  color: ${OFFSET_COLOR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
  .${clss.ROOT_CLASS} > ul > li, 
  .${clss.ROOT_CLASS} > div > span
  {
    height: 30px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
