import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBCMessage', import.meta.url);

const rpanel_brate = '#aeaeae8f';
const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)',],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "message",
  "dbc_title_message",
]);

mk.newHTML('ROOT_HTML', `

<div class="${clss.message}">

  <h4>Massage:<u class="${clss.dbc_title_message}"></u></h4>

    <b>
      <span>
        <div>
          <h5>ID:</h5><u id="dbc-message-idx"></u>
        </div>
        <div>
          <h5>DLC:</h5><u id="dbc-message-size"></u>
        </div>
        <div>
          <h5>Pseudo:</h5><u id="dbc-message-pseudo"></u>
        </div>
        <div>
          <h5>Senders:</h5><u id="dbc-message-transmitters"></u>
        </div>
        <div>
          <h5>Cycle time:</h5><u id="dbc-message-cycletime"></u>
        </div>
      </span>

      <s id="dbc-message-pdu-root">
        <h6>Protocol data unit</h6>
        <span>
          <span>Format:</span><span id="dbc-message-pdu-format"></span>
          <span>PGN:</span><span id="dbc-message-pdu-pgn"></span>
          <span>Priority:</span><span id="dbc-message-pdu-priority"></span>
          <span>Destination:</span><span id="dbc-message-pdu-da"></span>
          <span>Source:</span><span id="dbc-message-pdu-sa"></span>
        </span>
      </s>

    </b>

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

.${clss.message}
{
  display: none;
}

.${clss.ROOT_CLASS} b,
.${clss.dbc_view_message} .${clss.message},
.${clss.ROOT_CLASS} > b > div span
{
  display: block;
}

.${clss.ROOT_CLASS}
{

}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} h4,
.${clss.ROOT_CLASS} h5,
.${clss.ROOT_CLASS} h6
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS} u,
.${clss.ROOT_CLASS} s,
.${clss.ROOT_CLASS} b
{
  text-decoration: none;
  font-weight: 400;
}

div.${clss.message}
{
  padding-top: 15px;
}

.${clss.ROOT_CLASS} > div,
.${clss.ROOT_CLASS} > b > div,
div.${clss.message} b
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${clss.ROOT_CLASS} > div.${clss.message},
.${clss.ROOT_CLASS} div.${clss.message} b > span,
{
  border: none;
  box-shadow: none;
}

div.${clss.message} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

div.${clss.message} b h4,
div.${clss.message} b span h5
{
  font-weight: 400;
}

div.${clss.message} b h4 > u
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
.${clss.ROOT_CLASS} > b > h5
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

.${clss.ROOT_CLASS} > div.${clss.document} span
{
  gap: 5px 15px;
}

.${clss.ROOT_CLASS} > div.${clss.message} > span
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

`);

export function buildComponent()
{
  return mk.buildComponent();
}