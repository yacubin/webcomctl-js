import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";

const mk = new ControlMaker("Notfound");

import notfoundSvg from "./notfound.svg";

const notfound = convertSvgToCssUrl(notfoundSvg);
const button = '#007e11';
const button_hover = '#00660e';
const button_color = 'white';

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "NOT_IMG",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
    <div class="${clss.NOT_IMG}">
      <span><a href="/">Homepage</a></span>
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

.${clss.NOT_IMG}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 365px;
  background-image: ${notfound};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 500px;
}
.${clss.ROOT_CLASS} div span
{
  display: flex;
  justify-content: flex-start;
  width: 520px;
  height: 250px;
  font-size: 40px;
  align-items: flex-end;
}
.${clss.ROOT_CLASS} div span a
{
  text-decoration: none;
  cursor: pointer;
  color: ${button_color};
  border-radius: 10px;
  width: 271px;
  height: 60px;
  line-height: 60px;
  background-color: ${button};
  text-align: center;
}
.${clss.ROOT_CLASS} div span a:hover
{
  background-color: ${button_hover};
}
.${clss.ROOT_CLASS} div span a:visited
{
  color: ${button_color};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
