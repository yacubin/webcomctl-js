import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import leftButSvg from "./left-but.svg";
import leftButHoverSvg from "./left-but-hover.svg";

const mk = new ControlMaker("DBCButton");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
   "PORT_CLASS",
]);

const left_but_img = convertSvgToCssUrl(leftButSvg);
const left_but_hov_img = convertSvgToCssUrl(leftButHoverSvg);

const button_bg = '#dddddd40';

const vars = mk.newCSSVariableMap({
});

mk.newHTML("ROOT_HTML", `

   <s class="${clss.ROOT_CLASS}>
    <div>
      <div class="dbc_bn_nav"></div>
    </div>
  </s>
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
  grid-area: header;
  display: flex;
  height: 50px;
  width: calc(100% - 20px);
  align-items: center;
  background: var(--left-grad);
  z-index: 2;
}

.${clss.ROOT_CLASS} > div > div
{
  width: 20px;
  height: 20px;
  background-image: ${left_but_img};
  background-size: contain;
  background-origin: padding-box;
  background-repeat: no-repeat;
  background-position: center;
}

.${clss.ROOT_CLASS} > div:hover
{
  background-color: ${button_bg};
}

.${clss.ROOT_CLASS} > div:hover > div
{
  background-image: ${left_but_hov_img};
  transition: background-image 0.5s;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}