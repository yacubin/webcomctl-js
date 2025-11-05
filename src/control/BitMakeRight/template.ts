import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("BitMakeRight");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const vars = mk.newCSSVariableMap({
  R_col: ['black', 'white'],
  R_BG: ['white', 'rgb(23, 23, 26)'],
  TAB_BG: ['#bab9b9', '#2a2a2d'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "TABLE",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h2>Introduction</h2>
  <div>MCP is an open protocol that standardizes how applications provide context to large language models (LLMs).
      Think of MCP like a USB-C port for AI applications.
      Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories,
      MCP provides a standardized way to connect AI models to different data sources and tools.
      MCP enables you build agents and complex workflows on top of LLMs and connects your models with the world.
  </div>

  <h4>Introduction</h4>
  <div>MCP is an open protocol that standardizes how applications provide context to large language models (LLMs).
      Think of MCP like a USB-C port for AI applications.
      Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories,
      MCP provides a standardized way to connect AI models to different data sources and tools.
      MCP enables you build agents and complex workflows on top of LLMs and connects your models with the world.
  </div>

  <h4>Introduction</h4>
  <div>MCP is an open protocol that standardizes how applications provide context to large language models (LLMs).
      Think of MCP like a USB-C port for AI applications.
      Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories,
      MCP provides a standardized way to connect AI models to different data sources and tools.
      MCP enables you build agents and complex workflows on top of LLMs and connects your models with the world.
  </div>
  <div class="${clss.TABLE}">
    <div><span>100</span></div><span><span>Continue</span></span>
    <div><span>101</span></div><span><span>Switching Protocols</span></span>
    <div><span>102</span></div><span><span>Processing</span></span>
    <div><span>103</span></div><span><span>Early Hints</span></span>
    <div><span>200</span></div><span><span>OK</span></span>
    <div><span>201</span></div><span><span>Created</span></span>
    <div><span>301</span></div><span><span>Moved Permanently</span></span>
    <div><span>307</span></div><span><span>Temporary Redirect</span></span>
    <div><span>404</span></div><span><span>Not Found</span></span>
    <div><span>412</span></div><span><span>Precondition Failed</span></span>
    <div><span>426</span></div><span><span>Upgrade Required</span></span>
    <div><span>500</span></div><span><span>Internal Server Error</span></span>
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
  flex-grow: 1;
  padding: 15px;
  line-height: 25px;
  color: ${vars.R_col.asVar()};
  overflow: auto;
}

.${clss.ROOT_CLASS} > *
{
  min-width: 600px;
}

.${clss.TABLE}
{
  display: grid;
  grid-template-columns: minmax(100px, max-content) auto;
  grid-gap: 2px 2px;
  width: max-content;
  min-width: auto;
  border-radius: 5px;
  padding: 2px;
  background-color: ${vars.TAB_BG.asVar()};
}

.${clss.TABLE} > div,
.${clss.TABLE} > span
{
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: ${vars.R_BG.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}