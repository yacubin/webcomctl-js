import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

import folderSvg from "./folder.svg";
import folder2Svg from "./folder2.svg";
import fileSvg from "./file.svg";
import file2Svg from "./file2.svg";

const mk = new ControlMaker("DirectoryViewer");

export const ROOT_CLASS: string = representClassNames("DirectoryViewer-ROOT_CLASS");
export const ITEM_LIST: string = representClassNames("DirectoryViewer-ITEM_LIST");
export const FOLDER_CLASS: string = representClassNames("DirectoryViewer-FOLDER_CLASS");
export const FILE_CLASS: string = representClassNames("DirectoryViewer-FILE_CLASS");
export const TITLE_CLASS: string = representClassNames("DirectoryViewer-TITLE_CLASS");
export const LINK_CLASS: string = representClassNames("DirectoryViewer-LINK_CLASS");
export const TYPE_CLASS: string = representClassNames("DirectoryViewer-TYPE_CLASS");
export const SIZE_CLASS: string = representClassNames("DirectoryViewer-SIZE_CLASS");
export const DATE_CLASS: string = representClassNames("DirectoryViewer-DATE_CLASS");

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

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" align="center">
  <div>
    <h2 class="${TITLE_CLASS}">
      <div>Name</div>
      <div>Type</div>
      <div>Size</div>
      <div>Date</div>
    </h2>
    <ul class="${ITEM_LIST}"></ul>
  </div>
</div>
`;

export const ITEM_HTML = `
<li class="${FOLDER_CLASS}">
  <div>
    <span></span>
    <a class="${LINK_CLASS}"></a>
  </div>
  <div class="${TYPE_CLASS}"></div>
  <div class="${SIZE_CLASS}"></div>
  <div class="${DATE_CLASS}"></div>
</li>
`;

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-track,
.${ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${ROOT_CLASS}
{
  padding: 10px;
  color: ${vars.walx_data_dev_col.asVar()};
  font-family:${TOOLBAR_FONT_SANS};
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${TITLE_CLASS}
{
  height: 35px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
}

.${ROOT_CLASS} > div
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

.${ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0;
}

.${ROOT_CLASS} .${TITLE_CLASS}
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${ROOT_CLASS} ul > li:nth-child(1n+2)
{
  border-top: 1px solid ${vars.walx_data_dev_pic_bor.asVar()};
}

.${ROOT_CLASS} ul li.${TITLE_CLASS},
.${ROOT_CLASS} ul li.${FOLDER_CLASS},
.${ROOT_CLASS} ul li.${FILE_CLASS}
{
  list-style-type: none;
  height: 35px;
}

.${ROOT_CLASS} ul li.${FOLDER_CLASS}:hover,
.${ROOT_CLASS} ul li.${FILE_CLASS}:hover
{
  background-color: ${vars.walx_data_dev_pic_nth2_hov.asVar()};
}

.${ROOT_CLASS} ul li.${FOLDER_CLASS}:last-child,
.${ROOT_CLASS} ul li.${FILE_CLASS}:last-child
{
  border-bottom:none;
}

.${ROOT_CLASS} .${TITLE_CLASS},
.${ROOT_CLASS} ul li.${FOLDER_CLASS},
.${ROOT_CLASS} ul li.${FILE_CLASS}
{
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.${ROOT_CLASS} ul li.${FOLDER_CLASS} span,
.${ROOT_CLASS} ul li.${FILE_CLASS} span
{
  margin: 0px 5px 0 0;
}

li.${FOLDER_CLASS} span
{
  background-image: ${vars.walx_folder_img.asVar()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  height: 22px;
  min-width: 18px;
}

.${ROOT_CLASS} .${TITLE_CLASS} div,
.${ROOT_CLASS} ul li.${FOLDER_CLASS} div,
.${ROOT_CLASS} ul li.${FILE_CLASS} div
{
  display: flex;
  margin: 0px;
  height: auto;
  width: 33%;
  min-width: 100px;
}

.${ROOT_CLASS} ul li.${FOLDER_CLASS} div a,
.${ROOT_CLASS} ul li.${FILE_CLASS} div a
{
  text-decoration: none;
  color: ${vars.walx_data_dev_col.asVar()};

}

.${ROOT_CLASS} ul li.${FOLDER_CLASS} div a:visited,
.${ROOT_CLASS} ul li.${FILE_CLASS} div a:visited
{
  color: ${vars.walx_data_dev_col.asVar()};
}

.${ROOT_CLASS} .${TITLE_CLASS} div:last-child,
.${ROOT_CLASS} ul li.${FOLDER_CLASS} div:last-child,
.${ROOT_CLASS} ul li.${FILE_CLASS} div:last-child
{
  min-width: 100px;
  width: auto;
}

.${ROOT_CLASS} .${TITLE_CLASS} div:first-letter,
.${ROOT_CLASS} ul li.${FOLDER_CLASS} div:first-letter,
.${ROOT_CLASS} ul li.${FILE_CLASS} div:first-letter
{
  margin-left: 5px;
}

li.${FILE_CLASS} span
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
