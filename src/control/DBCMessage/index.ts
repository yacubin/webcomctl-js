import { BaseControl, NQDOM } from "webnetq-js";
import { TITLE_CLASS, IDX_CLASS, SIZE_CLASS, PSEUDO_CLASS, TRANSMITTERS_CLASS, CYCLETIME_CLASS,
  PDU_FORMAT_CLASS, PDU_PGN_CLASS, PDU_PRIORITY_CLASS, PDU_SA_CLASS, PDU_DA_CLASS, PDU_ROOT_CLASS
// @ts-ignore
} from "uictmplt-loader!./template.ts";

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

export class DBCMessage extends BaseControl {
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
    this._titleElm = NQDOM.getElementByClassName(this.element, TITLE_CLASS);
    this._idxElm = NQDOM.getElementByClassName(this.element, IDX_CLASS);
    this._sizeElm = NQDOM.getElementByClassName(this.element, SIZE_CLASS);
    this._pseudoElm = NQDOM.getElementByClassName(this.element, PSEUDO_CLASS);
    this._transmittersElm = NQDOM.getElementByClassName(this.element, TRANSMITTERS_CLASS);
    this._cycletimeElm = NQDOM.getElementByClassName(this.element, CYCLETIME_CLASS);
    this._pduRootElm = NQDOM.getElementByClassName(this.element, PDU_ROOT_CLASS);
    this._pduFormatElm = NQDOM.getElementByClassName(this.element, PDU_FORMAT_CLASS);
    this._pduPgnElm = NQDOM.getElementByClassName(this.element, PDU_PGN_CLASS);
    this._pduPriorityElm = NQDOM.getElementByClassName(this.element, PDU_PRIORITY_CLASS);
    this._pduSaElm = NQDOM.getElementByClassName(this.element, PDU_SA_CLASS);
    this._pduDaElm = NQDOM.getElementByClassName(this.element, PDU_DA_CLASS);
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
