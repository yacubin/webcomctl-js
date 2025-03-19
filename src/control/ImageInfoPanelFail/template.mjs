import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageInfoPanelFail', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  Foncol: [ 'black', '#b8b4b4' ],
});

mk.newHTML('ROOT_HTML', `
  <i class="${clss.ROOT_CLASS}">
    <ul>
      <li>
        <div>Height</div>
        <div>854 px</div>
      </li>
      <li>
        <div>Chroma bpp</div>
        <div>8</div>
      </li>
      <li>
        <div>Alpha channel</div>
        <div>No</div>
      </li>
      <li>
        <div>Premul alpha</div>
        <div>No</div>
      </li>
      <li>
        <div>Primary</div>
        <div>Yes</div>
      </li>
    </ul>
  </i>
`);

mk.newCSS('CSS', `

:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS}
{
  display: block;
  width: inherit;
  height: 100%;
  padding: 10px 25px 10px 10px;
  font-family: Open Sans, Arial, sans-serif;
  font-style: normal;
  color: ${vars.Foncol.asVar()};
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > ul
{
  display: table;
  width: inherit;
  margin: 0;
  padding: 0;
  border-spacing: 0 5px;
}

.${clss.ROOT_CLASS} > ul > li
{
  display: table-row-group;
  width: inherit;
  list-style-type: none;
  background-color: #7a7a7a29;
}

.${clss.ROOT_CLASS} > ul > li:nth-child(2n)
{
  background-color: transparent;
}

.${clss.ROOT_CLASS} > ul > li > div
{
  display: table-cell;
  vertical-align: middle;
  padding: 3px 0 3px 10px;
  min-width: 50px;
  white-space: nowrap;
}

.${clss.ROOT_CLASS} > ul > li > div:nth-child(2n)
{
  width: 100%;
  min-width: auto;
  white-space: normal;
  word-break: break-all;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
