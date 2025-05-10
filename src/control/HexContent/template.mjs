import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_MONOSPACE } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HexContent', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "CONTENT_CLASS",
  "OFSLIST_CLASS",
  "BINLIST_CLASS",
  "TXTLIST_CLASS",
  "SCROLL_MAIN_CLASS",
  "SCROLL_BAR_CLASS",
  "SCROLL_THUMB_CLASS",
]);

const vars = mk.newCSSVariableMap({
  ROOTCOL: [ "black", "#b8b4b4" ],
  BG: [ UIC_CONTENT_BACKGROUND_COLOR, UIC_CONTENT_BACKGROUND_COLOR_DARK ],
  TTLCL1: [ "#646464", "#7c7c7c" ],
  TTLCL2: [ "#0058ff", "#2160b0" ],
  SCROLL_STHMBG1: [ "darkgray", "#454545" ],
  SCROLL_STHMBG2: "#959595",
  OFFCOLTTL: [ "#4b7ec0", "#20477a" ],
});

 // TODO: Remove extra classes
const OFFSET_CLASS = mk.newClassName("Offset");
const BINARY_CLASS = mk.newClassName("Binary");
const TEXT_CLASS = mk.newClassName("Text");

const OFFSET_STR = "Offset";
const TEXT_STR = "Text";

mk.newHTML('ROOT_HTML', `
 <div class="${clss.ROOT_CLASS}">
    <div class="${clss.CONTENT_CLASS}">
      <div class="${OFFSET_CLASS}">
        <h3>${OFFSET_STR}</h3>
        <ul>
          <div class="${clss.OFSLIST_CLASS}"></div>
        </ul>
      </div>
      <div class="${BINARY_CLASS}">
        <h3><span>00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F</span></h3>
        <div>
          <div class="${clss.BINLIST_CLASS}"></div>
        </div>
      </div>
      <div class="${TEXT_CLASS}">
        <h3>${TEXT_STR}</h3>
        <ul>
          <div class="${clss.TXTLIST_CLASS}"></div>
        </ul>
      </div>
    </div>
    <div class="${clss.SCROLL_MAIN_CLASS}">
      <div class="${clss.SCROLL_BAR_CLASS}">
        <div class="${clss.SCROLL_THUMB_CLASS}"></div>
      </div>
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

.${clss.ROOT_CLASS}
{
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  color: ${vars.ROOTCOL.asVar()};
  user-select: auto;
  overflow: hidden;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} s
{
  text-decoration: none;
}

.${clss.ROOT_CLASS} h3
{
  margin: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${clss.CONTENT_CLASS}
{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 10px);
  padding-top: 1px;
  line-height: 20px;
  word-spacing: normal;
  font-size: 16px;
  background-color: ${vars.BG.asVar()};
  font-family: ${TOOLBAR_FONT_MONOSPACE};
  flex-shrink: 0;
  overflow: hidden;
}

.${BINARY_CLASS} > h3 > span,
.${clss.CONTENT_CLASS} h3
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
}

.${clss.CONTENT_CLASS} h3
{
  padding: 0px 10px;
  font-size: 1em;
  color: ${vars.TTLCL1.asVar()};
  box-sizing: border-box;
}

.${OFFSET_CLASS},
.${TEXT_CLASS},
.${BINARY_CLASS},
.${OFFSET_CLASS} > ul > div,
.${TEXT_CLASS} > ul > div,
.${BINARY_CLASS} > div > div
{
  height: 100%;
}

.${OFFSET_CLASS} > ul,
.${TEXT_CLASS} > ul,
.${BINARY_CLASS} > div
{
  height: calc(100% - 40px);
}

.${OFFSET_CLASS}
{
  width: auto;
}

.${OFFSET_CLASS}
{
  color: ${vars.TTLCL2.asVar()};
}

.${OFFSET_CLASS} > h3
{
  color: ${vars.OFFCOLTTL.asVar()};
}

.${OFFSET_CLASS} > ul,
.${TEXT_CLASS} > ul
{
  list-style-type: none;
  padding: 5px 10px 10px 10px;
  margin: 0px;
}

.${TEXT_CLASS} > ul li
{
  white-space: pre;
  word-spacing: normal;
}

.${BINARY_CLASS}
{
  text-align: left;
  flex-shrink: 0;
}

.${BINARY_CLASS} > div
{
  padding: 5px 10px 10px 10px;
}

.${BINARY_CLASS} > h3,
.${BINARY_CLASS} > div > div
{
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: min-content;
  white-space: pre;
  font-size: 1em;
}

@media (device-width < 550px)
{
  .${clss.CONTENT_CLASS}
  {
    font-size: 20px;
    line-height: inherit;
  }
}

.${clss.SCROLL_MAIN_CLASS}
{
  height: 100%;
  width: 10px;
  overflow: visible;
}

.${clss.SCROLL_MAIN_CLASS} > h3
{
  display: block;
  height: 25px;
  padding: 0px;
}

.${clss.SCROLL_MAIN_CLASS} > div
{
  position: absolute;
  right: 0px;
  width: 10px;
  height: 100%;
}

.${clss.SCROLL_MAIN_CLASS} > div > div
{
  display: block;
  position: relative;
  width: inherit;
  border-radius: 10px;
  background-color: ${vars.SCROLL_STHMBG1.asVar()};
}

.${clss.SCROLL_MAIN_CLASS} > div > div:hover
{
  background-color: ${vars.SCROLL_STHMBG2.asVar()};
}

@media (width < 830px)
{ 
  div.${clss.SCROLL_MAIN_CLASS}
  {
    position: sticky;
    right: 0px;
  }
}
`);

export async function buildComponent()
{
  return mk.buildComponent();
}
