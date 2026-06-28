import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("ConnectionStatus");

const SIG_OFF = "radial-gradient(red 5% , #830000)";

const GRAD_COLOR = "#073d00";
const GRAD_STEP1 = `radial-gradient(#00ba00 5% , ${GRAD_COLOR})`;
const GRAD_STEP2 = `radial-gradient(#00ba00 7% , ${GRAD_COLOR})`;
const GRAD_STEP3 = `radial-gradient(#00bd00 9% , ${GRAD_COLOR})`;
const GRAD_STEP4 = `radial-gradient(#389f38 12% , ${GRAD_COLOR})`;

const GRADIENT = mk.newAnimationName("GRADIENT");

export const ROOT_CLASS: string = representClassNames("ConnectionStatus-ROOT_CLASS");
export const SIGNAL_STATE_OFF: string = representClassNames("ConnectionStatus-SIGNAL_STATE_OFF");
export const SIGNAL_STATE_ON: string = representClassNames("ConnectionStatus-SIGNAL_STATE_ON");
export const SIGNAL_STATE_TEXT: string = representClassNames("ConnectionStatus-SIGNAL_STATE_TEXT");

const vars = mk.newCSSVariableMap({
  con_col: [ '#353535', '#dcdcdc' ],
});

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${SIGNAL_STATE_OFF}"></div>
    <span class="${SIGNAL_STATE_TEXT}"></span>
  </div> 
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

.${ROOT_CLASS}
{
  position: absolute;
  display: flex;
  align-items: center;
  top: 26px;
  left: 20px;
}

.${ROOT_CLASS} > div
{
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.${ROOT_CLASS} > span
{
  text-indent: 5px;
  color: ${vars.con_col.asVar()};
  font-weight: 900;
}

.${SIGNAL_STATE_OFF}
{
  background: ${SIG_OFF};
  background-size: 100%;
}

.${SIGNAL_STATE_ON}
{
  animation-name: ${GRADIENT};
  animation-duration: 3s, 2s, 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-size: 100%;
}

@keyframes ${GRADIENT}
{
  0%
  {
    background: ${GRAD_STEP1};
  }
  16%
  {
    background: ${GRAD_STEP2};
  }
  32%
  {
    background: ${GRAD_STEP3};
  }
  50%
  {
    background: ${GRAD_STEP4};
  }
  66%
  {
    background: ${GRAD_STEP3};
  }
  82%
  {
    background: ${GRAD_STEP2};
  }
  100%
  {
    background: ${GRAD_STEP1};
  }
}
`);
