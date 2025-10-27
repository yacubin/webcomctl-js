import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotApps");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "CENT_CLASS",
  "MAIN_CLASS",
  "LOGO_CLASS",
  "ICON_CLASS",
  "TITLE_CLASS",
  "DESC_CLASS",
]);

const cent_nth2_mob = '#d6d6d6';

const vars = mk.newCSSVariableMap({
  cent_nth2: ['#d6d6d6', '78787826'],
  link_col_hov: ['#555555', '#c1c1c1c2'],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}" draggable="false">
  <div class="${clss.CENT_CLASS}"></div>
</div>
`);

mk.newHTML("ITEM_HTML", `
<div>
  <a class="${clss.MAIN_CLASS}">
    <span class="${clss.LOGO_CLASS}"></span>
    <div>
      <div>
        <div class="${clss.ICON_CLASS}"></div>
        <span class="${clss.TITLE_CLASS} notranslate" translate="no"></span>
      </div>
      <div class="${clss.DESC_CLASS}"></div>
    </div>
  </a>
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
  flex-grow: 1;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.CENT_CLASS}
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: initial;
  width: inherit;
  line-height: 1.5em;
  text-align: left;
  overflow: hidden;
}

.${clss.CENT_CLASS} a
{
  display: flex;
  max-width: 1500px;
  padding: 75px 0;
  margin: 0px 20px;
}

.${clss.CENT_CLASS} a:hover
{
  color: ${vars.link_col_hov.asVar()};
}

.${clss.CENT_CLASS} > div
{
  display: flex;
  justify-content: center;
  width: inherit;
  height: initial;
}

.${clss.CENT_CLASS} > div:nth-child(2n) a
{
  flex-direction: row-reverse;
}

.${clss.CENT_CLASS} > div:nth-child(1n + 2)
{
  border-top: 1px solid ${vars.cent_nth2.asVar()};
}

.${clss.CENT_CLASS} a > span
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 310px;
  width: 460px;
  flex-shrink: 0;
}

.${clss.CENT_CLASS} a > span > img
{
  height: 90%;
  width: 90%;
}

.${clss.CENT_CLASS} a > span > img
{
  transition: width, height;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.${clss.CENT_CLASS} a:hover > span > img
{
  height: 100%;
  width: 100%;
  transition: width, height;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.15s;
}

.${clss.CENT_CLASS} a > div
{
  width: 550px;
  padding: 20px;
  margin-left: 40px;
}

.${clss.CENT_CLASS} > div:nth-child(2n) a > div
{
  margin-right: 40px;
  margin-left: auto;
}

.${clss.CENT_CLASS} a > div > div
{
  display: flex;
}

.${clss.CENT_CLASS} a > div span
{
  display: block;
  line-height: 1em;
  font-size: 40px;
  padding-left: 10px;
  font-weight: 700;
  font-family: math;
}

.${clss.CENT_CLASS} a > div > div > div
{
  height: 40px;
}

.${clss.CENT_CLASS} a > div img
{
  align-self: flex-start;
  height: 40px;
}

.${clss.CENT_CLASS} a > div > div + div
{
  display: block;
  font-size: 18px;
  margin-top: 10px;
  line-height: 30px;
  padding-left: 20px;
}

@media (width < 1040px)
{
  .${clss.CENT_CLASS} a > div
  {
    width: 350px;
    padding-top: 30px;
  }
  footer
  {
    min-width: 855px;
  }
}

@media (width <= 840px)
{
  .${clss.CENT_CLASS} a
  {
    flex-direction: column;
    align-items: center;
  }
  .${clss.CENT_CLASS} > div:nth-child(2n) a
  {
    flex-direction: column;
    align-items: center;
  }
  .${clss.CENT_CLASS} a > div
  {
    width: 670px;
  }
  .${clss.CENT_CLASS} a > span
  {
    height: 400px;
    width: 550px;
  }
}

@media (device-width <= 550px)
{
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} > div:nth-child(1n + 2) 
  {
    border-top: 1px solid ${cent_nth2_mob};
  }
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} a
  {
    flex-direction: column;
    height: auto;
    width: inherit;
    padding: 60px 0px;
  }
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} a:hover 
  {
    color: inherit;
  }
  .${clss.CENT_CLASS} a:hover > span > img 
  {
    transform: none;
    transition-duration: inherit;
    transition-timing-function: inherit;
    transition-delay: inherit;
  }
  .${clss.CENT_CLASS} a > span
  {
    height: auto;
    width: inherit;
  }
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} a > div
  {
    width: inherit;
    margin: 0px;
  }
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} a > div img
  {
    height: 70px;
  }
  .${clss.ROOT_CLASS} div.${clss.CENT_CLASS} a > div span
  {
    margin-top: 5px;
    font-size: 60px;
  }
  .${clss.CENT_CLASS} a > div > div + div
  {
    font-size: 28px;
    line-height: 42px;
  }
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
