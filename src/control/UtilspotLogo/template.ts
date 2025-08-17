import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";

import utilspotSvg from "./utilspot.svg";

const mk = new ControlMaker("UtilspotLogo");
const USHEADER_IMG = convertSvgToCssUrl(utilspotSvg);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  header_bor: [ 'transparent', 'transparent' ],
  header_bor2: [ 'transparent', 'transparent' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h1></h1>
  <h2>
    <span>this is a place of web</span> 
    <span>technologies created by us</span>
    <span>to make life easier</span>
  </h2>
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0px;
  border-style: solid;
  border-width: 5px 0px;
  border-color: ${vars.header_bor.asVar()};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > h1
{
  align-self: center;
  display: block;
  height: 133px;
  width: 450px;
  margin: 0px;
  margin-left: 72px;
  margin-bottom: 35px;
  background-image: ${USHEADER_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 10px;
  border-style: solid;
  border-width: 6px 0px;
  border-color: ${vars.header_bor2.asVar()};
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > h2
{
  margin: 0px;
  margin-top: 50px;
  line-height: 40px;
  width: 330px;
  font-size: 24px;
  font-weight: 600;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} h2 > span
{
  display: block;
}


.${clss.ROOT_CLASS} > h2 > span:nth-child(2)
{
  margin-left: 10px;
}

.${clss.ROOT_CLASS} > h2 > span + span + span
{
  margin-left: 5px;
}

@media (width <= 900px)
{
  .${clss.ROOT_CLASS} > h2 
  {
    display: none;
    transition: display 0.5s;
  }
}

@media (device-width <= 550px)
{
  .${clss.ROOT_CLASS}
  {
    flex-direction: column;
    justify-content: flex-end;
  }
  .${clss.ROOT_CLASS} > h1 
  {
    width: 100%;
    height: 240px;
    background-position-y: center;
    margin-left: 0px;
  }
  .${clss.ROOT_CLASS} > h2 
  {
    align-self: end;
    line-height: 50px;
    width: 488px;
    font-size: 37px;
    margin-top: 0px;
    margin-right: 45px;
  }
}

@media (device-width <= 300px)
{
  .${clss.ROOT_CLASS}
  {
    padding-left: 0px;
  }
  .${clss.ROOT_CLASS} > h1
  {
    margin-left: 0px;
    background-position-x: center;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
