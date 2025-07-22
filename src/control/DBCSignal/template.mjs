import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_DBC_FONT_SANS } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCSignal', import.meta.url);

const rpanel_brate = '#aeaeae8f';
const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)',],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "SIGNAL",
  "dbc_title_signal",
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.ROOT_CLASS} ${clss.SIGNAL}">

    <h4>Signal:<u class="${clss.dbc_title_signal}"></u></h4>

    <div>

      <span>
        <div>
          <h5>Start Bit:</h5>
          <u id="dbc-signal-startbit"></u>
        </div>

        <div>
          <h5>Signal Size:</h5>
          <u id="dbc-signal-sizeinbits"></u>
        </div>

          <div>
            <h5>Byte Order:</h5>
            <u id="dbc-signal-byteorder"></u>
          </div>

        <div>
          <h5>Value Type:</h5>
          <u id="dbc-signal-valuetype"></u>
        </div>

        <div>
          <h5>Factor:</h5>
          <u id="dbc-signal-factor"></u>
        </div>

        <div>
          <h5>Offset:</h5>
          <u id="dbc-signal-offset"></u>
        </div>

        <div>
          <h5>Minimum:</h5>
          <u id="dbc-signal-minimum"></u>
        </div>

        <div>
          <h5>Maximum:</h5>
          <u id="dbc-signal-maximum"></u>
        </div>

        <div>
          <h5>Unit:</h5>
          <u id="dbc-signal-unit"></u>
        </div>
                            
        <div>
          <h5>Receivers:</h5>
          <u id="dbc-signal-receivers"></u>
        </div>

        <div>
          <h5>Start Value:</h5>
          <u id="dbc-signal-start-value"></u>
        </div>
      </span>
                    
    </div>

  </div>

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

.${clss.ROOT_CLASS}
{
  font-family:${TOOLBAR_DBC_FONT_SANS};
}

.${clss.ROOT_CLASS} h5
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

.${clss.ROOT_CLASS} > h4 
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${clss.SIGNAL}
{
  padding-top: 15px;
}

.${clss.SIGNAL} > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${clss.ROOT_CLASS} > h4 > u
{
  text-decoration: none;
  padding-left: 5px;
  text-overflow: ellipsis;
}

.${clss.ROOT_CLASS} > div span
{
  display: table;
  border-spacing: 0px 5px;
  padding: 20px 30px 20px 30px;
}

.${clss.ROOT_CLASS} > div span div
{
  display: table-row-group;
}

.${clss.ROOT_CLASS} > div span div h5,
.${clss.ROOT_CLASS} > div span div u
{
  display: table-cell;
}

.${clss.ROOT_CLASS} > div span div u
{
  padding-left: 15px;
}

div.${clss.SIGNAL} > span
{
  gap: 5px 25px;
}

.${clss.ROOT_CLASS} > div span span
{
  margin: 0px;
  border: none;
  box-shadow: none;
  padding: 0px;
}

.${clss.ROOT_CLASS} > div > span h5
{
  font-weight: 400;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}