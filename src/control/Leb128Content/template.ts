import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";

import CopySvg from "./Copy.svg";
import CopyDarkSvg from "./CopyDark.svg";

const mk = new ControlMaker("Leb128Content");

const Copy_IMG = convertSvgToCssUrl(CopySvg);
const Copy2_IMG = convertSvgToCssUrl(CopyDarkSvg);
const INPUT_BOR = "#dbdbdb";
const ERROR_COLOR = "red";
const MAIN_FONT = "monospace;";
const IMPUT_FONT = "monospace";
const SELECT_FONT = "sans-serif";

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "Field_Block",
  "Field_Imput_Group",
  "Field_Imput",
  "Error",
  "Config",
  "Hidden",
]);

const vars = mk.newCSSVariableMap({
  imput_bg: ['white', 'rgb(23, 23, 26)'],
  font_color: ['black', 'white'],
  input_bor_focus: ['#1b74e4', '#a4cefe'],
  Copy_icon: [Copy_IMG, Copy2_IMG],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h1>LEB128 Converter</h1>
  <div class="${clss.Field_Block}">
    <div class="${clss.Field_Imput_Group}">
      <label for="decimal-input">Decimal:</label>
      <div class="${clss.Field_Imput}">
        <input type="number" id="decimal-input" min="0" step="1" placeholder="Enter decimal number" tabindex="1">
        <a href="#" id="decimal-copy" class="copy-link" tabindex="-1" aria-label="Copy decimal value"></a>
      </div>
    </div>
    <div class="${clss.Field_Imput_Group}">
      <label for="leb128-input">LEB128:</label>
      <div class="${clss.Field_Imput}">
        <input type="text" id="leb128-input" placeholder="Enter LEB128 value" tabindex="2">
        <a href="#" id="leb128-copy" class="copy-link" tabindex="-1" aria-label="Copy LEB128 value"></a>
      </div>
    </div>
    <div class="${clss.Error} ${clss.Hidden}">Invalid array length</div>
  </div>
  <div class="${clss.Config}">
    <label for="output-format">LEB128 Output Format:</label>
    <select id="output-format" tabindex="3">
        <option value="hex-space">Hex (space-separated)</option>
        <option value="dec-comma">Decimal (comma-separated)</option>
        <option value="hex-0x-comma">Hex 0xFF (comma-separated)</option>
        <option value="hex-string">Hex string (no separators)</option>
    </select>
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

.${clss.ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: ${MAIN_FONT};
  color: ${vars.font_color.asVar()};
}

.${clss.ROOT_CLASS} > h1
{
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
}

.${clss.Field_Block}
{
  width: 100%;
  max-width: 500px;
}

.${clss.Field_Imput_Group}
{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.${clss.Field_Imput_Group} > label,
.${clss.Config} > label
{
  margin-bottom: 0.5rem;
}

.${clss.Field_Imput}
{
  display: flex;
  align-items: center;
}

.${clss.Field_Imput} > input
{
  font-family: ${IMPUT_FONT};
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid;
  border-color: ${INPUT_BOR};
  border-radius: 4px;
  border-radius: 7px;
  color: ${vars.font_color.asVar()};
  background-color: ${vars.imput_bg.asVar()};
  flex-grow: 1;
}

.${clss.Field_Imput} > input[type=number]::-webkit-inner-spin-button,
.${clss.Field_Imput} > input[type=number]::-webkit-outer-spin-button
{
  margin: 0;
  appearance: none;
}

.${clss.Field_Imput} > input:focus
{
  outline: none;
  border-color: ${vars.input_bor_focus.asVar()};
}

.${clss.Field_Imput} > a
{
  margin-left: 0.5rem;
  text-decoration: none;
  background-image: ${vars.Copy_icon.asVar()};
  cursor: pointer;
}

.${clss.Error}
{
  color: ${ERROR_COLOR};
  margin-top: 0.5rem;
}

.${clss.Hidden}
{
  visibility: hidden;
}

.${clss.Config}
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.${clss.Config} > select
{
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-family: ${SELECT_FONT};
  font-size: 1.1rem;
  color: ${vars.font_color.asVar()};
  background-color: ${vars.imput_bg.asVar()};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
