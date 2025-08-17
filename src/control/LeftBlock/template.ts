import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("LeftBlock");

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
  align-items: center;
  width: 100%;
  height: 100%;
  container-name: function;
  container-type: inline-size;
}

@container function (width < 240px)
{
  .${clss.ROOT_CLASS} > div
  {
    display: none;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
