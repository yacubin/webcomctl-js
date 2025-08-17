import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("DragDropToView");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS"
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
