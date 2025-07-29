import { BaseControl } from 'webnetq-js';
import { NQDOM } from "webnetq-js";
import { IDX_CLASS, SIZE_CLASS, PSEUDO_CLASS, TRANSMITTERS_CLASS, CYCLETIME_CLASS, PDU_FORMAT_CLASS, PDU_PGN_CLASS } from 'uictmplt-loader!./template.mjs';

const toHexString = (value, targetLength)  => "0x" + value.toString(16).toUpperCase().padStart(targetLength, '0');

export class DBCMessage extends BaseControl {
  _idxElm;
  _sizeElm;
  _pseudoElm;
  _transmittersElm;
  _cycletimeElm;
  _pduFormatElm;

  _init() {
    this._idxElm = NQDOM.getElementByClassName(this.element, IDX_CLASS);
    this._sizeElm = NQDOM.getElementByClassName(this.element, SIZE_CLASS);
    this._pseudoElm = NQDOM.getElementByClassName(this.element, PSEUDO_CLASS);
    this._transmittersElm = NQDOM.getElementByClassName(this.element, TRANSMITTERS_CLASS);
    this._cycletimeElm = NQDOM.getElementByClassName(this.element, CYCLETIME_CLASS);
    this._pduFormatElm = NQDOM.getElementByClassName(this.element, PDU_FORMAT_CLASS);
    this._pduPgn = NQDOM.getElementByClassName(this.element, PDU_PGN_CLASS);
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
    if (this._cycletimeElm) {
      this._cycletimeElm.innerHTML = params.cycleTime ? params.cycleTime + " ms" : "<null>";
    }
    if (params.pdu) {
      if (this._pduFormatElm) {
        this._pduFormatElm.innerHTML = "PDU" + params.pdu.version;
      }
      if (_pduPgn) {
        this._pduPgn.innerHTML = toHexString(params.pdu.pgn, 5);
      }
      
    }
      /*
      NQDOM.setTextContent(CONST.ID.PDU_PGN, toHexString(params.pdu.pgn, 5));
      NQDOM.setTextContent(CONST.ID.PDU_PRIORITY, params.pdu.priority);
      NQDOM.setTextContent(CONST.ID.PDU_SA, toHexString(params.pdu.sa, 2));
      NQDOM.setTextContent(CONST.ID.PDU_DA, toHexString(params.pdu.da, 2));
   }
    setStyleDisplay(CONST.ID.PDU_ROOT, !!params.pdu);*/
  }
};
