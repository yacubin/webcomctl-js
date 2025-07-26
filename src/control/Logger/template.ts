import ControlMaker from '@/lib/ControlMaker.mjs';
import { TOOLBAR_FONT_SANS } from '@/lib/WickedTheme.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '@/lib/WickedTheme.mjs';

const mk = new ControlMaker('Logger', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "CLOSE_CLASS",
  "TITLE_CLASS",
  "TEXT_CLASS",
  "ERROR_CLASS",
  "WARNING_CLASS",
  "SUCCESS_CLASS",
  "INFO_CLASS",
]);

const ANIME1 = mk.newAnimationName("Anime1");
const ANIME2 = mk.newAnimationName("Anime2");

const ERROR_IMG = await mk.loadSvgAsCssUrl('./level-error.svg');
const WARNING_IMG = await mk.loadSvgAsCssUrl('./level-warning.svg');
const SUCCESS_IMG = await mk.loadSvgAsCssUrl('./level-success.svg');
const INFO_IMG = await mk.loadSvgAsCssUrl('./level-info.svg');
const CLOSE_IMG = await mk.loadSvgAsCssUrl('./close.svg');

const ERROR_HOVER_COLOR = '#df8181d4';
const WARNING_HOVER_COLOR = '#dfb881d4';
const SUCCESS_HOVER_COLOR = '#81df86d4';
const INFO_HOVER_COLOR = '#81c3dfd4';

const BORDER_MAIN_COLOR = '#00000045';
const BORDER_ANIME_COLOR = BORDER_MAIN_COLOR;

const ERROR_FILL_COLOR = '#efbdbde6';
const ERROR_MAIN_COLOR = '#620000';
const WARNING_FILL_COLOR = '#efe7a2e8';
const WARN_MAIN_COLOR = '#623f00';
const SUCCESS_FILL_COLOR = '#a7ffa7e6';
const SUCCESS_MAIN_COLOR = '#005200';
const INFO_FILL_COLOR = '#c8fffae6';
const INFO_MAIN_COLOR = '#001e62';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}"></div>
`);

mk.newHTML('ITEM_HTML', `
<div>
  <div></div>
  <span><h3 class="${clss.TITLE_CLASS}"></h3><span class="${clss.TEXT_CLASS}"></span></span>
  <s><span class="${clss.CLOSE_CLASS}"></span></s>
</div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}
{
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
  font-family: ${TOOLBAR_FONT_SANS};
  overflow: hidden;
  z-index: 2;
}

.${clss.ROOT_CLASS} > div
{
  animation-name: ${ANIME1};
  animation-duration: 10s;
  animation-iteration-count: 1;
  display: flex;
  height: 0px;
  width: 0px;
  margin-bottom: 5px;
  font-size: 15px;
  border-radius: 10px;
  border: 0px solid ${BORDER_MAIN_COLOR};
  text-align: center;
  cursor: default;
  overflow: hidden;
  box-sizing: content-box;
}

.${clss.ROOT_CLASS} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 400;
}

.${clss.ROOT_CLASS} .${clss.ERROR_CLASS}
{
  background-color: ${ERROR_FILL_COLOR};
  color: ${ERROR_MAIN_COLOR};
}

.${clss.ROOT_CLASS} .${clss.WARNING_CLASS}
{
  background-color: ${WARNING_FILL_COLOR};
  color: ${WARN_MAIN_COLOR};
}

.${clss.ROOT_CLASS} .${clss.INFO_CLASS}
{
  background-color:${INFO_FILL_COLOR};
  color: ${INFO_MAIN_COLOR};
}

.${clss.ROOT_CLASS} .${clss.SUCCESS_CLASS}
{
  background-color: ${SUCCESS_FILL_COLOR};
  color: ${SUCCESS_MAIN_COLOR};
}

