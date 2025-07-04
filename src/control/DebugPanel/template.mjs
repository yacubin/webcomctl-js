import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('DebugPanel', import.meta.url);
const ARROW_IMG = await mk.loadSvgAsCssUrl('./arrow.svg');
const SH_IMG = await mk.loadSvgAsCssUrl('./SH.svg');

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "LIST_CLASS",
  "TEXT_CLASS",
  "CONTROL_CLASS",
  "TOP_CLASS",
  "RIGHT_CLASS",
  "DOWN_CLASS",
  "HIDE_CLASS",
  "SIDE_CLASS",
]);

const hovBut = '#417cc8';

const vars = mk.newCSSVariableMap({
  bor: [ '#d0dbe9', '#35383c' ],
  bg:  [ '#fdfdfd', 'rgb(43 43 45)' ],
  control: [ '#efefef', '#2f2f2f' ],
  defBut: [ '#488ee9', '#2d5b96' ],
});

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div class="${clss.CONTROL_CLASS}">
      <span><div class="${clss.HIDE_CLASS}"></div></span>
      <div><div class="${clss.SIDE_CLASS}"></div></div>
      <s><div></div></s>
    </div>
    <div class="${clss.LIST_CLASS}"></div>
  </div>
`);

mk.newHTML('ITEM_HTML', `
<div class="${clss.TEXT_CLASS}"></div>
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
  position: fixed;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 2px;
  width: auto;
  height: max-content;
  padding: 0px 5px 0px 5px;
  font-family: ${TOOLBAR_FONT_SANS};
  user-select: none;
  cursor: default;
  z-index: 1000;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.RIGHT_CLASS}
{
  right: 2px;
  left: auto;
  align-items: flex-end;
}

.${clss.TOP_CLASS}
{
  top: 0px;
}

.${clss.LIST_CLASS}:empty,
.${clss.DOWN_CLASS} .${clss.LIST_CLASS}
{
  display: none;
}

.${clss.CONTROL_CLASS}
{
  display: flex;
  width: max-content;
  padding: 5px;
  border-top: 1px solid ${vars.bor.asVar()};
  border-left: 1px solid ${vars.bor.asVar()};
  border-right: 1px solid ${vars.bor.asVar()};
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${vars.control.asVar()};
}

.${clss.TOP_CLASS}
{
  flex-direction: column-reverse;
  justify-content: flex-end;
}

.${clss.RIGHT_CLASS} .${clss.CONTROL_CLASS}
{
  flex-direction: row-reverse;
}

.${clss.CONTROL_CLASS} > *
{
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${vars.defBut.asVar()};
}

.${clss.RIGHT_CLASS} .${clss.CONTROL_CLASS} > *
{
  margin-right: 0;
  margin-left: 5px;
}

.${clss.CONTROL_CLASS} > *:last-child
{
  margin-right: 0;
  margin-left: 0;
}

.${clss.CONTROL_CLASS} > * > div
{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.${clss.CONTROL_CLASS} > *:hover
{
  background-color: ${hovBut};
}

.${clss.CONTROL_CLASS} > div > div,
.${clss.CONTROL_CLASS} > s > div
{
  background-image: ${ARROW_IMG};
  background-size: 85%;
}

.${clss.CONTROL_CLASS} > div > div
{
  transform: scaleX(-1);
}

.${clss.RIGHT_CLASS} .${clss.CONTROL_CLASS} > div > div
{
  transform: scaleX(1);
}

.${clss.CONTROL_CLASS} > span > div
{
  transform: rotate(180deg);
  background-image: ${SH_IMG};
  background-size: 85%;
}

.${clss.TOP_CLASS} .${clss.CONTROL_CLASS} > span > div
{
  transform: rotate(0deg);
}

.${clss.DOWN_CLASS} .${clss.CONTROL_CLASS} > span > div
{
  transform: rotate(0deg);
}

.${clss.TOP_CLASS}.${clss.DOWN_CLASS} .${clss.CONTROL_CLASS} > span > div
{
  transform: rotate(180deg);
}


.${clss.CONTROL_CLASS} > s > div
{
  transform: rotate(90deg);
}

.${clss.TOP_CLASS} .${clss.CONTROL_CLASS} > s > div
{
  transform: rotate(270deg);
}

.${clss.LIST_CLASS}
{
  padding: 5px 5px 0px 5px;
  border: 1px solid ${vars.bor.asVar()};
  background-color: ${vars.bg.asVar()};
}

.${clss.LIST_CLASS} > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  max-width: 200px;
  padding: 0 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  background-color: ${vars.defBut.asVar()};
  overflow: hidden;
  cursor: pointer;
}

.${clss.LIST_CLASS} > div:hover
{
  background-color: ${hovBut};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
