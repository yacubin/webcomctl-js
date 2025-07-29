import { BaseControl } from 'webnetq-js';
import { NQDOM } from "webnetq-js";
import { IDX_CLASS, SIZE_CLASS, PSEUDO_CLASS, TRANSMITTERS_CLASS, CYCLETIME_CLASS, PDU_FORMAT_CLASS, PDU_PGN_CLASS, PDU_PRIORITY_CLASS, PDU_SA_CLASS, PDU_DA_CLASS } from 'uictmplt-loader!./template.mjs';

const toHexString = (value, targetLength)  => "0x" + value.toString(16).toUpperCase().padStart(targetLength, '0');

export class DBCMessage extends BaseControl {
  _idxElm;
  _sizeElm;
  _pseudoElm;
  _transmittersElm;
  _cycletimeElm;
  _pduFormatElm;
  _pduPgnElm;
  _pduPriorityElm;
  _pduSaElm;
  _pduDaElm;

  _init() {
    this._idxElm = NQDOM.getElementByClassName(this.element, IDX_CLASS);
    this._sizeElm = NQDOM.getElementByClassName(this.element, SIZE_CLASS);
    this._pseudoElm = NQDOM.getElementByClassName(this.element, PSEUDO_CLASS);
    this._transmittersElm = NQDOM.getElementByClassName(this.element, TRANSMITTERS_CLASS);
    this._cycletimeElm = NQDOM.getElementByClassName(this.element, CYCLETIME_CLASS);
    this._pduFormatElm = NQDOM.getElementByClassName(this.element, PDU_FORMAT_CLASS);
    this._pduPgnElm = NQDOM.getElementByClassName(this.element, PDU_PGN_CLASS);
    this._pduPriorityElm = NQDOM.getElementByClassName(this.element, PDU_PRIORITY_CLASS);
    this._pduSaElm = NQDOM.getElementByClassName(this.element, PDU_SA_CLASS);
    this._pduDaElm = NQDOM.getElementByClassName(this.element, PDU_DA_CLASS);
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
      if (this._pduPgnElm) {
        this._pduPgnElm.innerHTML = toHexString(params.pdu.pgn, 5);
      }
      if (this._pduPriorityElm) {
        this._pduPriorityElm.innerHTML = params.pdu.priority;
      }
      if (this._pduSaElm) {
        this._pduSaElm.innerHTML = toHexString(params.pdu.sa, 2);
      }
      if (this._pduDaElm) {
        this._pduDaElm.innerHTML = toHexString(params.pdu.da, 2);
      }
    }
    /*
    setStyleDisplay(CONST.ID.PDU_ROOT, !!params.pdu);*/
  }
};
