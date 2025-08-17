import ControlMaker from "@/lib/ControlMaker";

export namespace SwitchBlock {
export enum Style {
  Normal = 0,
  Flex = 1,
};

export function build(name: string, style: Style) {
  const mk = new ControlMaker(name);

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
    "PORT_CLASS",
    "NTH1_CLASS",
    "NTH2_CLASS",
  ]);

  mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS} ${clss.NTH1_CLASS}"></div>
  `);

  const css = [];

  if (style === Style.Normal) {
    css.push(`
    .${clss.ROOT_CLASS}
    {
      height: 100%;
      width: inherit;
      box-sizing: border-box;
    }`);
  }

  if (style === Style.Flex) {
    css.push(`
    .${clss.ROOT_CLASS}
    {
      flex-grow: 1;
      width: inherit;
      box-sizing: border-box;
    }
    .${clss.NTH2_CLASS}
    {
      overflow-x: hidden;
    }`);
  }

  css.push(`
  .${clss.NTH1_CLASS} > *:nth-child(2),
  .${clss.NTH2_CLASS} > *:first-child
  {
    display: none;
  }`)

  mk.newCSS('CSS', css);

  return mk.buildComponent();
}

} // namespace SwitchBlock
