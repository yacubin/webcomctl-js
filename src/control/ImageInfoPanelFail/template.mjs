import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageInfoPanelFail', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  menuCol: [ '', '' ],
  titleCol: [ '', '' ],
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
  width: 200px;
  height: 100%;
  font-family: Open Sans, Arial, sans-serif;
  font-style: normal;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > ul
{
  display: table;
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
}

.${clss.ROOT_CLASS} > ul > li
{
  display: table-row-group;
  width: inherit;
  list-style-type: none;
}

.${clss.ROOT_CLASS} > ul > li > div
{
  display: table-cell;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
