import { BaseControl } from 'webnetq-js';
import { VERSION_CLASS, PROTOCOL_CLASS, NEW_SYMBOLS_LIST, NEW_SYMBOLS, BAUDRATE, BTR1, BTR2, BIT_TIMING } from 'uictmplt-loader!./template.mjs';

export class DBCDocument extends BaseControl {
  _nsymElm;
  _versionElm;
  _protocolElm;
  _nsymListElm;
  _baudrateElm;
  _btr1Elm;
  _btr2Elm;
  _bttTiming;

  _init() {
    this._nsymElm = NQDOM.getElementByClassName(this.element, NEW_SYMBOLS);
    this._versionElm = NQDOM.getElementByClassName(this.element, VERSION_CLASS);
    this._protocolElm = NQDOM.getElementByClassName(this.element, PROTOCOL_CLASS);
    this._nsymListElm = NQDOM.getElementByClassName(this.element, NEW_SYMBOLS_LIST);
    this._baudrateElm = NQDOM.getElementByClassName(this.element, BAUDRATE);
    this._btr1Elm = NQDOM.getElementByClassName(this.element, BTR1);
    this._btr2Elm = NQDOM.getElementByClassName(this.element, BTR2);
    this._bttTiming = NQDOM.getElementByClassName(this.element, BIT_TIMING);
    }

  setValue(params) {
    if (this._versionElm) {
      this._versionElm.innerHTML = params.version;
    }
    if (this._protocolElm) {
      this._protocolElm.innerHTML = params.protocol;
    }
    if (this._nsymListElm) {
      nsymList.innerHTML = "";
      let isDisplay = (params.newSymbols && params.newSymbols.length != 0);
      if (isDisplay) {
        params.newSymbols.forEach((iter) => {
          const element = document.createElement('div');
          element.textContent = iter;
          nsymList.appendChild(element);
        });
      }
      this._nsymElm.style.display = isDisplay ? "" : "none";
    }

    if (params.bitTiming) {
      if (this._baudrateElm) {
        this._baudrateElm.innerHTML = params.bitTiming.baudrate;
      }
      if (this._btr1Elm) {
        this._btr1Elm.innerHTML = params.bitTiming.btr1;
      }
      if (this._btr1Elm) {
        this._btr1Elm.innerHTML = params.bitTiming.btr1;
      }
      if (this._btr2Elm) {
        this._btr2Elm.innerHTML = params.bitTiming.btr2;
      }
    }
    this._bttTiming.style.display = params.bitTiming ? "" : "none";
  }
};
