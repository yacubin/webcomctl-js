import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('MainFooter', import.meta.url);

const clss: any = mk.newClassNameMap([
  "ROOT_CLASS",
  "LIST_CLASS",
  "VERSION_CLASS",
  "LINK_ON_CLASS",
  "LINK_OFF_CLASS",
]);

const vars = mk.newCSSVariableMap({
  col:    [ 'black',   'white'     ],
  bg:     [ '#fbfbfb', '#2e2e2e'   ],
  border: [ '#aab9cb', '#aab9cb8c' ],
  clr:    [ '#4e4e4e', '#8b8b8b'   ],
});

const LINK_COLOR = '#5063b1';
const LINK_BG_COLOR = '#878787';
const VERSION_COLOR = LINK_BG_COLOR;

mk.newHTML('ROOT_HTML', `
<footer class="${clss.ROOT_CLASS} notranslate" translate="no">
  <div class="${clss.LIST_CLASS}">
    <div>
      <span>UTILSPOT</span>
      <div>We create websites with inspiration</div>
    </div>
    <div>
      <span>Our catalog</span>
      <a class="${clss.LINK_ON_CLASS}" href="\${ENV:HOST_URL}" draggable="false">\${ENV:HOST}</a>
    </div>
    <div>
      <span>Contact us</span>
      <div><address>\${ENV:EMAIL}</address></div>
    </div>
  </div>
  <i class="${clss.VERSION_CLASS}">Version<span>\${ENV:VERSION}</span></i>
</footer>
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} a.${clss.LINK_OFF_CLASS}
{
  pointer-events: none;
  color: ${LINK_BG_COLOR};
}

.${clss.ROOT_CLASS}
{
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 110px;
  height: 90px;
  width: 100%;
  padding: 15px 15px 0px 15px;
  box-sizing: border-box;
  border-top: 1px solid ${vars.border.asVar()};
  color: ${vars.col.asVar()};
  background-color: ${vars.bg.asVar()};
  font-family: ${TOOLBAR_FONT_SANS};
  container-name: footer;
  container-type: inline-size;
}

@container footer (width < 650px)
{
  .${clss.LIST_CLASS}
  {
    grid-template-columns: minmax(auto, auto) minmax(auto, auto);
  }
  .${clss.LIST_CLASS} > div:nth-child(1)
  {
    display: none;
  }
}

@container footer (width < 450px)
{
  .${clss.LIST_CLASS}
  {
    grid-template-columns: minmax(auto, auto);
  }
  .${clss.LIST_CLASS} > div:nth-child(2)
  {
    display: none;
  }
}

.${clss.LIST_CLASS}
{
  display: grid;
  grid-template-columns: minmax(auto,auto) minmax(auto,auto) minmax(auto,auto);
  justify-content: center;
  grid-gap: 7%;
  margin-bottom: 10px;
}

.${clss.LIST_CLASS} > div
{
  font-size: 18px;
  text-align: center;
}

.${clss.LIST_CLASS} > div span
{
  display: block;
  margin-bottom: 5px;
}

.${clss.LIST_CLASS} > div > div
{
  display: block;
  color: ${vars.clr.asVar()};
  font-size: 16px;
}

.${clss.VERSION_CLASS}
{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 0px 5px 5px 0px;
  font-size: 14px;
  color: ${VERSION_COLOR};
  box-sizing: border-box;
}

.${clss.VERSION_CLASS} > span
{
  margin-left: 5px;
}

.${clss.ROOT_CLASS} a
{
  display: block;
  color: ${LINK_COLOR};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    grid-template-columns: 1fr 150px;
    justify-content: start;
    height: 250px;
  }
  .${clss.LIST_CLASS}
  {
    grid-template-columns: minmax(auto,auto) minmax(auto,auto);
  }
  .${clss.LIST_CLASS} > div:nth-child(3)
  {
    grid-column: 1/3;
    justify-self: center;
  }
  .${clss.LIST_CLASS} > div > span
  {
    text-align: center;
    font-size: 33px;
  }
  .${clss.ROOT_CLASS} a 
  {
    font-size: 30px;
  }
  .${clss.LIST_CLASS} > div
  {
    font-size: 25px;
  }
  .${clss.LIST_CLASS} > div > div
  {
    font-size: 28px;
  }
  .${clss.ROOT_CLASS} address,
  .${clss.VERSION_CLASS}
  {
    font-size: 30px;
  }
}

@media (device-width <= 300px)
{
  .${clss.ROOT_CLASS}
  {
    height: 250px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
