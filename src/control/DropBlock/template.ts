import ControlMaker from "@/lib/ControlMaker.mjs";

import { UIC_BLUE_SQUARE_BACKGROUND } from "@/lib/WickedTheme.mjs";
import { UIC_BLUE_SQUARE_BORDER } from "@/lib/WickedTheme.mjs";

const mk = new ControlMaker("DropBlock");

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "NONE_CLASS",
  "INSET_CLASS",
  "LEFT_CLASS",
  "RIGHT_CLASS",
  "TOP_CLASS",
  "BOTTOM_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div class="${clss.PORT_CLASS}"></div>
  <span class="${clss.NONE_CLASS}">
    <div></div>
  </span>
</div>
`);

mk.newCSS('CSS', `

.${clss.ROOT_CLASS}
{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${clss.ROOT_CLASS} > span
{
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
}

.${clss.ROOT_CLASS} > span > div
{
  position: absolute;
  border: 1px solid ${UIC_BLUE_SQUARE_BORDER};
  border-radius: 3px;
  background-color:  ${UIC_BLUE_SQUARE_BACKGROUND};
  box-sizing: border-box;
}

span.${clss.NONE_CLASS}
{
  display: none;
}

.${clss.INSET_CLASS} > div
{
  height: 100%;
  width: 100%;
}

.${clss.LEFT_CLASS} > div
{
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
}

.${clss.RIGHT_CLASS} > div
{
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}

.${clss.TOP_CLASS} > div
{
  top: 0;
  height: 50%;
  width: 100%;
}

.${clss.BOTTOM_CLASS} > div
{
  bottom: 0;
  height: 50%;
  width: 100%;
}

.${clss.PORT_CLASS}
{
  width: 100%;
  height: 100%;
  overflow: auto;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
