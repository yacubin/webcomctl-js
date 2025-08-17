import ControlMaker from "@/lib/ControlMaker";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_DBC_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("DBCDocument");

const rpanel_brate = '#aeaeae8f';
const rpanel_bor = '#aeaeae8f';
const rpanel_bs = "0px 1.6px 3.6px rgba(0,0,0,0.13), 0px 0px 2.9px rgba(0,0,0,0.11)";

const vars = mk.newCSSVariableMap({
  rpanel_col: ['black', '#eeeeee'],
  rpanel_bg: ['white', 'rgb(23, 23, 26)'],  
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "DOCUMENT",
  "TITLE_DOCUMENT",
  "VERSION_CLASS",
  "PROTOCOL_CLASS",
  "NEW_SYMBOLS",
  "NEW_SYMBOLS_LIST",
  "BAUDRATE",
  "BTR1",
  "BTR2",
  "BIT_TIMING",
]);

mk.newHTML('ROOT_HTML', `

  <div class="${clss.DOCUMENT} ${clss.ROOT_CLASS}">

    <h4>Document:<u class="${clss.TITLE_DOCUMENT}"></u></h4>
    
      <b>
        <h4>Version:<u class="${clss.VERSION_CLASS}"></u></h4>
        <h4>Protocol:<u class="${clss.PROTOCOL_CLASS}"></u></h4>
                            
        <s class="${clss.BIT_TIMING}">
        <h6>Bit Timing</h6>
          <span>
            <span>Baudrate:</span><span class="${clss.BAUDRATE}"></span>
            <span>BTR1:</span><span class="${clss.BTR1}"></span>
            <span>BTR2:</span><span class="${clss.BTR2}"></span>
          </span>
        </s>

      </b>

      <div class="${clss.NEW_SYMBOLS}">
        <s>
          <h5>New Symbols</h5>
          <div class="${clss.NEW_SYMBOLS_LIST}">
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

.${clss.ROOT_CLASS} u,
.${clss.ROOT_CLASS} s,
.${clss.ROOT_CLASS} b
{
  text-decoration: none;
  font-weight: 400;
}


.${clss.ROOT_CLASS} h4,
.${clss.ROOT_CLASS} h5,
.${clss.ROOT_CLASS} h6
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${clss.ROOT_CLASS}
{
  font-size: 0.94em;
  color: ${vars.rpanel_col.asVar()};
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.DOCUMENT}
{
  font-family:${TOOLBAR_DBC_FONT_SANS};
  padding-top: 15px;
}

.${clss.DOCUMENT} b,
.${clss.NEW_SYMBOLS} > s > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${rpanel_bs};
  border-radius: 3px;
}

.${clss.DOCUMENT},
.${clss.DOCUMENT} b > span
{
  border: none;
  box-shadow: none;
}

.${clss.DOCUMENT} b
{
  padding: 15px;
}

div.${clss.DOCUMENT} > b > h4 + h4
{
  margin: 10px 0px 5px 0px;
}

.${clss.DOCUMENT} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

.${clss.DOCUMENT} b h4,
.${clss.DOCUMENT} b span h5
{
  font-weight: 400;
}

.${clss.DOCUMENT} b h4 > u
{
  padding-left: 5px;
}

.${clss.DOCUMENT} b
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

.${clss.DOCUMENT} span
{
  gap: 5px 15px;
}

.${clss.DOCUMENT} > span > span
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

.${clss.DOCUMENT} .${clss.NEW_SYMBOLS}
{
  container-name: sidebar;
  container-type: inline-size;
}

@container sidebar (width < 900px)
{
  .${clss.DOCUMENT} div.${clss.NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto  auto;
  }
}

@container sidebar (width < 750px)
{
  .${clss.DOCUMENT} div.${clss.NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto;
  }
}

@container sidebar (width < 600px)
{
  .${clss.DOCUMENT} div.${clss.NEW_SYMBOLS} s > div
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