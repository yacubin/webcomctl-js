import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DropFile', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "SHOW_CLASS",
]);

const UPFILE_IMG = await mk.loadSvgAsCssUrl('./up-file.svg');

const BG_COLOR = '#1e1e1ecf';

const vars = mk.newCSSVariableMap({
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div></div>
</div>
`);

mk.newCSS('CSS', `
.${clss.ROOT_CLASS}:not(.${clss.SHOW_CLASS})
{
  display: none;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  min-height: 555px;
  background-color: ${BG_COLOR};
  z-index: 3;
}

.${clss.ROOT_CLASS} > div
{
  height: 100%;
  width: 100%;
  max-width: 500px;
  min-width: 500px;
  background-image: ${UPFILE_IMG};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