.${clss.ROOT_CLASS} > div > div
{
  width: 50px;
  height: 70px;
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.${clss.ERROR_CLASS} > div
{
  background-image: ${ERROR_IMG};
}

.${clss.INFO_CLASS} > div
{
  background-image: ${INFO_IMG};
}

.${clss.WARNING_CLASS} > div
{
  background-image: ${WARNING_IMG};
}

.${clss.SUCCESS_CLASS} > div
{
  background-image: ${SUCCESS_IMG};
}

.${clss.ROOT_CLASS} > div > span
{
  margin-top: 3px;
  width: 200px;
  font-size: 18px;
  line-height: 17px;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > div >  span > span
{
  display: block;
  font-size: 14px;
}

.${clss.ROOT_CLASS} > div > s
{
  display: flex;
  justify-content: center;
  width: 30px;
  height: 15px;
  padding-top: 3px;
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > div > s > span
{
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-size: 15px;
  background-image: ${CLOSE_IMG};
  background-repeat: no-repeat;
  background-position: center;
}

.${clss.ROOT_CLASS} .${clss.ERROR_CLASS} > s > span:hover
{
  background-color: ${ERROR_HOVER_COLOR};
}

.${clss.ROOT_CLASS} .${clss.SUCCESS_CLASS} > s > span:hover
{
  background-color: ${SUCCESS_HOVER_COLOR};
}

.${clss.ROOT_CLASS} .${clss.WARNING_CLASS} > s > span:hover
{
  background-color: ${WARNING_HOVER_COLOR};
}

.${clss.ROOT_CLASS} .${clss.INFO_CLASS} > s > span:hover
{
  background-color: ${INFO_HOVER_COLOR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  div.${clss.ROOT_CLASS} > div > div
  {
    min-width: 100px;
    height: 140px;
    background-size: 50px;
  }
  div.${clss.ROOT_CLASS} > div
  {
    animation-name: ${ANIME2};
    border-radius: 20px;
  }
  div.${clss.ROOT_CLASS} h3
  {
    font-size: 40px;
  }
  div.${clss.ROOT_CLASS} > div > span 
  {
    min-width: 380px;
    font-size: 40px;
    line-height: 34px;
  }
  div.${clss.ROOT_CLASS} div > span > span
  {
    font-size: 30px;
  }
  div.${clss.ROOT_CLASS} div > s
  {
    width: 60px;
    height: 100%;
    padding-top: 10px;
  }
  div.${clss.ROOT_CLASS} div > s > span
  {
    width: 100%;
    height: 35%;
    background-size: contain;
  }
}

@keyframes ${ANIME1}
{
  0%
  {
    border: 1px solid ${BORDER_ANIME_COLOR};
    height: 0px;
    width: 0px;
    margin-bottom: 5px;
  }
  3%
  {
    border: 1px solid ${BORDER_ANIME_COLOR};
    height: 70px;
    width: 0px;
    margin-bottom: 5px;
  }
  5%
  {
    border: 1px solid ${BORDER_ANIME_COLOR};
    height: 70px;
    width: 280px;
  }
  95%
  {
    border: 1px solid ${BORDER_ANIME_COLOR};
    height: 70px;
    width: 280px;
    margin-bottom: 5px;
  }
  100% 
  {
    border: 0px solid ${BORDER_ANIME_COLOR};
    height: 70px;
    width: 0px;
    margin-bottom: 5px;
  }
}

@keyframes ${ANIME2}
{
  0%
  {
    border: 2px solid ${BORDER_ANIME_COLOR};
    height: 0px;
    width: 0px;
    margin-bottom: 5px;
  }
  3%
  {
    border: 2px solid ${BORDER_ANIME_COLOR};
    height: 140px;
    width: 0px;
    margin-bottom: 5px;
  }
  5%
  {
    border: 2px solid ${BORDER_ANIME_COLOR};
    height: 140px;
    width: 560px;
  }
  95%
  {
    border: 2px solid ${BORDER_ANIME_COLOR};
    height: 140px;
    width: 560px;
    margin-bottom: 5px;
  }
  100% 
  {
    border: 0px solid ${BORDER_ANIME_COLOR};
    height: 140px;
    width: 0px;
    margin-bottom: 5px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
