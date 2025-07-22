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

div.${clss.SIGNAL}
{
  padding-top: 15px;
}

div.${clss.SIGNAL} > div
div.${clss.SIGNAL} b
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

div.${clss.SIGNAL},
div.${clss.SIGNAL} b > span,
{
  border: none;
  box-shadow: none;
}

div.${clss.SIGNAL} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

div.${clss.SIGNAL} b h4,
div.${clss.SIGNAL} b span h5
{
  font-weight: 400;
}

div.${clss.SIGNAL} b h4 > u
{
  padding-left: 5px;
}

.${clss.ROOT_CLASS} > div > h4,
.${clss.ROOT_CLASS} > b > h4
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${clss.ROOT_CLASS} > div > h4 > u,
.${clss.ROOT_CLASS} > b > h4 > u
{
  text-decoration: none;
  padding-left: 5px;
  text-overflow: ellipsis;
}

.${clss.ROOT_CLASS} > div > div > h5,
.${clss.ROOT_CLASS} > div > h5,
.${clss.ROOT_CLASS} > b > h5,
.${clss.NEW_SYMBOLS} > s > h5
{
  line-height: 15px;
  font-size: 1.13em;
  font-weight: 600;
  position: relative;
  top: 8px;
  left: 20px;
  width: max-content;
  padding-top: 10px;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${clss.ROOT_CLASS} > b > div
{
  display: block;
  padding: 20px 30px 20px 30px;
  font-weight: 400;
}

.${clss.ROOT_CLASS} > div b s > h4
{
  position: relative;
  top: 8px;
  left: 32px;
  padding: 0px;
  width: max-content;
  font-weight: 400;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${clss.ROOT_CLASS} s > div > div
{
  padding:0px 20px 0px 20px;
}

div.${clss.ROOT_CLASS} s h6 + span
{
  display: grid;
  grid-template-columns: minmax(30px,auto) minmax(30px,auto);
  justify-content: start;
  grid-gap: 5px 10px;
  margin: 0px 0px 30px 30px;
  padding: 10px 20px 10px 20px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid ${rpanel_brate};
  overflow: hidden;
  box-shadow: none;
}

.${clss.ROOT_CLASS} s > h6
{
  font-weight: 400;
  position: relative;
  top: 8px;
  left: 50px;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
  width: max-content;
}

.${clss.ROOT_CLASS} s > span > span
{
  display: block;
  padding: 0px 10px;
  margin: 2px 0px;
  border: none;
  box-shadow: none;
}

.${clss.ROOT_CLASS} s > span > span:nth-child(1),
.${clss.ROOT_CLASS} s > span > span:nth-child(2)
{
  margin-top: 10px;
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

.${clss.ROOT_CLASS} s > span > span:nth-last-child(2),
.${clss.ROOT_CLASS} s > span > span:nth-last-child(1)
{
  margin-bottom: 10px;
}

.${clss.ROOT_CLASS} s > span > span:nth-child(2n + 1)
{
  padding: 0px 0px 0px 10px;
}

.${clss.ROOT_CLASS} s > span > span:nth-child(2n)
{
  padding: 0px 10px 0px 0px;
}

div.${clss.SIGNAL} > span
{
  gap: 5px 25px;
}

.${clss.ROOT_CLASS} > div span span,
.${clss.ROOT_CLASS} > div > b > span span
{
  margin: 0px;
  border: none;
  box-shadow: none;
  padding: 0px;
}

.${clss.ROOT_CLASS} > div > div > span h5
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