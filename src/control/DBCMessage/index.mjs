import { BaseControl } from 'webnetq-js';
import { NQDOM } from "webnetq-js";
import { IDX_CLASS, SIZE_CLASS, PSEUDO_CLASS, TRANSMITTERS_CLASS } from 'uictmplt-loader!./template.mjs';

const toHexString = (value, targetLength)  => "0x" + value.toString(16).toUpperCase().padStart(targetLength, '0');

export class DBCMessage extends BaseControl {
  _idxElm;
  _sizeElm;
  _pseudoElm;
  _transmittersElm;

  _init() {
    this._idxElm = NQDOM.getElementByClassName(this.element, IDX_CLASS);
    this._sizeElm = NQDOM.getElementByClassName(this.element, SIZE_CLASS);
    this._pseudoElm = NQDOM.getElementByClassName(this.element, PSEUDO_CLASS);
    this._transmittersElm = NQDOM.getElementByClassName(this.element, TRANSMITTERS_CLASS);
  }

  setValue(params) {
    if (this._idxElm) {
      this._idxElm.innerHTML = toHexString(params.id) + ` (${params.idBits}-bits)`;
    }
    if (this._sizeElm) {
      this._sizeElm.innerHTML = params.size;
    }
    if (this._pseudoElm) {
      this._pseudoElm.innerHTML = params.isPseudo ? "Yes" : "No";
    }
    if (this._transmittersElm) {
      this._transmittersElm.innerHTML = params.transmitters ? params.transmitters.join(", ") : "";
    }
    /*
    NQDOM.setTextContent(CONST.ID.TRANSMITTERS, params.transmitters ? params.transmitters.join(", ") : "");
    NQDOM.setTextContent(CONST.ID.CYCLETIME, params.cycleTime ? params.cycleTime + " ms" : "<null>");
    if (params.pdu) {
      NQDOM.setTextContent(CONST.ID.PDU_FORMAT, "PDU" + params.pdu.version);
      NQDOM.setTextContent(CONST.ID.PDU_PGN, toHexString(params.pdu.pgn, 5));
      NQDOM.setTextContent(CONST.ID.PDU_PRIORITY, params.pdu.priority);
      NQDOM.setTextContent(CONST.ID.PDU_SA, toHexString(params.pdu.sa, 2));
      NQDOM.setTextContent(CONST.ID.PDU_DA, toHexString(params.pdu.da, 2));
   }
    setStyleDisplay(CONST.ID.PDU_ROOT, !!params.pdu);*/
  }
};
