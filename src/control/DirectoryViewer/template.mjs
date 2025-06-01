import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DirectoryViewer', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "pic_folder",
  "pic",
  "pic_file",
]);

const FOLDER = await mk.loadSvgAsCssUrl('./folder.svg');
const FOLDER2 = await mk.loadSvgAsCssUrl('./folder.svg');
const FILE = await mk.loadSvgAsCssUrl('./file.svg');
const FILE2 = await mk.loadSvgAsCssUrl('./file2.svg');

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const vars = mk.newCSSVariableMap({
  walx_file_img: [FILE , FILE2],
  walx_folder_img: [FOLDER , FOLDER2],
  walx_data_dev_col: ['#1f2328', '#9198a1'],
  walx_data_dev_pic_bor: ['#d8d7d7', '#3d444d'],
  walx_data_dev_pic_nth2_hov: ['#f2f2f2', '#282828'],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" align="center">
    <ul>
      <li class="${clss.pic}">
        <div>Name</div>
        <div>Type</div>
        <div>Size</div>
        <div>Date</div>
      </li>
      <li class="${clss.pic_folder}">
        <div>
          <span></span>
          <a href=".html">folder</a>
        </div>
        <div>folder</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_file}">
        <div>
          <span></span>
          <a href=".html">file</a>
        </div>
        <div>file</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_folder}">
        <div>
          <span></span>
          <a href=".html">folder</a>
        </div>
        <div>folder</div>
        <div>1500 m/bytes</div>
        <div>19.02.2023</div>
      </li>
      <li class="${clss.pic_file}">
        <div>
          <span></span>
          <a href=".html">file</a>
        </div>
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
  padding: 10px;
  color: ${vars.walx_data_dev_col.asVar()};
  font-family:${TOOLBAR_FONT_SANS};
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > ul
{
  width: 65%;
  margin: 0px;
  padding: 0;
  min-width: 470px;
  border-radius: 3px;
  border: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
  text-align: left;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > ul > li:first-child
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${clss.ROOT_CLASS} > ul > li:nth-child(1n+2)
{
  border-top: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
}

.${clss.ROOT_CLASS} > ul li.${clss.pic},
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder},
.${clss.ROOT_CLASS} > ul li.${clss.pic_file}
{
  list-style-type: none;
  height: 35px;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic}:nth-child(1n+2):hover,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder}:nth-child(1n+2):hover,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file}:nth-child(1n+2):hover
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${clss.ROOT_CLASS} > ul li.${clss.pic}:last-child,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder}:last-child,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file}:last-child
{
  border-bottom:none;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic},
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder},
.${clss.ROOT_CLASS} > ul li.${clss.pic_file}
{
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.${clss.pic} div:first-child
{
  margin-left: 40px;
  width: 30%;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic} span,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} span,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} span
{
  margin: 0px 5px 0 0;
}

li.${clss.pic_folder} span
{
  background-image: ${vars.walx_folder_img.asVar()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  height: 22px;
  min-width: 18px;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic} div,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} div,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} div
{
  display: flex;
  margin: 0px;
  height: auto;
  width: 33%;
  min-width: 100px;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic} div a,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} div a,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} div a
{
  text-decoration: none;
  color: ${vars.walx_data_dev_col.asVar()};

}

.${clss.ROOT_CLASS} > ul li.${clss.pic} div a:visited,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} div a:visited,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} div a:visited
{
  color: ${vars.walx_data_dev_col.asVar()};
}

.${clss.ROOT_CLASS} > ul li.${clss.pic} div:last-child,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} div:last-child,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} div:last-child
{
  min-width: 100px;
  width: auto;
}

.${clss.ROOT_CLASS} > ul li.${clss.pic} div:first-letter,
.${clss.ROOT_CLASS} > ul li.${clss.pic_folder} div:first-letter,
.${clss.ROOT_CLASS} > ul li.${clss.pic_file} div:first-letter
{
  margin-left: 5px;
}

li.${clss.pic_file} span
{
  background-image: ${vars.walx_file_img.asVar()};
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