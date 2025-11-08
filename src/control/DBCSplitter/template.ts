import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import splitterSvg from "./splitter.svg";
import splitterHoverSvg from "./splitter-hover.svg";

const mk = new ControlMaker("DBCSplitter");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const splitter = convertSvgToCssUrl(splitterSvg);
const splitterHover = convertSvgToCssUrl(splitterHoverSvg);

const sep_bg = 'linear-gradient(to bottom,transparent 0%, #bcbcbc30 35% 85%, transparent 100%)';
const sep_hov_bg = 'linear-gradient(to bottom,transparent 0%, #7d7d7d30 35% 85%, transparent 100%)';

const vars = mk.newCSSVariableMap({
});

mk.newHTML("ROOT_HTML", `
<div class="${clss.ROOT_CLASS}">
  <div></div>
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
  width: 10px;
  height: 100%;
  background: ${sep_bg};
  flex-shrink: 0;
  cursor: e-resize;
}

.${clss.ROOT_CLASS}:hover
{
  background: ${sep_hov_bg};
}

.${clss.ROOT_CLASS} > div
{
  width: 10px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  background-image: ${splitter};
}

.${clss.ROOT_CLASS}:hover > div
{
  background-image: ${splitterHover};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}