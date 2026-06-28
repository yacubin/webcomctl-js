import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
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

export const ROOT_CLASS: string = representClassNames("DBCDocument-ROOT_CLASS");
export const DOCUMENT: string = representClassNames("DBCDocument-DOCUMENT");
export const TITLE_CLASS: string = representClassNames("DBCDocument-TITLE_CLASS");
export const VERSION_CLASS: string = representClassNames("DBCDocument-VERSION_CLASS");
export const PROTOCOL_CLASS: string = representClassNames("DBCDocument-PROTOCOL_CLASS");
export const NEW_SYMBOLS: string = representClassNames("DBCDocument-NEW_SYMBOLS");
export const NEW_SYMBOLS_LIST: string = representClassNames("DBCDocument-NEW_SYMBOLS_LIST");
export const BAUDRATE: string = representClassNames("DBCDocument-BAUDRATE");
export const BTR1: string = representClassNames("DBCDocument-BTR1");
export const BTR2: string = representClassNames("DBCDocument-BTR2");
export const BIT_TIMING: string = representClassNames("DBCDocument-BIT_TIMING");

export const ROOT_HTML = `
  <div class="${DOCUMENT} ${ROOT_CLASS}">

    <h4>Document:<u class="${TITLE_CLASS}"></u></h4>
    
      <b>
        <h4>Version:<u class="${VERSION_CLASS}"></u></h4>
        <h4>Protocol:<u class="${PROTOCOL_CLASS}"></u></h4>
                            
        <s class="${BIT_TIMING}">
        <h6>Bit Timing</h6>
          <span>
            <span>Baudrate:</span><span class="${BAUDRATE}"></span>
            <span>BTR1:</span><span class="${BTR1}"></span>
            <span>BTR2:</span><span class="${BTR2}"></span>
          </span>
        </s>

      </b>

      <div class="${NEW_SYMBOLS}">
        <s>
          <h5>New Symbols</h5>
          <div class="${NEW_SYMBOLS_LIST}"></div>
        </s>
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

.${ROOT_CLASS} u,
.${ROOT_CLASS} s,
.${ROOT_CLASS} b
{
  text-decoration: none;
  font-weight: 400;
}


.${ROOT_CLASS} h4,
.${ROOT_CLASS} h5,
.${ROOT_CLASS} h6
{
  font-size: 1em;
  margin: 0px;
  padding: 0px;
}

.${ROOT_CLASS}
{
  font-size: 0.94em;
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${DOCUMENT}
{
  font-family:${TOOLBAR_DBC_FONT_SANS};
}

.${DOCUMENT} b,
.${NEW_SYMBOLS} > s > div
{
  border: 1px solid ${rpanel_bor};
  box-shadow: ${rpanel_bs};
  border-radius: 3px;
}

.${DOCUMENT},
.${DOCUMENT} b > span
{
  border: none;
  box-shadow: none;
}

.${DOCUMENT} b
{
  padding: 15px;
}

div.${DOCUMENT} > b > h4 + h4
{
  margin: 10px 0px 5px 0px;
}

.${DOCUMENT} b h4
{
  margin: 0px;
  padding-left: 20px;
  contain: paint;
  text-overflow: ellipsis;
}

.${DOCUMENT} b h4,
.${DOCUMENT} b span h5
{
  font-weight: 400;
}

.${DOCUMENT} b h4 > u
{
  padding-left: 5px;
}

.${DOCUMENT} b
{
  display: block;
  font-weight: 400;
}

.${NEW_SYMBOLS} > s > div
{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px 10px;
  padding: 20px 10px 20px 20px;
  font-size: 0.80em;
}

.${DOCUMENT} span
{
  gap: 5px 15px;
}

.${DOCUMENT} > span > span
{
  gap: 5px 25px;
}

.${ROOT_CLASS} s h6 + span
{
  display: grid;
  grid-template-columns: minmax(30px,auto) minmax(30px,auto);
  justify-content: start;
  grid-gap: 5px 10px;
  margin: 0px 0px 30px 30px;
  padding: 12px 20px 10px 20px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid ${rpanel_brate};
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

.${NEW_SYMBOLS} > s > h5
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

.${DOCUMENT} div.${NEW_SYMBOLS} s > div
{
  display: grid;
  grid-template-columns: auto auto auto auto auto; /* default */
}

@media (max-width: 900px)
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div {
    grid-template-columns: repeat(4, auto);
  }
}

@media (max-width: 750px)
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div {
    grid-template-columns: repeat(3, auto);
  }
}

@media (max-width: 600px)
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div {
    grid-template-columns: repeat(2, auto);
  }
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);

/* NOT SUPPORTED IN JSDOM

.${DOCUMENT} .${NEW_SYMBOLS}
{
  container-name: sidebar;
  container-type: inline-size;
}

@container sidebar (width < 900px) 
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto  auto;
  }
}

@container sidebar (width < 750px)
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto auto;
  }
}

@container sidebar (width < 600px)
{
  .${DOCUMENT} div.${NEW_SYMBOLS} s > div
  {
    grid-template-columns: auto auto;
  }
}
*/
