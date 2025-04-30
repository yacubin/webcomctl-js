import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('PagePanel', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "DOWNLOAD_CLASS",
  "PROPERTIES_CLASS",
  "PROPERTIES2_CLASS",
  "PROPERTIES_SHOW_CLASS",
  "CODETYPE_CLASS",
  "CTSHOW_CLASS",
  "PERENTMENU_CLASS",
  "MENUNAME_CLASS",
  "MENUSTYLE1_CLASS",
  "MENUSTYLE2_CLASS",
  "MENUSTYLE3_CLASS",
  "MENUSTYLE4_CLASS",
  "MENULIST_CLASS",
  "MENUTEXT_CLASS",
  "PSNTLIST_CLASS",
  "PSNTTEXT_CLASS",
  "PSNTACTV_CLASS",
  "MENUARROW_CLASS",
]);

const DOWNLOAD_IMG = await mk.loadSvgAsCssUrl('./download.svg');
const PROPERTIES_IMG = await mk.loadSvgAsCssUrl('./properties.svg');
const PROP_IMG = await mk.loadSvgAsCssUrl('./Prop.svg');

const BS1_VAR = 'rgba(0,0,0,0.13)';
const BS2_VAR = 'rgba(0,0,0,0.11)';
const CTSHOWBS_VAR = 'rgb(0 0 0 / 31%)';
const PLIST_BTN_BOR_VAR = 'transparent';
const PLIST_NOSEL_VAR = 'transparent';
const PLIST_SEL_VAR = '#fd8c73';
const MLIST_MARGIN = '3px';
const PLIST_MARGIN = MLIST_MARGIN;
const MSTYLE23_BOR = '#a1a1a145';

const vars = mk.newCSSVariableMap({
  col: [ '#f3f3f3', '#252525' ],
  hov: [ '#e0e3e7', '#444444' ],
  borCol: [ 'rgb(197 195 195)', '#5f5f5f4a' ],
  ctypeCol: [ '#696969', '#a7a7a7' ],
  plistAct: [ 'black', '#c8c8c8' ],
  ctypeCol: [ '#696969', '#a7a7a7' ],
  plistHov: [ 'rgb(206 206 206)', 'rgb(116 115 115)' ],
});

mk.newHTML('ROOT_HTML', `
<span class="${clss.ROOT_CLASS}" draggable="false">
  <div>
    <div class="${clss.PERENTMENU_CLASS}"></div>
    <s></s>
    <div class="${clss.PSNTLIST_CLASS}"></div>
  </div>
  <span>
    <a class="${clss.DOWNLOAD_CLASS}"></a>
    <div class="${clss.PROPERTIES_CLASS}"></div>
    <div class="${clss.PROPERTIES2_CLASS}"></div>
  </span>
</span>
`);

mk.newHTML('MENU_LIST_HTML', `
<div class="${clss.CODETYPE_CLASS}">
  <div>
    <div class="${clss.MENUNAME_CLASS}"></div>
    <span class="${clss.MENUARROW_CLASS}"></span>
  </div>
  <span>
    <ul class="${clss.MENULIST_CLASS}"></ul>
  </span>
</div>
`);

mk.newHTML('MENU_ITEM_HTML', `
<li><span class="${clss.MENUTEXT_CLASS}"></span></li>
`);

mk.newHTML('PSNT_ITEM_HTML', `
<div><span class="${clss.PSNTTEXT_CLASS}"></span></div>
`);

