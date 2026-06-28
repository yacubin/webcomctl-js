import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCMessage");

const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)',],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

export const ROOT_CLASS: string = representClassNames("DBCMessage-ROOT_CLASS");
export const MESSAGE: string = representClassNames("DBCMessage-MESSAGE");
export const TITLE_CLASS: string = representClassNames("DBCMessage-TITLE_CLASS");
export const SIZE_CLASS: string = representClassNames("DBCMessage-SIZE_CLASS");
export const PSEUDO_CLASS: string = representClassNames("DBCMessage-PSEUDO_CLASS");
export const TRANSMITTERS_CLASS: string = representClassNames("DBCMessage-TRANSMITTERS_CLASS");
export const CYCLETIME_CLASS: string = representClassNames("DBCMessage-CYCLETIME_CLASS");
export const PDU_ROOT_CLASS: string = representClassNames("DBCMessage-PDU_ROOT_CLASS");
export const PDU_FORMAT_CLASS: string = representClassNames("DBCMessage-PDU_FORMAT_CLASS");
export const PDU_PGN_CLASS: string = representClassNames("DBCMessage-PDU_PGN_CLASS");
export const PDU_PRIORITY_CLASS: string = representClassNames("DBCMessage-PDU_PRIORITY_CLASS");
export const PDU_DA_CLASS: string = representClassNames("DBCMessage-PDU_DA_CLASS");
export const PDU_SA_CLASS: string = representClassNames("DBCMessage-PDU_SA_CLASS");
export const IDX_CLASS: string = representClassNames("DBCMessage-IDX_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${MESSAGE}">

  <h4>Massage:<u class="${TITLE_CLASS}"></u></h4>

    <b>
      <span>
        <div>
          <h5>ID:</h5><u class="${IDX_CLASS}"></u>
        </div>
        <div>
          <h5>DLC:</h5><u class="${SIZE_CLASS}"></u>
        </div>
        <div>
          <h5>Pseudo:</h5><u class="${PSEUDO_CLASS}"></u>
        </div>
        <div>
          <h5>Senders:</h5><u class="${TRANSMITTERS_CLASS}"></u>
        </div>
        <div>
          <h5>Cycle time:</h5><u class="${CYCLETIME_CLASS}"></u>
        </div>
      </span>

      <s class="${PDU_ROOT_CLASS}">
        <h6>Protocol data unit</h6>
        <span>
          <span>Format:</span><span class="${PDU_FORMAT_CLASS}"></span>
          <span>PGN:</span><span class="${PDU_PGN_CLASS}"></span>
          <span>Priority:</span><span class="${PDU_PRIORITY_CLASS}"></span>
          <span>Destination:</span><span class="${PDU_DA_CLASS}"></span>
          <span>Source:</span><span class="${PDU_SA_CLASS}"></span>
        </span>
      </s>

    </b>

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

.${ROOT_CLASS} b,
.${ROOT_CLASS} > b > div span
{
  display: block;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} h4,
.${ROOT_CLASS} h5,
.${ROOT_CLASS} h6
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${ROOT_CLASS} u,
.${ROOT_CLASS} s,
.${ROOT_CLASS} b
{
  text-decoration: none;
  font-weight: 400;
}

.${ROOT_CLASS}
{
  font-size: 0.94em;
  font-family: ${TOOLBAR_DBC_FONT_SANS};
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
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

div.${ROOT_CLASS} b
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

div.${ROOT_CLASS},
div.${ROOT_CLASS} b > span,
{
  border: none;
  box-shadow: none;
}

div.${ROOT_CLASS} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

div.${ROOT_CLASS} b h4,
div.${ROOT_CLASS} b span h5
{
  font-weight: 400;
}

div.${ROOT_CLASS} b h4 > u
{
  padding-left: 5px;
}

.${ROOT_CLASS} > h4,
{
  font-size: 1.67em;
  font-weight: 600;
  text-decoration: none;
  padding-left: 10px;
  text-overflow: ellipsis;
  contain: paint;
  margin-bottom: 10px;
}

.${ROOT_CLASS} > h4 > u
{
  text-decoration: none;
  padding-left: 5px;
  text-overflow: ellipsis;
}

.${ROOT_CLASS} > div > h5,
.${ROOT_CLASS} > h5
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

.${ROOT_CLASS} b s > h4
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

.${ROOT_CLASS} s > div > div
{
  padding:0px 20px 0px 20px;
}

.${ROOT_CLASS} s h6 + span
{
  display: grid;
  grid-template-columns: minmax(30px,auto) minmax(30px,auto);
  justify-content: start;
  grid-gap: 5px 10px;
  margin: 0px 0px 30px 30px;
  padding: 10px 20px 10px 20px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid ${rpanel_bor};
  overflow: hidden;
  box-shadow: none;
}

.${ROOT_CLASS} s > h6
{
  font-weight: 400;
  position: relative;
  top: 8px;
  left: 50px;
  color: ${vars.rpanel_col.asVar()};
  background-color: ${vars.rpanel_bg.asVar()};
  width: max-content;
}

.${ROOT_CLASS} s > span > span
{
  display: block;
  padding: 0px 10px;
  margin: 2px 0px;
  border: none;
  box-shadow: none;
}

.${ROOT_CLASS} s > span > span:nth-child(1),
.${ROOT_CLASS} s > span > span:nth-child(2)
{
  margin-top: 10px;
}

.${ROOT_CLASS} span
{
  display: table;
  border-spacing: 0px 5px;
  padding: 20px 30px 20px 30px;
}

.${ROOT_CLASS} span div
{
  display: table-row-group;
}

.${ROOT_CLASS} span div h5,
.${ROOT_CLASS} span div u
{
  display: table-cell;
}

.${ROOT_CLASS} span div u
{
  padding-left: 15px;
}

.${ROOT_CLASS} s > span > span:nth-last-child(2),
.${ROOT_CLASS} s > span > span:nth-last-child(1)
{
  margin-bottom: 10px;
}

.${ROOT_CLASS} s > span > span:nth-child(2n + 1)
{
  padding: 0px 0px 0px 10px;
}

.${ROOT_CLASS} s > span > span:nth-child(2n)
{
  padding: 0px 10px 0px 0px;
}

.${ROOT_CLASS} > span
{
  gap: 5px 25px;
}

.${ROOT_CLASS} span span,
.${ROOT_CLASS} > b > span span
{
  margin: 0px;
  border: none;
  box-shadow: none;
  padding: 0px;
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
