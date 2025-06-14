import { DARKMODE_SELECTOR_VALUE } from '../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';

export default function(mk, {favicon, width}) {
  const clss = mk.newClassNameMap([
    "ROOT_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    favicon,
  });

  mk.newHTML('ROOT_HTML', `
    <h3 class="${clss.ROOT_CLASS}"></h3>
  `);

  mk.newHTML('CSS', `
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
    height: 100%;
    width: ${width}px;
    margin: 0 7px 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-image: ${vars.favicon.asVar()};
    flex-shrink: 0;
    padding: 0;
    font-size: 1em;
    font-weight: 400;
  }

  @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS}
    {
      display: none;
    }
  }
  `);
}
