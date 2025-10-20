import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("RequestStatistics");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "LIST_CLASS",
  "URL_OFF_CLASS",
  "URL_CLASS",
  "METHOD_CLASS",
  "COUNTER_CLASS",
]);

const vars = mk.newCSSVariableMap({
  stat_list_nth3: [ "#d6d6d6", "#727272" ],
  stat_link: [ "black", "#bebebe" ],
  stat_link_hov: [ "#f5f5f5", "#212020" ],
  stat_title: [ "#555555", "#bebebe" ],
  stat_list_bor: [ "#d6d6d6", "#727272" ],
  stat_list_col: [ "#4e4e4e", "#bebebe" ],
  stat_link_col_hov: [ "#555555", "#929292" ],
});


mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} notranslate" translate="no">
  <span>
    <u>Statistics</u>
    <div class="${clss.LIST_CLASS}"></div>
  </span>
</div>
`);

mk.newHTML('ITEM_HTML', `
<span>
  <div><a class="${clss.URL_CLASS}"></a></div>
  <div class="${clss.METHOD_CLASS}"></div>
  <div class="${clss.COUNTER_CLASS}"></div>
</span>
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
  justify-content: center;
  align-items: center;
  padding: 10px 30px 20px 30px;
  height: initial;
  width: inherit;
  line-height: 24px;
  font-size: 15px;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span
{
  display: block;
  width: 100%;
  max-width: 1200px;
}

.${clss.ROOT_CLASS} > span > div > span
{
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 200px 200px;
  margin-bottom: 5px;
  height: 32px;
}

.${clss.ROOT_CLASS} > span u
{
  display: block;
  text-decoration: none;
  margin-left: 10%;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${vars.stat_title.asVar()};
}

.${clss.ROOT_CLASS} > span div span > div
{
  display: flex;
  align-items: center;
  height: 100%;
  padding: 3px 15px;
  border-top: 1px solid;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-color: ${vars.stat_list_bor.asVar()};
  color: ${vars.stat_list_col.asVar()};
  overflow: hidden;
}

.${clss.ROOT_CLASS} > span div span > div:first-child 
{
  padding: 3px 5px;
}

div.${clss.ROOT_CLASS} a
{
  display: block;
  width: 100%;
  padding: 0px 10px;
  text-decoration: none;
  color: ${vars.stat_link.asVar()};
  overflow-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

${clss.URL_OFF_CLASS}
{
  pointer-events: none;
}

div.${clss.ROOT_CLASS} a:hover 
{
  color: ${vars.stat_link_col_hov.asVar()};
  background-color: ${vars.stat_link_hov.asVar()};
}

.${clss.ROOT_CLASS} > span div span > div:nth-child(3n)
{
  border-right: 1px solid ${vars.stat_list_nth3.asVar()};
}

@media (width < 850px)
{
  div.${clss.ROOT_CLASS} > span > div > span
  {
    grid-template-columns: 1fr 0.25fr 0.25fr;
  }
}

@media (device-width <= 550px)
{
 div.${clss.ROOT_CLASS} > span > div > span
 {
   height: 50px;
 }
 div.${clss.ROOT_CLASS} > span div span > div
 {
   font-size: 24px;
 }
 .${clss.ROOT_CLASS} > span div span > div:first-child 
 {
   padding: 3px 10px;
 }
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
