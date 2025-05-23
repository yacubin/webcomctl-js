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

const TABE_TEXT = '#afafaf';
const uic_strupl_des ='#afafaf';
const uic_strupl_fdrop_borImg = '#ebebeb00';
const uic_strupl_fdrop_borImg2 = '#dfdfdf';
const uic_strupl_bor = 'transparent';
const uic_strupl_fdbtn_col = '#a6a6a6';
const uic_strupl_fdbtn_bor = '#c1c1c1';

const vars = mk.newCSSVariableMap({
  uic_strupl_fdbtn_hov: ['#45454540', '#4545450f',],
  uic_strupl_dhide_bg: ['#fafafa', 'transparent'],
  uic_strupl_rootbg: [ UIC_START_BACKGROUND_COLOR, UIC_START_BACKGROUND_COLOR_DARK ],
  uic_strupl_img: [ UPLOAD1_IMG, UPLOAD2_IMG ],
});

mk.newHTML('ROOT_HTML', `
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
  background-color: ${vars.uic_strupl_rootbg.asVar()};
  user-select: none;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > h2 
{
  margin: 0px 0px 20px 0px;
  font-size: 2.81em;
  text-align: center;
  font-weight: 800;
  color: ${uic_strupl_des};
  font-family: ${TOOLBAR_FONT_MATH};
}

.${clss.DHIDE_CLASS}
{
  background-color: ${vars.uic_strupl_dhide_bg.asVar()};
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
  border-image-source: repeating-linear-gradient(45deg, ${uic_strupl_fdrop_borImg} 0% 2%, ${uic_strupl_fdrop_borImg2} 2% 4%, ${uic_strupl_fdrop_borImg} 4% 6%, ${uic_strupl_fdrop_borImg2} 6% 8%);
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
  background-image: ${vars.uic_strupl_img.asVar()};
  border: 15px solid ${uic_strupl_bor};
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
  color: ${uic_strupl_fdbtn_col};
  font-size: 45px;
  text-align: center;
  border: 3px solid ${uic_strupl_fdbtn_bor};
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
  cursor: pointer;
  font-family: ${TOOLBAR_FONT_SYSTEM};
  flex-shrink: 0;
}

.${clss.FDROP_CLASS} > div > span > label:hover
{
  background-color: ${vars.uic_strupl_fdbtn_hov.asVar()};
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
    color: ${TABE_TEXT};
    margin: 0px 0px 20px 0px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
