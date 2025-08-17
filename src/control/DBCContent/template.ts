import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCContent");

const rpanel_brate = '#aeaeae8f';
const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "NEW_SYMBOLS",
  "SIGNAL",
  "document",
  "message",
  "attribute",
  "group",
  "dbc_group_signals",
  "dbc_title_document",
  "doc_version",
  "dbc_doc_protocol",
  "dbc_title_message",
  "dbc_title_signal",
  "dbc_title_group",
  "dbc_view_document",
  "dbc_view_message",
  "dbc_view_signal",
  "dbc_view_group",
  "dbc_comment_root",
  "dbc_comment_text",
  "dbc_attributes_root",
  "dbc_attributes_list",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">

  <div class="${clss.document}">

    <h4>Document:<u class="${clss.dbc_title_document}"></u></h4>
    
      <b>
        <h4>Version:<u id="${clss.doc_version}"></u></h4>
        <h4>Protocol:<u id="${clss.dbc_doc_protocol}"></u></h4>
                            
        <s id="dbc-bittiming">
        <h6>Bit Timing</h6>
          <span>
            <span>Baudrate:</span><span id="dbc-bs-baudrate"></span>
            <span>BTR1:</span><span id="dbc-bs-btr1"></span>
            <span>BTR2:</span><span id="dbc-bs-btr2"></span>
          </span>
        </s>

      </b>

      <div id="dbc-new-symbols-root" class="${clss.NEW_SYMBOLS}">
        <s>
          <h5>New Symbols</h5>
          <div id="dbc-doc-nsymlist"></div>
        </s>
      </div>

  </div>

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

  <div class="${clss.SIGNAL}">

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

  <div class="${clss.group}">
    <h4>Group:<u class="${clss.dbc_title_group}"></u></h4>
    <ul class="${clss.dbc_group_signals}"></ul>
  </div>

  <div class="${clss.dbc_attributes_root} ${clss.attribute}">
    <h5>Attributes</h5>
    <div>
      <span class="${clss.dbc_attributes_list}"></span>
    </div>
  </div>

  <b class="${clss.dbc_comment_root}">
    <h5>Comment</h5>
    <div class="${clss.dbc_comment_text}"></div>
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

.${clss.document},
.${clss.message},
.${clss.SIGNAL},
.${clss.group}
{
  display: none;
}

.${clss.ROOT_CLASS} b,
.${clss.dbc_view_document} .${clss.document},
.${clss.dbc_view_message} .${clss.message},
.${clss.dbc_view_signal} .${clss.SIGNAL},
.${clss.dbc_view_group} .${clss.group},
.${clss.ROOT_CLASS} > b > div span
{
  display: block;
}

.${clss.ROOT_CLASS}
{
  grid-area: right;
  align-self: start;
  width: 100%;
  height: inherit;
  min-width: 450px;
  padding: 0px 15px 15px 15px;
  color: ${vars.rpanel_col.asVar()};
  font-family:${TOOLBAR_DBC_FONT_SANS};
  font-size: 0.94em;
  box-sizing: border-box;
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

div.${clss.document},
div.${clss.SIGNAL},
div.${clss.message},
div.${clss.group}
{
  padding-top: 15px;
}

.${clss.ROOT_CLASS} > div,
.${clss.ROOT_CLASS} > div.${clss.attribute} > div,
.${clss.ROOT_CLASS} > b > div,
.${clss.ROOT_CLASS} > div.${clss.SIGNAL} > div,
div.${clss.document} b,
div.${clss.message} b,
div.${clss.SIGNAL} b,
div.${clss.group} b,
div.${clss.group} > ul,
.${clss.NEW_SYMBOLS} > s > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${clss.ROOT_CLASS} > div.${clss.document},
.${clss.ROOT_CLASS} > div.${clss.attribute},
.${clss.ROOT_CLASS} > div.${clss.message},
.${clss.ROOT_CLASS} > div.${clss.SIGNAL},
.${clss.ROOT_CLASS} > div.${clss.group},
.${clss.ROOT_CLASS} div.${clss.document} b > span,
.${clss.ROOT_CLASS} div.${clss.message} b > span,
.${clss.ROOT_CLASS} div.${clss.SIGNAL} b > span,
.${clss.ROOT_CLASS} div.${clss.group} b > span
{
  border: none;
  box-shadow: none;
}

.${clss.ROOT_CLASS} div.${clss.document} b
{
  padding: 15px;
}

div.${clss.document} > b > h4 + h4
{
  margin: 10px 0px 5px 0px;
}

div.${clss.document} b h4,
div.${clss.message} b h4,
div.${clss.SIGNAL} b h4,
div.${clss.group} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

div.${clss.document} b h4,
div.${clss.message} b h4,
div.${clss.SIGNAL} b h4,
div.${clss.group} b h4,
div.${clss.document} b span h5,
div.${clss.message} b span h5,
div.${clss.SIGNAL} b span h5,
div.${clss.group} b span h5
{
  font-weight: 400;
}

div.${clss.document} b h4 > u,
div.${clss.message} b h4 > u,
div.${clss.SIGNAL} b h4 > u,
div.${clss.group} b h4 > u
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

.${clss.ROOT_CLASS} div.${clss.document} b
{
  display: block;
  font-weight: 400;
}

.${clss.NEW_SYMBOLS} > s > div
{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px 10px;
  padding: 20px 10px 20px 20px;
  font-size: 0.80em;
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

.${clss.ROOT_CLASS} > div.${clss.document} > span > span,
.${clss.ROOT_CLASS} > div.${clss.message} > span,
.${clss.ROOT_CLASS} > div.${clss.SIGNAL} > span
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

div.${clss.group} > ul
{
  padding: 20px 30px 20px 30px;
}

div.${clss.group} > ul > li
{
  margin-bottom: 5px;
}

div.${clss.group} > ul > li:last-child
{
  margin-bottom: 0px;
}

.${clss.ROOT_CLASS} .${clss.document} .${clss.NEW_SYMBOLS}
{
  container-name: sidebar;
  container-type: inline-size;
}

@container sidebar (width < 900px)
{
  .${clss.ROOT_CLASS} div div.${clss.NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto  auto;
  }
}

@container sidebar (width < 750px)
{
  .${clss.ROOT_CLASS} div div.${clss.NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto;
  }
}

@container sidebar (width < 600px)
{
  .${clss.ROOT_CLASS} div div.${clss.NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto;
  }
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
