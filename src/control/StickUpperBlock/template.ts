import ControlMaker from "@/lib/ControlMaker";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("StickUpperBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  wsock_nav_bg: [ 'linear-gradient(to bottom, white 0% 76%, transparent)', ' linear-gradient(to bottom, rgb(23, 23, 26) 0% 76%, transparent)' ],
  wsock_nav_bs: [ '-4px 0px 5px -5px rgba(0, 0, 0, 0), -4px 0px 5px -5px rgba(23, 23, 26, 0)', '-4px 0px 5px -5px rgb(0 0 0), -4px 0px 5px -5px rgb(23 23 26 / 60%)' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
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
  justify-content: center;
  align-items: flex-start;
  position: sticky;
  top: 0px;
  height: 60px;
  padding-top: 5px;
  background: ${vars.wsock_nav_bg.asVar()};
  font-family: monospace;
  box-shadow: ${vars.wsock_nav_bs.asVar()};
  z-index: 1;
  container-name: hide;
  container-type: inline-size;
}

@container hide (width < 750px)
{
  .${clss.ROOT_CLASS} > *:first-child > span
  {
    display: none;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
