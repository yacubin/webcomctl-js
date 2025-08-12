import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode.mjs";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme.mjs";

import folderSvg from "./folder.svg";
import folder2Svg from "./folder2.svg";
import fileSvg from "./file.svg";
import file2Svg from "./file2.svg";

const mk = new ControlMaker("DirectoryViewer");

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "ITEM_LIST",
  "FOLDER_CLASS",
  "FILE_CLASS",
  "TITLE_CLASS",
  "LINK_CLASS",
  "TYPE_CLASS",
  "SIZE_CLASS",
  "DATE_CLASS",
]);

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const vars = mk.newCSSVariableMap({
  walx_file_img: [
    convertSvgToCssUrl(fileSvg),
    convertSvgToCssUrl(file2Svg),
  ],
  walx_folder_img: [
    convertSvgToCssUrl(folderSvg),
    convertSvgToCssUrl(folder2Svg),
  ],
  walx_data_dev_col: ['#1f2328', '#9198a1'],
  walx_data_dev_pic_bor: ['#d8d7d7', '#3d444d'],
  walx_data_dev_pic_nth2_hov: ['#f2f2f2', '#282828'],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" align="center">
  <div>
    <h2 class="${clss.TITLE_CLASS}">
      <div>Name</div>
      <div>Type</div>
      <div>Size</div>
      <div>Date</div>
    </h2>
    <ul class="${clss.ITEM_LIST}"></ul>
  </div>
</div>
`);

mk.newHTML('ITEM_HTML', `
<li class="${clss.FOLDER_CLASS}">
  <div>
    <span></span>
    <a class="${clss.LINK_CLASS}"></a>
  </div>
  <div class="${clss.TYPE_CLASS}"></div>
  <div class="${clss.SIZE_CLASS}"></div>
  <div class="${clss.DATE_CLASS}"></div>
</li>
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

.${clss.TITLE_CLASS}
{
  height: 35px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
}

.${clss.ROOT_CLASS} > div
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

.${clss.ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0;
}

.${clss.ROOT_CLASS} .${clss.TITLE_CLASS}
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${clss.ROOT_CLASS} ul > li:nth-child(1n+2)
{
  border-top: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
}

.${clss.ROOT_CLASS} ul li.${clss.TITLE_CLASS},
.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS},
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS}
{
  list-style-type: none;
  height: 35px;
}

.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS}:hover,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS}:hover
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS}:last-child,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS}:last-child
{
  border-bottom:none;
}

.${clss.ROOT_CLASS} .${clss.TITLE_CLASS},
.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS},
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS}
{
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} span,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} span
{
  margin: 0px 5px 0 0;
}

li.${clss.FOLDER_CLASS} span
{
  background-image: ${vars.walx_folder_img.asVar()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  height: 22px;
  min-width: 18px;
}

.${clss.ROOT_CLASS} .${clss.TITLE_CLASS} div,
.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} div,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} div
{
  display: flex;
  margin: 0px;
  height: auto;
  width: 33%;
  min-width: 100px;
}

.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} div a,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} div a
{
  text-decoration: none;
  color: ${vars.walx_data_dev_col.asVar()};

}

.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} div a:visited,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} div a:visited
{
  color: ${vars.walx_data_dev_col.asVar()};
}

.${clss.ROOT_CLASS} .${clss.TITLE_CLASS} div:last-child,
.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} div:last-child,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} div:last-child
{
  min-width: 100px;
  width: auto;
}

.${clss.ROOT_CLASS} .${clss.TITLE_CLASS} div:first-letter,
.${clss.ROOT_CLASS} ul li.${clss.FOLDER_CLASS} div:first-letter,
.${clss.ROOT_CLASS} ul li.${clss.FILE_CLASS} div:first-letter
{
  margin-left: 5px;
}

li.${clss.FILE_CLASS} span
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
