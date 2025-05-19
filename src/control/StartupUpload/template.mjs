import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_SYSTEM } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_MATH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('StartupUpload', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "FDROP_CLASS",
  "DSHOW_CLASS",
  "DHIDE_CLASS",
]);

const UPLOAD1_IMG = await mk.loadSvgAsCssUrl('./up-file.svg');
const UPLOAD2_IMG = await mk.loadSvgAsCssUrl('./up-file-hover.svg');
const SEARCH_IMG = await mk.loadSvgAsCssUrl('./search.svg');

export const ROOT_HTML = `
<div class="${clss.ROOT_CLASS}" align="center">
  <h2>Drop your file</h2>
  <h2>Upload your file</h2>
  <div class="${clss.FDROP_CLASS} ${clss.DHIDE_CLASS}">
    <div>
      <div></div>
      <span>
        <label class="notranslate" translate="no">
          <span></span>Upload
        </label>
      </span>
    </div>
  </div>
</div>
`;

export const CSS = `
:root
{
  --uic-strupl-rootbg: ${UIC_START_BACKGROUND_COLOR};
  --uic-strupl-des: #afafaf;
  --uic-strupl-dhide-bg: #fafafa;
  --uic-strupl-fdrop-borImg: #ebebeb00;
  --uic-strupl-fdrop-borImg2: #dfdfdf;
  --uic-strupl-img: ${UPLOAD1_IMG};
  --uic-strupl-bor: transparent;
  --uic-strupl-fdbtn-col: #a6a6a6;
  --uic-strupl-fdbtn-bor: #c1c1c1;
  --uic-strupl-fdbtn-hov: #4545450f;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-strupl-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
  --uic-strupl-img: ${UPLOAD2_IMG};
  --uic-strupl-fdbtn-hov: #45454540;
  --uic-strupl-dhide-bg: transparent;
}

.${clss.FDROP_CLASS} > div > span > label > input,
.${clss.ROOT_CLASS} > h2 + h2
{
  display: none;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.FDROP_CLASS}
{
  align-self: center;
  width: 100%;
  max-width: 1065px;
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 570px;
  padding: 20px 20px;
  background-color: var(--uic-strupl-rootbg);
  user-select: none;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > h2 
{
  margin: 0px 0px 20px 0px;
  font-size: 2.81em;
  text-align: center;
  font-weight: 800;
  color: var(--uic-strupl-des);
  font-family: ${TOOLBAR_FONT_MATH};
}

.${clss.DHIDE_CLASS}
{
  background-color: var(--uic-strupl-dhide-bg);
}

.${clss.DSHOW_CLASS} > div > div
{
  width: 100%;
  transform: scale(1.1);
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}

.${clss.FDROP_CLASS} > div
{
  height: 100%;
  border-image-source: repeating-linear-gradient(45deg, var(--uic-strupl-fdrop-borImg) 0% 2%, var(--uic-strupl-fdrop-borImg2) 2% 4%,var(--uic-strupl-fdrop-borImg) 4% 6%,var(--uic-strupl-fdrop-borImg2) 6% 8%);
  border-width: 4px;
  border-image-slice: 4;
  border-style: solid;
  padding: 30px;
}

.${clss.FDROP_CLASS} > div > div
{
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(--uic-strupl-img);
  border: 15px solid var(--uic-strupl-bor);
}

.${clss.DSHOW_CLASS} > div > div + div
{
  opacity: 0.3;
}

.${clss.FDROP_CLASS} > div > span
{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: none;
  width: auto;
  height: auto;
  pointer-events: auto;
}

.${clss.FDROP_CLASS} > div > span > label
{
  display: flex;
  align-items: center;
  width: 270px;
  color: var(--uic-strupl-fdbtn-col);
  font-size: 45px;
  text-align: center;
  border: 3px solid var(--uic-strupl-fdbtn-bor);
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
  cursor: pointer;
  font-family: ${TOOLBAR_FONT_SYSTEM};
  flex-shrink: 0;
}

.${clss.FDROP_CLASS} > div > span > label:hover
{
  background-color: var(--uic-strupl-fdbtn-hov);
}

.${clss.FDROP_CLASS} > div > span > label > span
{
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: ${SEARCH_IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media (device-width <= 550px)
{
  .${clss.ROOT_CLASS}
  {
    display: flex;
    justify-content: center;
    min-height: 680px;
  }
  .${clss.FDROP_CLASS}
  {
    height: 100%;
    max-height: 1100px;
  }
  .${clss.FDROP_CLASS} > div
  {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .${clss.FDROP_CLASS} > div > div
  {
    height: calc(100% - 75px);
  }
  .${clss.FDROP_CLASS} > div > span
  {
    height: auto;
  }
}

@media (device-width <= 300px)
{
  .${clss.FDROP_CLASS}
  {
    width: auto;
    height: auto;
  }
  .${clss.FDROP_CLASS} > div
  {
    width: auto;
  }
  .${clss.FDROP_CLASS} > div > div
  {
    display: none;
  }
  .${clss.FDROP_CLASS} > div > div + div
  {
    display: block;
  }
  .uic-strupl-fdbtn > label
  {
    width: 470px;
    font-size: 80px;
  }
  .uic-strupl-fdbtn > label > span
  {
    width: 80px;
    height: 80px;
  }
  .${clss.ROOT_CLASS} > h2
  {
    display: none;
  }
  .${clss.ROOT_CLASS} > h2 + h2
  {
    display: block;
    font-size: 4.81em;
    font-weight: 800;
    color: #afafaf;
    margin: 0px 0px 20px 0px;
  }
}
`;
