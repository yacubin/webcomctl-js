import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('VerticalBlock', import.meta.url);

const clss: any = mk.newClassNameMap([
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
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  overflow: hidden;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
