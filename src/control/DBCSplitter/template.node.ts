import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import splitterSvg from "./splitter.svg";
import splitterHoverSvg from "./splitter-hover.svg";

const mk = new ControlMaker("DBCSplitter");

export const ROOT_CLASS: string = representClassNames("DBCSplitter-ROOT_CLASS");

const splitter = convertSvgToCssUrl(splitterSvg);
const splitterHover = convertSvgToCssUrl(splitterHoverSvg);

const sep_bg = 'linear-gradient(to bottom,transparent 0%, #bcbcbc30 35% 85%, transparent 100%)';
const sep_hov_bg = 'linear-gradient(to bottom,transparent 0%, #7d7d7d30 35% 85%, transparent 100%)';

const vars = mk.newCSSVariableMap({
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS}
{
  width: 10px;
  height: 100%;
  background: ${sep_bg};
  flex-shrink: 0;
  cursor: e-resize;
}

.${ROOT_CLASS}:hover
{
  background: ${sep_hov_bg};
}

.${ROOT_CLASS} > div
{
  width: 10px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  background-image: ${splitter};
}

.${ROOT_CLASS}:hover > div
{
  background-image: ${splitterHover};
}
`);
