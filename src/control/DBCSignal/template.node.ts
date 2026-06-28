import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCSignal");

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bs: '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)',  
});

export const ROOT_CLASS: string = representClassNames("DBCSignal-ROOT_CLASS");
export const SIGNAL: string = representClassNames("DBCSignal-SIGNAL");
export const TITLE_CLASS: string = representClassNames("DBCSignal-TITLE_CLASS");
export const STARTBIT_CLASS: string = representClassNames("DBCSignal-STARTBIT_CLASS");
export const SIZEINBITS_CLASS: string = representClassNames("DBCSignal-SIZEINBITS_CLASS");
export const BYTEORDER_CLASS: string = representClassNames("DBCSignal-BYTEORDER_CLASS");
export const VALUETYPE_CLASS: string = representClassNames("DBCSignal-VALUETYPE_CLASS");
export const FACTOR_CLASS: string = representClassNames("DBCSignal-FACTOR_CLASS");
export const OFFSET_CLASS: string = representClassNames("DBCSignal-OFFSET_CLASS");
export const MINIMUM_CLASS: string = representClassNames("DBCSignal-MINIMUM_CLASS");
export const MAXIMUM_CLASS: string = representClassNames("DBCSignal-MAXIMUM_CLASS");
export const UNIT_CLASS: string = representClassNames("DBCSignal-UNIT_CLASS");
export const START_VALUE_CLASS: string = representClassNames("DBCSignal-START_VALUE_CLASS");
export const RECEIVERS_CLASS: string = representClassNames("DBCSignal-RECEIVERS_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${SIGNAL}">

    <h4>Signal:<u class="${TITLE_CLASS}"></u></h4>

    <div>

      <span>
        <div>
          <h5>Start Bit:</h5>
          <u class="${STARTBIT_CLASS}"></u>
        </div>

        <div>
          <h5>Signal Size:</h5>
          <u class="${SIZEINBITS_CLASS}"></u>
        </div>

          <div>
            <h5>Byte Order:</h5>
            <u class="${BYTEORDER_CLASS}"></u>
          </div>

        <div>
          <h5>Value Type:</h5>
          <u class="${VALUETYPE_CLASS}"></u>
        </div>

        <div>
          <h5>Factor:</h5>
          <u class="${FACTOR_CLASS}"></u>
        </div>

        <div>
          <h5>Offset:</h5>
          <u class="${OFFSET_CLASS}"></u>
        </div>

        <div>
          <h5>Minimum:</h5>
          <u class="${MINIMUM_CLASS}"></u>
        </div>

        <div>
          <h5>Maximum:</h5>
          <u class="${MAXIMUM_CLASS}"></u>
        </div>

        <div>
          <h5>Unit:</h5>
          <u class="${UNIT_CLASS}"></u>
        </div>
                            
        <div>
          <h5>Receivers:</h5>
          <u class="${RECEIVERS_CLASS}"></u>
        </div>

        <div>
          <h5>Start Value:</h5>
          <u class="${START_VALUE_CLASS}"></u>
        </div>
      </span>
                    
    </div>

  </div>

`;

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS} * 
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  font-size: 0.94em;
  font-family:${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
}

.${ROOT_CLASS} h4,
.${ROOT_CLASS} h5
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${ROOT_CLASS} u
{
  text-decoration: none;
  font-weight: 400;
}

.${ROOT_CLASS} > h4 
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${SIGNAL} > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${ROOT_CLASS} > h4 > u
{
  text-decoration: none;
  padding-left: 5px;
  text-overflow: ellipsis;
}

.${ROOT_CLASS} > div span
{
  display: table;
  border-spacing: 0px 5px;
  padding: 20px 30px 20px 30px;
}

.${ROOT_CLASS} > div span div
{
  display: table-row-group;
}

.${ROOT_CLASS} > div span div h5,
.${ROOT_CLASS} > div span div u
{
  display: table-cell;
}

.${ROOT_CLASS} > div span div u
{
  padding-left: 15px;
}

.${ROOT_CLASS} > div > span h5
{
  font-weight: 400;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);
