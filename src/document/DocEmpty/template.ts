import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("DocEmpty");

const clss = mk.newClassNameMap([
  "PORT_CLASS",
]);

mk.newCSS('CSS', `
`);

export function buildComponent()
{
  return mk.buildComponent();
}
