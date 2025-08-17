import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import arrowSvg from "./arrow.svg";

const mk = new ControlMaker("KikoDissView");

const ARROW = convertSvgToCssUrl(arrowSvg);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "IMAGE_CLASS",
  "SHOW_CLASS",
  "SHOW_BUTT_CLASS",
  "SHOW_BUTT1_CLASS",
  "SHOW_BUTT2_CLASS",
]);

const imgbg =  '#f3f3f3';

const vars = mk.newCSSVariableMap({
  viewbg: [ 'rgb(172 172 172 / 80%)' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" draggable="false">
  <span>
    <div><div></div></div>
    <img class="${clss.IMAGE_CLASS}" src="">
    <div><div></div></div>
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

.${clss.ROOT_CLASS} > span
{
  min-width: 660px;
}

.${clss.ROOT_CLASS}
{
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${vars.viewbg.asVar()};
  overflow: auto;
}

.${clss.SHOW_CLASS},
${clss.SHOW_BUTT_CLASS},
.${clss.SHOW_BUTT1_CLASS},
.${clss.SHOW_BUTT2_CLASS}
{
  display: block;
}


.${clss.ROOT_CLASS} > span
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 510px;
  padding: 30px;
  cursor: pointer;
}

.${clss.ROOT_CLASS} > span > img
{
  cursor: default;
}

.${clss.ROOT_CLASS} > span > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding-right: 9px;
  border-radius: 50%;
  flex-shrink: 0;
  visibility: hidden;
}

.${clss.SHOW_BUTT_CLASS} > span > div,
.${clss.SHOW_BUTT1_CLASS} > span > div:first-child,
.${clss.SHOW_BUTT2_CLASS} > span > div:last-child
{
  visibility: visible;
}

.${clss.ROOT_CLASS} > span > div:hover
{
  background-color: #7d7d7d5e;
}

.${clss.ROOT_CLASS} > span > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
}

.${clss.ROOT_CLASS} > span > div > div
{
  width: 70px;
  height: 70px;
  background-image: ${ARROW};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.${clss.ROOT_CLASS} > span > div + img + div
{
  padding-right: 0;
  padding-left: 9px;
}

.${clss.ROOT_CLASS} > span > div + img + div > div
{
  transform: scaleX(-1);
}

.${clss.ROOT_CLASS} > span > img
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid;
  border-color: ${imgbg};
  user-select: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > span > img
{
  max-width: calc(100% - 220px);
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
