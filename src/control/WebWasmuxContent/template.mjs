import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('WebWasmuxContent', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  color: ['#353535','#dcdcdc'],
});

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <h2>Wasmux</h2>
    <ul>
      <li>Our service makes it easy to convert various programming languages into code that browsers can understand. No matter which language you're working with, our tool automatically transforms your code so it displays and runs correctly in any modern web environment.</li>
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

.${clss.ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: ${vars.color.asVar()};
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > *
{
  width: 700px;
  margin: 0 auto;
}

.${clss.ROOT_CLASS} > h2
{
  padding: 20px 0;
  font-size: 40px;
}

.${clss.ROOT_CLASS} ul
{
  padding: 0;
  list-style-type: none;
}

.${clss.ROOT_CLASS} ul > li
{
  margin-bottom: 10px;
}

.${clss.ROOT_CLASS} ul > li::first-letter
{
  padding-left: 5px;
}

@media (device-width < 550px)
{
}
`);

export async function buildComponent()
{
  return mk.buildComponent();
}
