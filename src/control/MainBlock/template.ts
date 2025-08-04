import ControlMaker from "@/lib/ControlMaker.mjs";

const mk = new ControlMaker('MainBlock', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div class="${clss.PORT_CLASS}"></div>
</div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-track,
.${clss.ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${clss.ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 685px;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