mk.newHTML('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.PERENTMENU_CLASS}
{
  display: flex;
  height: 100%;
}

.${clss.PERENTMENU_CLASS} > div:first-child
{
  margin-left: ${MLIST_MARGIN};
}

.${clss.PERENTMENU_CLASS} > div:last-child
{
  margin-right: ${MLIST_MARGIN};
}

.${clss.ROOT_CLASS}
{
  display: flex;
  width: 100%;
  height: 35px;
  padding-right: 5px;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 16px;
  background-color: ${vars.col.asVar()};
  box-shadow: 0px 1.6px 3.6px ${BS1_VAR}, 0px 0px 2.9px ${BS2_VAR};
  flex-shrink: 0;
  user-select: none;
  font-family: ${TOOLBAR_FONT_FAMALY};
  z-index: 1;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${clss.DOWNLOAD_CLASS}
{
  text-decoration: none;
}

.${clss.ROOT_CLASS} s
{
  display: block;
  text-decoration: none;
}

.${clss.ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  align-items: center;
  width: inherit;
  height: 100%;
  color: ${vars.ctypeCol.asVar()};
}

.${clss.ROOT_CLASS} > span
{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: inherit;
}

.${clss.CODETYPE_CLASS}
{
  height: 100%;
  min-width: 55px;
  /*margin-right: 3px;*/
  flex-shrink: 0;
  box-sizing: border-box;
}

.${clss.CODETYPE_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span > div,
.${clss.PERENTMENU_CLASS}:empty + s,
.${clss.CODETYPE_CLASS} .${clss.MENULIST_CLASS},
.${clss.CODETYPE_CLASS}:has(.${clss.MENULIST_CLASS}:empty),
.${clss.CODETYPE_CLASS}:has(.${clss.MENULIST_CLASS}:empty) + s,
.${clss.ROOT_CLASS} > div > s:has(+ .${clss.PSNTLIST_CLASS}:empty)
{
  display: none;
}

.${clss.ROOT_CLASS} > span > .${clss.PROPERTIES_SHOW_CLASS},
.${clss.PROPERTIES2_CLASS}.${clss.PROPERTIES_SHOW_CLASS},
.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE2_CLASS}) .${clss.MENUARROW_CLASS},
.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE3_CLASS}) .${clss.MENUARROW_CLASS},
.${clss.CODETYPE_CLASS}:has(.${clss.MENULIST_CLASS}) .${clss.MENUARROW_CLASS}::before,
.${clss.CODETYPE_CLASS}:has(ul.${clss.MENUSTYLE4_CLASS}:empty)
{
  display: block;
}

.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE2_CLASS}) > div,
.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE3_CLASS}) > div
{
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}

.${clss.MENUARROW_CLASS}
{
  display: none;
  width: 20px;
  height: 100%;
}

.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE4_CLASS}:empty) > div > div
{
  width: auto;
  min-width: 40px;
  padding: 0 5px;
}

.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE2_CLASS}) > div > div,
.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE3_CLASS}) > div > div
{
  padding-left: 15px;
}

.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE2_CLASS}),
.${clss.CODETYPE_CLASS}:has(.${clss.MENUSTYLE3_CLASS})
{
  position: relative;
}

.${clss.MENUARROW_CLASS}::before
{
  content: ' ';
  position: relative;
  top: 14px;
  left: 7px;
  transform: rotate(315deg);
  display: none;
  width: 5px;
  height: 5px;
  border-left: 1px solid ${vars.ctypeCol.asVar()};
  border-bottom: 1px solid ${vars.ctypeCol.asVar()};
}

.${clss.CTSHOW_CLASS} .${clss.MENUARROW_CLASS}::before
{
  transform: rotate(134deg);
}

.${clss.CODETYPE_CLASS} > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

.${clss.ROOT_CLASS} > div > s
{
  border-left: 1px solid ${vars.borCol.asVar()};
  height: 50%;
}

.${clss.CODETYPE_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: inherit;
  padding-left: 5px;
}

.${clss.CTSHOW_CLASS} > span
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 0px;
  height: 0px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE1_CLASS}
{
  display: block;
  width: 180px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE1_CLASS} > li
{
  padding: 5px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE1_CLASS} > li > span
{
  padding: 5px 10px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE2_CLASS}
{
  display: block;
  width: auto;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE3_CLASS}
{
  display: grid;
  grid-template-columns: 60px 60px;
  width: auto;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE2_CLASS} > li,
.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE3_CLASS} > li
{
  padding: 5px 5px 0 5px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE2_CLASS} > li > span,
.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE3_CLASS} > li > span
{
  padding: 5px 0px 5px 8px;
}

.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE2_CLASS} > li > span,
.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE3_CLASS} > li > span
{
  width: 50px;
  font-size: 12px;
}

.${clss.MENUSTYLE3_CLASS} > li:nth-child(2n)
{
  border-left: 1px solid ${MSTYLE23_BOR};
}

.${clss.MENUSTYLE2_CLASS} > li > span,
.${clss.MENUSTYLE3_CLASS} > li > span
{
  border-bottom: 1px solid ${MSTYLE23_BOR};
}

.${clss.MENUSTYLE2_CLASS} > li:nth-last-child(1) > span,
.${clss.MENUSTYLE3_CLASS} > li:nth-last-child(1) > span,
.${clss.MENUSTYLE3_CLASS} > li:nth-last-child(2) > span
{
  border-bottom: none;
}

