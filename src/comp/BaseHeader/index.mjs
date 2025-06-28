import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

export default function(mk, {type}) {
  let height = "43px";
  let paddingTopBottom = "5px";
  let paddingRightLeft = "10px";
  let borderColor = ['#c2c2c2', '#3c3c3c'];

  if (type === "wiki") {
    height = "60px";
    paddingTopBottom = "0px";
    paddingRightLeft = "20px";
    borderColor = [ '#eaedf1', '#3f3f3f' ];
  }

  const clss = mk.newClassNameMap([
    "ROOT_CLASS",
    "PORT_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    backgroundColor: ['#f9f9f9', '#101010',],
    borderColor,
  });

  mk.newHTML('ROOT_HTML', `
    <header class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}" draggable="false"></header>
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
    display: flex;
    height: ${height};
    padding: ${paddingTopBottom} ${paddingRightLeft};
    border-bottom: 1px solid ${vars.borderColor.asVar()};
    background-color: ${vars.backgroundColor.asVar()};
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  @media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS}
    {
      height: 130px;
    }
  }
  `);
}
