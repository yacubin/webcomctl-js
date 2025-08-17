import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";

import unloadingSvg from "./unloading.svg";

const mk = new ControlMaker("LoadingBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "UNLOAD_CLASS",
]);

const BG_IMG = convertSvgToCssUrl(unloadingSvg);
const BG_CLR = '#061b4366';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div class="${clss.PORT_CLASS}"></div>
  <s class="${clss.UNLOAD_CLASS}"><span></span></s>
</div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS},
.${clss.PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.${clss.UNLOAD_CLASS} > s
{
  text-decoration: none;
}

.${clss.ROOT_CLASS} > s:not(.${clss.UNLOAD_CLASS})
{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: ${BG_CLR};
}

.${clss.UNLOAD_CLASS}
{
  display: none;
}

.${clss.ROOT_CLASS} > s > span
{
  display: block;
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${BG_IMG};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
