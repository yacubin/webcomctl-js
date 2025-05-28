import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('WALXDataDev', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "pic_papka",
  "pic",
  "pic_file",
]);

const PAPKA = await mk.loadSvgAsCssUrl('./papka.svg');
const FILE = await mk.loadSvgAsCssUrl('./file.svg');

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';
const walx_data_dev_bor = '#afa9a9';
const walx_data_dev_pic_nth2_hov = '#e7e7e7';
const walx_data_dev_pic_bor = '#afa9a9';
const walx_pic_link_vis = 'black';
const walx_pic_link_col = 'black';

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" align="center">
    <ul>
      <li class="${clss.pic}">
        <div>Nema</div>
        <div>Type</div>
        <div>Size</div>
        <div>Date</div>
      </li>
      <li class="${clss.pic_papka}">
        <span></span>
        <div><a href=".html">papka</a></div>
        <div>folder</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_file}">
        <span></span>
        <div><a href=".html">file</a></div>
        <div>file</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_papka}">
        <span></span>
        <div><a href=".html">papka</a></div>
        <div>folder</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_file}">
        <span></span>
        <div><a href=".html">file</a></div>
        <div>file</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
    </ul>
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

.${clss.ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-track,
.${clss.ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${clss.ROOT_CLASS}
{
  height: calc(100% - 240px);
  padding: 10px;
}

.${clss.ROOT_CLASS} > ul
{
   padding: 0px;
   margin: 20px 10px 10px 10px;
   text-align: left;
   border: 1px solid ${walx_data_dev_bor};
   width: 65%;
   min-width: 470px;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   border-bottom-right-radius: 0px;
   border-bottom-left-radius: 0px;
   overflow: hidden;
}

.${clss.ROOT_CLASS} > ul li[class*=pic]
{
  list-style-type: none;
  height: 35px;
}

.${clss.ROOT_CLASS} > ul li[class*=pic]:nth-child(1n+2):hover
{
  background-color: ${walx_data_dev_pic_nth2_hov};
}

.${clss.ROOT_CLASS} > ul li[class*=pic]:last-child
{
  border-bottom:none;
}

.${clss.ROOT_CLASS} li[class*=pic]
{
  border-bottom: 1px solid ${walx_data_dev_pic_bor};
  display: flex;
  align-items: center;
}

.${clss.pic} div:first-child
{
  margin-left: 40px;
  width: 30%;
}

body.walx_data_dev div ul li[class*=pic] span
{
  margin: 0px 5px;
}

li.${clss.pic_papka} span
{
  background-image: ${PAPKA};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  height: 22px;
  min-width: 18px;
}

.${clss.ROOT_CLASS} li[class*=pic] div
{
  margin: 0px;
  height: auto;
  width: 33%;
  min-width: 100px;
}

.${clss.ROOT_CLASS} li[class*=pic] div a
{
  text-decoration: none;
  color: ${walx_pic_link_col};

}

.${clss.ROOT_CLASS} li[class*=pic] div a:visited
{
  color: ${walx_pic_link_vis};
}

.${clss.ROOT_CLASS} li[class*=pic] div a:hover
{
  text-decoration: underline;
}

.${clss.ROOT_CLASS} li[class*=pic] div:last-child
{
  min-width: 100px;
  width: auto;
}

.${clss.ROOT_CLASS} li[class*=pic] div:first-letter
{
  margin-left: 5px;
}

li.${clss.pic_file} span
{
  background-image: ${FILE};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  height: 22px;
  min-width: 18px;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}