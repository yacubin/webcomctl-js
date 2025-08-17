import ControlMaker from "@/lib/ControlMaker";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { HEADER_FONT_SIZE } from "@/lib/WickedTheme";
import { HEADER_FONT_COLOR } from "@/lib/WickedTheme";
import { HEADER_FONT_FAMILY } from "@/lib/WickedTheme";
import { HEADER_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { HEADER_BORDER_RADIUS_HOVER } from "@/lib/WickedTheme";
import { HEADER_COLOR_HOVER_DARK } from "@/lib/WickedTheme";
import { HEADER_COLOR_HOVER } from "@/lib/WickedTheme";

export namespace HdrButton {

interface Params {
  type: "FileUpload" | "Link";
  url?: string;
  anchorTarget?: "_blank" | "_self";
  text: string;
  mainImage: string;
  hoverImage: string | [string, string];
};

export function build(name: string, {type, url, anchorTarget, text, mainImage, hoverImage}: Params) {
  const mk = new ControlMaker(name);

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
    "HIDDEN_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    btnBg: [ HEADER_BACKGROUND_COLOR ],
    btnCol: [ HEADER_COLOR_HOVER, HEADER_COLOR_HOVER_DARK ],
    image: [hoverImage].flat().map(i => convertSvgToCssUrl(i)) as any,
  });

  if (type === "Link") {
    mk.newHTML('ROOT_HTML', `
    <a href="${url}" target="${anchorTarget}" class="${clss.ROOT_CLASS} notranslate" translate="no" draggable="false">
      <div></div>
      <span>${text}</span>
    </a>
    `);
  }
  else if (type === "FileUpload") {
    mk.newHTML('ROOT_HTML', `
    <label class="${clss.ROOT_CLASS} ${clss.HIDDEN_CLASS} notranslate" translate="no" draggable="false">
      <div></div>
      <span>${text}</span>
      <!--<input type="file">-->
    </label>
    `);
  }

  mk.newCSS('CSS', `
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${clss.ROOT_CLASS} > input
  {
    display: none;
  }

  .${clss.HIDDEN_CLASS}
  {
    visibility: hidden;
  }

  .${clss.ROOT_CLASS}
  {
    display: flex;
    width: min-content;
    height: min-content;
    margin: 0px 5px;
    padding-right: 5px;
    color: ${HEADER_FONT_COLOR};
    font-family: ${HEADER_FONT_FAMILY};
    font-size: ${HEADER_FONT_SIZE};
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .${clss.ROOT_CLASS}:hover
  {
    color: ${vars.btnCol.asVar()};
    background-color: ${vars.btnBg.asVar()};
    border-radius: ${HEADER_BORDER_RADIUS_HOVER};
    transition: background-color 0.2s;
  }

  .${clss.ROOT_CLASS}:hover > div
  {
    background-image: ${vars.image.asVar()};
  }

  .${clss.ROOT_CLASS} > div
  {
    display: block;
    width: 40px;
    height: 30px;
    border: 4px solid transparent;
    background-image: ${convertSvgToCssUrl(mainImage)};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS} > div
    {
      width: 60px;
      height: 55px;
    }
    .${clss.ROOT_CLASS}
    {
      font-size: 60px;
    }
  }
  `);

  return mk.buildComponent();
}
} // namespace HdrButton
