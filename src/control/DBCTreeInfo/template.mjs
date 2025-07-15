import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBCTreeInfo', import.meta.url);

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "TREE_OFF",
  "LEFT_ON",
  "RIGHT_PANEL"
]);

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}" style="grid-template-columns: minmax(160px, 225px) 1fr;"></div>
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
  display: grid;
  grid-template-areas: 'left right';
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

div.${clss.TREE_OFF} > div.${clss.ROOT_CLASS} > nav,
div.${clss.TREE_OFF}  > div.${clss.ROOT_CLASS} > nav + div,
div.${clss.TREE_OFF}  > div.${clss.ROOT_CLASS} > nav + div + span
{
  display: none;
}

div.${clss.TREE_OFF}  > .${clss.RIGHT_PANEL} 
{
  padding: 0px 15px 15px 75px;
}

div.${clss.TREE_OFF} 
{
  grid-template-areas: 'right right';
}

div.${clss.TREE_OFF}  > div.${clss.LEFT_ON}
{
  display: block;
  grid-area: right;
  align-self: start;
  position: sticky;
  top: 10px;
  margin-left: 15px;
  height: 50px;
  width: 45px;
  max-height: initial;
  min-width: auto;
  max-width: initial;
}

div.${clss.TREE_OFF}  > div.${clss.ROOT_CLASS} > s > div > div
{
  width: 35px;
  height: 30px;
  transition: width 0.250s, height 0.250s;
}

div.${clss.TREE_OFF}  > div.${clss.LEFT_ON} > s > div
{
  width: inherit;
  height: initial;
  margin: 0;
}

div.${clss.TREE_OFF}  div.${clss.LEFT_ON} > s > div:hover
{
  border-radius: 20px;
}

div.${clss.TREE_OFF}  > div.${clss.LEFT_ON} > s
{
  height: inherit;
  width: inherit;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}