import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";

import { DARKMODE_SELECTOR_VALUE } from '@/lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '@/lib/WickedTheme.mjs';

import closeSvg from "./X.svg";

const mk = new ControlMaker('TipInfoBlock', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "CLOSE_CLASS",
  "PULL_OUT_RIGHT",
  "PULL_OUT_LEFT",
  "PULL_OUT_ON",
  "LIST_CLASS",
  "SIZE_CLASS",
]);

const vars = mk.newCSSVariableMap({
  menuBg: [ '#f3f3f3', '#252525' ],
  menuCol: [ 'black', '#b8b4b4' ],
  pullOutBor: [ '#dedede', '#323232' ],
  menuTitleCol: [ '#272626', '#9b9b9b' ],
});

const CLOSE_IMG = convertSvgToCssUrl(closeSvg);
const CLOSE_HOV_COL = '#80808042';

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div>
      <div class="${clss.PORT_CLASS}"></div>
      <span>
        <div class="${clss.CLOSE_CLASS}"><div></div></div>
      </span>
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

.${clss.PORT_CLASS}
{
  width: 100%;
  height: calc(100% - 43px);
  
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  position: absolute;
  top: 0;
  display: none;
  height: 100%;
  color: #393939;
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  background-color: ${vars.menuBg.asVar()};
  color: ${vars.menuCol.asVar()};
  overflow: hidden;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 450px;
  height: 100%;
  padding: 0 25px 25px 25px;
}

.${clss.PULL_OUT_RIGHT}
{
  right: 0;
  display: block;
  width: 0;
  transition: width 0.2s;
  border-left: 0 solid;
}

.${clss.PULL_OUT_LEFT}
{
  left: 0;
  display: block;
  width: 0;
  transition: width 0.2s;
  border-right: 0 solid;
}

.${clss.PULL_OUT_ON}
{
  display: block;
  width: 450px;
  border-width: 1px;
  border-color: ${vars.pullOutBor.asVar()};
  transition: width 0.2s;
}

.${clss.ROOT_CLASS} > div > span
{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 13px;
  flex-shrink: 0;
}

.${clss.CLOSE_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.${clss.CLOSE_CLASS} > div
{
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-image: ${CLOSE_IMG};
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.${clss.CLOSE_CLASS}:hover > div
{
  background-color: ${CLOSE_HOV_COL};
}

.${clss.CLOSE_CLASS}:active > div
{
  width: 18px;
  height: 18px;
  background-size: 80%;
  transition: width 0.1s, height 0.1s, background-size 0.1s;
  background-size: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
