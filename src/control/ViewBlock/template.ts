import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("ViewBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}
{
  display: flex;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div 
{
  min-width: 285px;
  flex-shrink: 0;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > div:last-child
{
  flex-grow: 1;
  flex-shrink: initial;
}

.${clss.ROOT_CLASS} > div:last-child > div
{
  border: none;
  border-right: none;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
