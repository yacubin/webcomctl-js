import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageContent', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "CONTENT_CLASS",
  "BUTT_LEFT_CLASS",
  "BUTT_RIGHT_CLASS",
  "IMAGE_POSITION",
  "IMAGE_NUMBERS",
  "LEFT_CLICK",
  "RIGHT_CLICK",
]);

const vars = mk.newCSSVariableMap({
  img: [
    await mk.loadSvgAsCssUrl('./play.svg'),
  ],
  bg: [
    UIC_CONTENT_BACKGROUND_COLOR,
    UIC_CONTENT_BACKGROUND_COLOR_DARK,
  ],
  buthov:  [ '#bcbcbc', '#3c3b3b' ],
  but:     [ '#f1f1f1', '#252525' ],
  quantum: [ '#272727', '#b8b4b4' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" draggable="false">
  <i>
    <ul>
      <li>
        <div>Height</div>
        <div>854 px</div>
      </li>
      <li>
        <div>Chroma bpp</div>
        <div>8</div>
      </li>
      <li>
        <div>Alpha channel</div>
        <div>No</div>
      </li>
      <li>
        <div>Premul alpha</div>
        <div>No</div>
      </li>
      <li>
        <div>Primary</div>
        <div>Yes</div>
      </li>
    </ul>
  </i>
  <div>
    <div class="${clss.LEFT_CLICK}">
      <div></div>
    </div>
  </div>
    <span><img class="${clss.CONTENT_CLASS}"/></span>
  <div>
    <div class="${clss.RIGHT_CLICK}">
      <div></div>
    </div>
  </div>
  <s>
    <div>
      <div class="${clss.IMAGE_POSITION}"></div>/<div class="${clss.IMAGE_NUMBERS}"></div>
    </div>
  </s>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 40px 40px 40px 0px;
  background-color: ${vars.bg.asVar()};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > i
{
  display: block;
  width: 200px;
  height: 100%;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > i > ul
{
  display: block;
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
}

.${clss.ROOT_CLASS} > i > ul > li
{
  display: flex
  width: inherit;
  list-style-type: none;
}

.${clss.ROOT_CLASS} > span
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
  width: calc(100% - 280px);
  padding: 0 10px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} img[src]
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid;
  border-color: #f3f3f3;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  justify-content: flex-start;
  height: 40px;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 0;
  transition: width 0.2s;
  border-radius: 50%;
  flex-shrink: 0;
}

.${clss.BUTT_LEFT_CLASS} > i + div > div,
.${clss.BUTT_RIGHT_CLASS} > i + div + span + div > div
{
  width: 40px;
  transition: width 0.3s;
  pointer-events: auto;
}

.${clss.BUTT_LEFT_CLASS} > div > div,
.${clss.BUTT_RIGHT_CLASS} > div > div
{
  background-color:  ${vars.but.asVar()};
}

.${clss.ROOT_CLASS} > div > div:hover
{
  background-color: ${vars.buthov.asVar()};
}

.${clss.ROOT_CLASS} > div > div > div
{
  height: 20px;
  width: 20px;
  background-image: ${vars.img.asVar()};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > i + div > div
{
  transform: scaleX(-1);
  margin-right: 2px;
}

.${clss.ROOT_CLASS} > div + span + div > div > div
{
  margin-left: 2px;
}

.${clss.ROOT_CLASS} > div + span + div
{
  justify-content: flex-end;
}

.${clss.ROOT_CLASS} > s
{
  display: none;
  justify-content: flex-end;
  height: 0px;
  width: 0px;
  text-decoration: none;
}

.${clss.BUTT_LEFT_CLASS} > s,
.${clss.BUTT_RIGHT_CLASS} > s
{
  display: flex;
}

.${clss.ROOT_CLASS} > s > div
{
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  height: 0;
  color: ${vars.quantum.asVar()};
}

.${clss.BUTT_LEFT_CLASS} > s > div,
.${clss.BUTT_RIGHT_CLASS} > s > div
{
  height: 20px;
  transition: height 0.3s;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
