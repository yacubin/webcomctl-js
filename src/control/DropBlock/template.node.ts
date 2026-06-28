import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { UIC_BLUE_SQUARE_BACKGROUND } from "@/lib/WickedTheme";
import { UIC_BLUE_SQUARE_BORDER } from "@/lib/WickedTheme";

const mk = new ControlMaker("DropBlock");

export const ROOT_CLASS: string = representClassNames("DropBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("DropBlock-PORT_CLASS");
export const NONE_CLASS: string = representClassNames("DropBlock-NONE_CLASS");
export const INSET_CLASS: string = representClassNames("DropBlock-INSET_CLASS");
export const LEFT_CLASS: string = representClassNames("DropBlock-LEFT_CLASS");
export const RIGHT_CLASS: string = representClassNames("DropBlock-RIGHT_CLASS");
export const TOP_CLASS: string = representClassNames("DropBlock-TOP_CLASS");
export const BOTTOM_CLASS: string = representClassNames("DropBlock-BOTTOM_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
  <span class="${NONE_CLASS}">
    <div></div>
  </span>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${ROOT_CLASS} > span
{
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS} > span > div
{
  position: absolute;
  border: 1px solid ${UIC_BLUE_SQUARE_BORDER};
  border-radius: 3px;
  background-color:  ${UIC_BLUE_SQUARE_BACKGROUND};
  box-sizing: border-box;
}

span.${NONE_CLASS}
{
  display: none;
}

.${INSET_CLASS} > div
{
  height: 100%;
  width: 100%;
}

.${LEFT_CLASS} > div
{
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
}

.${RIGHT_CLASS} > div
{
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}

.${TOP_CLASS} > div
{
  top: 0;
  height: 50%;
  width: 100%;
}

.${BOTTOM_CLASS} > div
{
  bottom: 0;
  height: 50%;
  width: 100%;
}

.${PORT_CLASS}
{
  width: 100%;
  height: 100%;
  overflow: auto;
}
`);
