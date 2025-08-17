import ControlMaker from "@/lib/ControlMaker";

const mk = new ControlMaker("MainBlockSocket");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}">
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
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
