import { BaseControl } from 'webnetq-js';
import { NQDOM } from "webnetq-js";
import { STARTBIT_CLASS, SIZEINBITS_CLASS, BYTEORDER_CLASS, VALUETYPE_CLASS, FACTOR_CLASS, OFFSET_CLASS, MINIMUM_CLASS, MAXIMUM_CLASS, UNIT_CLASS, START_VALUE_CLASS, RECEIVERS_CLASS } from 'uictmplt-loader!./template.mjs';

export class DBCSignal extends BaseControl {
  _startBitElm;
  _sizeInBitsElm;
  _byteOrderElm;
  _isUnsignedElm;
  _factorElm;
  _offsetElm;
  _minimumElm;
  _maximumElm;
  _unitElm;
  _startValueElm;
  _receiversElm;

  _init() {
    this._startBitElm = NQDOM.getElementByClassName(this.element, STARTBIT_CLASS);
    this._sizeInBitsElm = NQDOM.getElementByClassName(this.element, SIZEINBITS_CLASS);
    this._byteOrderElm = NQDOM.getElementByClassName(this.element, BYTEORDER_CLASS);
    this._isUnsignedElm = NQDOM.getElementByClassName(this.element, VALUETYPE_CLASS);
    this._factorElm = NQDOM.getElementByClassName(this.element, FACTOR_CLASS);
    this._offsetElm = NQDOM.getElementByClassName(this.element,  OFFSET_CLASS);
    this._minimumElm = NQDOM.getElementByClassName(this.element, MINIMUM_CLASS);
    this._maximumElm = NQDOM.getElementByClassName(this.element, MAXIMUM_CLASS);
    this._unitElm = NQDOM.getElementByClassName(this.element, UNIT_CLASS);
    this._startValueElm = NQDOM.getElementByClassName(this.element, START_VALUE_CLASS);
    this._receiversElm = NQDOM.getElementByClassName(this.element, RECEIVERS_CLASS);
  }

  setElement(elm, val, defVal, normilize) {
    if (elm) {
      const v = (val !== undefined) ? val : defVal;
      elm.textContent = normilize ? normilize(v) : v;
    }
  }


  setValue(params) {
    this.setElement(this._startBitElm, params.startBit, "");
    this.setElement(this._sizeInBitsElm, params.sizeInBits, "");
    this.setElement(this._byteOrderElm, params.byteOrder, "", (value) => ((value === "LITTLE_ENDIAN") ? "Little" : "Big") + "Endian");
    this.setElement(this._isUnsignedElm, params.isUnsigned, "", (value) => value ? "Unsigned" : "Signed");
    this.setElement(this._factorElm, params.factor, "");
    this.setElement(this._offsetElm, params.offset, "");
    this.setElement(this._minimumElm, params.minimum, "");
    this.setElement(this._maximumElm, params.maximum, "");
    this.setElement(this._unitElm, params.unit, "");
    this.setElement(this._startValueElm, params.startValue, "<null>");
    this.setElement(this._receiversElm, params.receivers, "", (value) => value.join(','));
  }
};
