import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";

import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme.mjs";

import fileUploadSvg from "./file-upload.svg";

const mk = new ControlMaker("Loading");

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "SHOW_CLASS",
]);

const MAIN_IMG = convertSvgToCssUrl(fileUploadSvg);
const BGROUND_COLOR = '#1e1e1e91';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div></div>
</div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}
{
  display: none;
}

.${clss.SHOW_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 555px;
  z-index: 3;
  background-color: ${BGROUND_COLOR};
}

.${clss.SHOW_CLASS} > div
{
  width: 100%;
  height: 100%;
  max-width: 160px;
  min-width: 160px;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.SHOW_CLASS} > div
  {
    width: 320px;
    height: 320px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
