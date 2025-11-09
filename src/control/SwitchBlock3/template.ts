import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("SwitchBlock3");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "NTH2_CLASS",
]);

export function buildComponent() {
  return mk.buildComponent();
}
