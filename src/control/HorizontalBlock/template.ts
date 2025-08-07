import ControlMaker from "@/lib/ControlMaker.mjs";

const mk = new ControlMaker("HorizontalBlock", import.meta.url);

const clss: any = mk.newClassNameMap([
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
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
