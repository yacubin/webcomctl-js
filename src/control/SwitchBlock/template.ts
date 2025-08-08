import ControlMaker from "@/lib/ControlMaker.mjs";

const mk = new ControlMaker("SwitchBlock", import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "NTH1_CLASS",
  "NTH2_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS} ${clss.NTH1_CLASS}"></div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}
{
  flex-grow: 1;
  /*height: 100%;*/
  width: inherit;
  box-sizing: border-box;
}

.${clss.NTH1_CLASS} > *:nth-child(2),
.${clss.NTH2_CLASS} > *:first-child
{
  display: none;
}

.${clss.NTH2_CLASS}
{
  overflow-x: hidden;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
