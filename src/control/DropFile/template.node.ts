import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import upFileSvg from "./up-file.svg";

const mk = new ControlMaker("DropFile");

const BG_COLOR = '#1e1e1ecf';
const UPFILE_IMG = convertSvgToCssUrl(upFileSvg);

export const ROOT_CLASS: string = representClassNames("DropFile-ROOT_CLASS");
export const SHOW_CLASS: string = representClassNames("DropFile-SHOW_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}:not(.${SHOW_CLASS})
{
  display: none;
}

.${ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  min-height: 555px;
  background-color: ${BG_COLOR};
  z-index: 3;
}

.${ROOT_CLASS} > div
{
  height: 100%;
  width: 100%;
  max-width: 500px;
  min-width: 500px;
  background-image: ${UPFILE_IMG};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
`);
