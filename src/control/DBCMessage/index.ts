import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, TITLE_CLASS, IDX_CLASS, SIZE_CLASS, PSEUDO_CLASS, TRANSMITTERS_CLASS, CYCLETIME_CLASS,
  PDU_FORMAT_CLASS, PDU_PGN_CLASS, PDU_PRIORITY_CLASS, PDU_SA_CLASS, PDU_DA_CLASS, PDU_ROOT_CLASS
} from "./template.node";

function setTextContent(elm: HTMLElement | undefined, val: string) {
  elm && (elm.textContent = val);
}

function setStyleDisplay(elm: HTMLElement | undefined, val: string) {
  elm && (elm.style.display = val);
}

function toHexString(value: number, targetLength: number) {
  return "0x" + value.toString(16).toUpperCase().padStart(targetLength, '0');
}

interface ValueParams {
  id: number;
  idBits: number;
  size: number;
  isPseudo?: boolean;
  transmitters?: string[];
  cycleTime?: number;
  pdu?: {
    version: number;
    pgn: number;
    priority: number;
    sa: number;
    da: number;
  };
};

export namespace DBCMessage {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _titleElm?: HTMLElement;
  private _idxElm?: HTMLElement;
  private _sizeElm?: HTMLElement;
  private _pseudoElm?: HTMLElement;
  private _transmittersElm?: HTMLElement;
  private _cycletimeElm?: HTMLElement;
  private _pduRootElm?: HTMLElement;
  private _pduFormatElm?: HTMLElement;
  private _pduPgnElm?: HTMLElement;
  private _pduPriorityElm?: HTMLElement;
  private _pduSaElm?: HTMLElement;
  private _pduDaElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, TITLE_CLASS);
    this._idxElm = NQDOM.getElementByClassName(super.element, IDX_CLASS);
    this._sizeElm = NQDOM.getElementByClassName(super.element, SIZE_CLASS);
    this._pseudoElm = NQDOM.getElementByClassName(super.element, PSEUDO_CLASS);
    this._transmittersElm = NQDOM.getElementByClassName(super.element, TRANSMITTERS_CLASS);
    this._cycletimeElm = NQDOM.getElementByClassName(super.element, CYCLETIME_CLASS);
    this._pduRootElm = NQDOM.getElementByClassName(super.element, PDU_ROOT_CLASS);
    this._pduFormatElm = NQDOM.getElementByClassName(super.element, PDU_FORMAT_CLASS);
    this._pduPgnElm = NQDOM.getElementByClassName(super.element, PDU_PGN_CLASS);
    this._pduPriorityElm = NQDOM.getElementByClassName(super.element, PDU_PRIORITY_CLASS);
    this._pduSaElm = NQDOM.getElementByClassName(super.element, PDU_SA_CLASS);
    this._pduDaElm = NQDOM.getElementByClassName(super.element, PDU_DA_CLASS);
  }

  public setTitle(title: string) {
    if (this._titleElm)
      this._titleElm.textContent = title;
  }

  public setValue(params: ValueParams) {
    setTextContent(this._idxElm, toHexString(params.id, (params.idBits > 12) ? 8 : 3) + ` (${params.idBits}-bits)`);
    setTextContent(this._sizeElm, String(params.size));
    setTextContent(this._pseudoElm, params.isPseudo ? "Yes" : "No");
    setTextContent(this._transmittersElm, params.transmitters ? params.transmitters.join(", ") : "");
    setTextContent(this._cycletimeElm, params.cycleTime ? params.cycleTime + " ms" : "<null>");

    if (params.pdu) {
      setTextContent(this._pduFormatElm, "PDU" + params.pdu.version);
      setTextContent(this._pduPgnElm, toHexString(params.pdu.pgn, 5));
      setTextContent(this._pduPriorityElm, String(params.pdu.priority));
      setTextContent(this._pduSaElm, toHexString(params.pdu.sa, 2));
      setTextContent(this._pduDaElm, toHexString(params.pdu.da, 2));
      setStyleDisplay(this._pduRootElm, "");
    }
    else {
      setStyleDisplay(this._pduRootElm, "none");
    }
  }
};

} // namespace DBCMessage
