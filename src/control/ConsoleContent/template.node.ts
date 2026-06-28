import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("ConsoleContent");

export const ROOT_CLASS: string = representClassNames("ConsoleContent-ROOT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span>
    <div contenteditable="false">C:\\Users\\Sergey\\OneDrive\\Desktop\\test &nbsp;<span contenteditable="true" spellcheck="false"></span></div>
  </span>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-family: monospace;
  word-break: break-all;
  box-sizing: border-box;
}

.${ROOT_CLASS} > span
{
  display: flex;
  align-items: center;
  width: auto;
  box-sizing: border-box;
}

.${ROOT_CLASS} > span > div 
{
  height: auto;
  width: 100%;
}

.${ROOT_CLASS} > span > div > span
{
  display: inline;
  width: 100%;
  outline: none;
  border: none;
  caret-color: white;
}
`);
