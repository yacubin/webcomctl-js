import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('PageTab', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "TEXT_CLASS",
  "CLOSE_CLASS",
  "FOCUS_CLASS",
  "LOADING_CLASS",
]);

const CLOSE_IMG = await mk.loadSvgAsCssUrl('./X.svg');

const TAB_WIDTH = '150px';
const HOVX_CLR = '#80808042';
const DEFBRD_CLR = 'transparent';
const FOCBRD_CLR = '#03a8e2f0';

const vars = mk.newCSSVariableMap({
  uic_pagtab_rootbg: [ UIC_START_BACKGROUND_COLOR, UIC_START_BACKGROUND_COLOR_DARK ],
  uic_pagtab_act_bg: [ "#f3f3f3", "#252525" ],
  uic_pagtab_hov: [ "#dfdfdf", "#313131" ],
  uic_pagtab_col: [ "#838282", "#8b8b8b" ],
  uic_pagtab_bg: [ "#ebebeb", "#242424e6" ],
  uic_pagtab_act_col: [ "black", "#bfbfbf" ],
  uic_pagtab_loading: [ "#949eb0", "#172031" ],
});


export const ROOT_HTML = `
<s class="${clss.ROOT_CLASS}"></s>
`;

export const ITEM_HTML = `
<div class="${clss.FOCUS_CLASS}" draggable="true">
  <span class="${clss.TEXT_CLASS}"></span>
  <div class="${clss.CLOSE_CLASS}" title="Close"><div></div></div>
</div>
`;

export const CSS = `
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
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  font-size: 13px;
  letter-spacing: 2px;
  background-color: ${vars.uic_pagtab_rootbg.asVar()};
  flex-shrink: 0;
  user-select: none;
  font-family: ${TOOLBAR_FONT_FAMALY};
  text-decoration: none;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div
{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 25px;
  align-items: center;
  padding-left: 10px;
  height: inherit;
  width: ${TAB_WIDTH};
  max-width: ${TAB_WIDTH};
  background-color: ${vars.uic_pagtab_bg.asVar()};
  color: ${vars.uic_pagtab_col.asVar()};
  border-top-width: 1px;
  border-style: solid;
  border-color: ${DEFBRD_CLR};
  border-bottom: none;
  border-left: none;
  border-right: none;
}

div.${clss.FOCUS_CLASS},
.${clss.ROOT_CLASS} > div.${clss.FOCUS_CLASS}:hover
{
  color: ${vars.uic_pagtab_act_col.asVar()};
  border-color: ${FOCBRD_CLR};
  background-color: ${vars.uic_pagtab_act_bg.asVar()};
  transition: border-color 0.350s;
  z-index: 2;
}

.${clss.ROOT_CLASS} > div:hover
{
  background-color: ${vars.uic_pagtab_hov.asVar()};
}

.${clss.ROOT_CLASS} > div + div
{
  margin-left: 1px;
}

.${clss.ROOT_CLASS} > div > span
{
  height: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${clss.ROOT_CLASS} > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: initial;
  height: 17px;
  border-radius: 6px;
  margin: 0 4px;
}

.${clss.ROOT_CLASS} > div > div > div
{
  width: 10px;
  height: 10px;
  background-image: ${CLOSE_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${clss.ROOT_CLASS} > div.${clss.LOADING_CLASS},
.${clss.ROOT_CLASS} > div.${clss.LOADING_CLASS}:hover
{
  background-color: ${vars.uic_pagtab_loading.asVar()};
}

.${clss.ROOT_CLASS} > div > div:hover
{
  background-color: ${HOVX_CLR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    height: 50px;
    font-size: 28px;
  }

  .${clss.ROOT_CLASS} > div
  {
    grid-template-columns: 1fr 40px;
    min-width: 230px;
  }

  .${clss.ROOT_CLASS} > div > div > div
  {
    width: 20px;
    height: 20px;
  }
}
`;
