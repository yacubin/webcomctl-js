import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("HorizontalBlock");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></div>
`);

mk.newHTML('CSS', `
.${clss.ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
