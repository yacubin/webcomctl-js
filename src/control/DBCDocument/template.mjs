import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBCDocument', import.meta.url);

const rpanel_brate = '#aeaeae8f';
const rpanel_bor = '#aeaeae8f';

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)',],
  rpanel_bs: ['0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)', '0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)'],
  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "document",
  "dbc_title_document",
  "dbc_doc_version",
  "dbc_doc_protocol",
  "dbc_new_symbols",
]);

mk.newHTML('ROOT_HTML', `

  <div class="${clss.document} ${clss.ROOT_CLASS}">

    <h4>Document:<u class="${clss.dbc_title_document}"></u></h4>
    
      <b>
        <h4>Version:<u id="${clss.dbc_doc_version}"></u></h4>
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

      <div id="dbc-new-symbols-root" class="${clss.dbc_new_symbols}">
        <s>
          <h5>New Symbols</h5>
          <div id="dbc-doc-nsymlist">
            <div>BA_DEF_</div>
            <div>BA_</div>
            <div>VAL_</div>
            <div>CAT_DEF_</div>
            <div>CAT_</div>
            <div>FILTER</div>
            <div>BA_DEF_DEF_</div>
            <div>EV_DATA_</div>
            <div>ENVVAR_DATA_</div>
            <div>SGTYPE_</div>
            <div>SGTYPE_VAL_</div>
            <div>BA_DEF_SGTYPE_</div>
            <div>BA_SGTYPE_</div>
            <div>SIG_TYPE_REF_</div>
            <div>VAL_TABLE_</div>
            <div>SIG_GROUP_</div>
            <div>SIG_VALTYPE_</div>
            <div>SIGTYPE_VALTYPE_</div>
            <div>BO_TX_BU_</div>
            <div>BA_DEF_REL_</div>
            <div>BA_REL_</div>
            <div>BA_DEF_DEF_REL_</div>
            <div>BU_SG_REL_</div>
            <div>BU_EV_REL_</div>
            <div>BU_BO_REL_</div>
            <div>SG_MUL_VAL_</div>
          </div>
        </s>
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

.${clss.document}
{
  padding-top: 15px;
}

.${clss.document} b,
.${clss.dbc_new_symbols} > s > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${vars.rpanel_bs.asVar()};
  border-radius: 3px;
}

.${clss.document},
.${clss.document} b > span
{
  border: none;
  box-shadow: none;
}

.${clss.document} b
{
  padding: 15px;
}

div.${clss.document} > b > h4 + h4
{
  margin: 10px 0px 5px 0px;
}

.${clss.document} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

.${clss.document} b h4,
.${clss.document} b span h5
{
  font-weight: 400;
}

.${clss.document} b h4 > u
{
  padding-left: 5px;
}

.${clss.dbc_new_symbols} > s > h5
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

.${clss.document} b
{
  display: block;
  font-weight: 400;
}

.${clss.dbc_new_symbols} > s > div
{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px 10px;
  padding: 20px 10px 20px 20px;
  font-size: 0.80em;
}

.${clss.document} span
{
  gap: 5px 15px;
}

.${clss.document} > span > span
{
  gap: 5px 25px;
}

.${clss.ROOT_CLASS} s h6 + span
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
`);

export function buildComponent()
{
  return mk.buildComponent();
}