.${clss.CTSHOW_CLASS} .${clss.MENULIST_CLASS}
{
  padding: 5px 0px;
  border-end-end-radius: 3px;
  border-end-start-radius: 3px;
  background-color: ${vars.col.asVar()};
  box-shadow: inset 2px 4px 4px -5px ${CTSHOWBS_VAR};
  z-index: 1;
}

.${clss.CTSHOW_CLASS} .${clss.MENULIST_CLASS} > li
{
  width: initial;
  white-space: nowrap;
}

.${clss.CTSHOW_CLASS} .${clss.MENULIST_CLASS} > li > span
{
  display: block;
  height: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
}

.${clss.CTSHOW_CLASS} > div,
.${clss.CODETYPE_CLASS} > div:hover,
.${clss.CTSHOW_CLASS} .${clss.MENUSTYLE1_CLASS} > li:hover > span,
.${clss.MENUSTYLE2_CLASS} > li:hover,
.${clss.MENUSTYLE3_CLASS} > li:hover,
.${clss.PSNTLIST_CLASS} > div:hover
{
  background-color: ${vars.hov.asVar()};
  transition: background-color 0.250s;
}

.${clss.ROOT_CLASS} > span > *
{
  width: 35px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.${clss.PROPERTIES2_CLASS}
{
  background-size: 25px;
  background-image: ${PROP_IMG};
}

.${clss.PROPERTIES_CLASS}
{
  background-size: 25px;
  background-image: ${PROPERTIES_IMG};
}

.${clss.DOWNLOAD_CLASS}
{
  display: block;
  background-size: 23px;
  background-image: ${DOWNLOAD_IMG};
  background-color: ${vars.col.asVar()};
}

.${clss.ROOT_CLASS} > span > *:hover
{
  background-color: ${vars.hov.asVar()};
  border-color: ${vars.col.asVar()};
}

.${clss.PSNTLIST_CLASS}
{
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3px;
}

.${clss.PSNTLIST_CLASS} > div
{
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 1px;
  flex-shrink: 0;
}

.${clss.PSNTLIST_CLASS} > div > span
{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  margin: 0 ${PLIST_MARGIN};
  border: 1px solid ${PLIST_BTN_BOR_VAR};
  border-bottom: 3px solid ${PLIST_BTN_BOR_VAR};
  flex-shrink: 0;
}

.${clss.PSNTLIST_CLASS} > .${clss.PSNTACTV_CLASS} > span
{
  color: ${vars.plistAct.asVar()};
}

.${clss.PSNTLIST_CLASS} > div > span::after
{
  content: " ";
  position: absolute;
  bottom: 0;
  display: block;
  width: 15px;
  border-bottom: 2px solid ${PLIST_NOSEL_VAR};
  border-radius: 5px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.${clss.PSNTLIST_CLASS} > div:hover > span::after
{
  width: 15px;
  border-bottom: 2px solid ${vars.plistHov.asVar()};
}

.${clss.PSNTLIST_CLASS} > .${clss.PSNTACTV_CLASS}:hover > span::after,
.${clss.PSNTLIST_CLASS} > .${clss.PSNTACTV_CLASS} > span::after
{
  width: 35px;
  border-bottom: 2px solid ${PLIST_SEL_VAR};
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    align-items: center;
    height: 50px;
    font-size: 28px;
  }

  .${clss.CODETYPE_CLASS}
  {
    margin-right: 15px;
  }

  .${clss.PSNTLIST_CLASS}
  {
    margin-left: 15px;
  }

  .${clss.PSNTLIST_CLASS} > div
  {
    margin: 0px 10px;
  }

  .${clss.CODETYPE_CLASS} > div > div
  {
    width: 80px;
  }

  .${clss.CTSHOW_CLASS} > span > ul
  {
    width: 360px;
    padding: 10px 0px;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;
  }

  .${clss.CTSHOW_CLASS} .${clss.MENULIST_CLASS} > li
  {
    padding: 10px;
  }

  .${clss.CTSHOW_CLASS} .${clss.MENULIST_CLASS} > li > span
  {
    padding: 10px 10px;
  }

  .${clss.PSNTLIST_CLASS} > div > span
  {
    width: 75px;
  }

  .${clss.DOWNLOAD_CLASS}
  {
    width: 50px;
    background-size: 40px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
