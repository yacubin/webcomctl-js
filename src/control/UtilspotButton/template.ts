import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

const mk = new ControlMaker("UtilspotButton");

const but_hov_bg = '#55778c1f';

const vars = mk.newCSSVariableMap({
  sw_bg: ['white', 'black'],
  sw_bor: ['#aab9cb', '#727272'],
  but_bg: ['white', '#0000004d'],
  but_bor: ['#d6d6d6', '#727272'],
  but_hov_col: ['#555555', '#ffffff7d'],
  but_hov_bor: ['#1d3b4ebf', '#ffffff4f'],
  but_act_col: ['white', '#bebebe'],
  but_act_bg: ['#1d3b4e', '#1d3b4ea1'],
  but_col: ['#2d2d2d', '#bebebe'],
  but_act_bor: ['transparent', '#727272'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "BUTTON_ACTIVE",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" draggable="false">
  <a href="/">Home</a>
  <a href="/statistics">Statistics</a>
  <a href="/journal/access">Journal-access</a>
  <a href="/journal/ssl_request">Journal-ssl request</a>
  <a href="/journal/error">Journal-error</a>
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
  justify-content: center;
  gap: 6px;
  position: sticky;
  top: 0;
  padding-left: calc(100vw - 100%);
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${vars.sw_bor.asVar()};
  font-size: 16px;
  background-color: ${vars.sw_bg.asVar()};
  flex-shrink: 0;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

div.${clss.ROOT_CLASS} a.${clss.BUTTON_ACTIVE}
{
  pointer-events: none;
  border-radius: 15px;
  color: ${vars.but_act_col.asVar()};
  background-color: ${vars.but_act_bg.asVar()};
  border-color: ${vars.but_act_bor.asVar()};
}

div.${clss.ROOT_CLASS} > a
{
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 20px;
  color: ${vars.but_col.asVar()};
  border: 1px solid ${vars.but_bor.asVar()};
  border-radius: 10px;
  white-space: nowrap;
  background: ${vars.but_bg.asVar()};
  user-select: none;
  text-decoration: none;
}

div.${clss.ROOT_CLASS} > a:hover
{
  color: ${vars.but_hov_col.asVar()};
  background-color: ${but_hov_bg};
  border-color: ${vars.but_hov_bor.asVar()};
  border-radius: 15px;
  transition: border-color 0.250s, border-radius 0.500s;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    height: 90px;
    font-size: 26px;
  }
  .${clss.ROOT_CLASS} > h3
  {
    display: none;
  }
  .${clss.ROOT_CLASS} > h2
  {
    width: 210px;
    background-size: 360px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
