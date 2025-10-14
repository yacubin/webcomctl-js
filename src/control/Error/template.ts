import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";

const mk = new ControlMaker("Error");

import errorSvg from "./error.svg";

const error = convertSvgToCssUrl(errorSvg);
const button = '#007e11';
const button_hover = '#00660e';
const button_color = 'white';

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div>
    <div> 
      <span>404</span>
    </div>
    <s><a href="/">Homepage</a></s>
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  font-family: Open Sans,Arial,sans-serif;
}

.${clss.ROOT_CLASS} > div 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${clss.ROOT_CLASS} > div > div
{
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  height: 400px;
  width: 400px;
  background-image: ${error};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: contain;
}

.${clss.ROOT_CLASS} > div > div > span
{
  display: flex;
  font-size: 170px;
  font-weight: 700;
  color: white;
  align-items: center;
  height: 360px;
}

.${clss.ROOT_CLASS} > div > s
{
  display: flex;
  justify-content: flex-start;
  font-size: 40px;
  align-items: flex-end;
  text-decoration: none;
}

.${clss.ROOT_CLASS} > div > s > a
{
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  width: 271px;
  height: 60px;
  line-height: 60px;
  background-color: ${button};
  text-align: center;
}

.${clss.ROOT_CLASS} > div > s a:hover
{
  background-color: ${button_hover};
}

.${clss.ROOT_CLASS}> div > s a:visited
{
  color: ${button_color};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
