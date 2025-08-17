import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("DocEmpty");

const clss = mk.newClassNameMap([
  "PORT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<!DOCTYPE html>
<html>
  <head></head>
  <body class="${clss.PORT_CLASS}"></body>
</html>
`);

mk.newCSS('CSS', `
`);

export function buildComponent()
{
  return mk.buildComponent();
}
