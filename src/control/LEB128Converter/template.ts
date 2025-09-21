import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("LEB128Converter");

const INPUT_BOR = "#dbdbdb";
const INPUT_BOR_FOCUS = "#1b74e4";
const INPUT_COLOR = "#88939a";
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
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h1>LEB128 Converter</h1>
  <div class="${clss.Field_Block}">
    <div class="${clss.Field_Imput_Group}">
      <label for="decimal-input">Decimal:</label>
      <div class="${clss.Field_Imput}">
        <input type="number" id="decimal-input" min="0" step="1" placeholder="Enter decimal number" tabindex="1">
        <a href="#" id="decimal-copy" class="copy-link" tabindex="-1" aria-label="Copy decimal value">Copy</a>
      </div>
    </div>
    <div class="${clss.Field_Imput_Group}">
      <label for="leb128-input">LEB128:</label>
      <div class="${clss.Field_Imput}">
        <input type="text" id="leb128-input" placeholder="Enter LEB128 value" tabindex="2">
        <a href="#" id="leb128-copy" class="copy-link" tabindex="-1" aria-label="Copy LEB128 value">Copy</a>
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
  border: 1px solid ${INPUT_BOR};
  border-radius: 4px;
  border-radius: 7px;
  flex-grow: 1;
}

.${clss.Field_Imput} > input:focus
{
  outline: none;
  border: 1px solid ${INPUT_BOR_FOCUS};
}

.${clss.Field_Imput} > a
{
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: ${INPUT_COLOR};
  text-decoration: none;
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
}

.${clss.Config} > select:focus-visible
{

}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
