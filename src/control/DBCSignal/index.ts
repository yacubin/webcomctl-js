import { BaseControl, NQDOM } from "webnetq-js";
import { STARTBIT_CLASS, SIZEINBITS_CLASS, BYTEORDER_CLASS, VALUETYPE_CLASS,
  FACTOR_CLASS, OFFSET_CLASS, MINIMUM_CLASS, MAXIMUM_CLASS, UNIT_CLASS,
  START_VALUE_CLASS, RECEIVERS_CLASS, TITLE_CLASS
// @ts-ignore
} from "uictmplt-loader!./template.ts";

function setTextContent(elm: HTMLElement | undefined, val: string | undefined, defVal?: string) {
  if (elm) {
    const v = (val !== undefined) ? val : (defVal !== undefined ? defVal : "");
    elm.textContent = v;
  }
}

type ByteOrder = "LITTLE_ENDIAN" | "BIG_ENDIAN";
interface ValueParams {
  startBit?: number;
  sizeInBits?: number;
  byteOrder?: ByteOrder;
  isUnsigned?: boolean;
  factor?: number;
  offset?: number;
  minimum?: number;
  maximum?: number;
  unit?: string;
  startValue?: number;
  receivers?: string[];
};

function numberToText(value: any) {
  if (typeof value == "number")
    return String(value);
}

function byteOrdertoToText(value?: ByteOrder) {
  if (typeof value == "string")
    return ((value === "LITTLE_ENDIAN") ? "Little" : "Big") + "Endian";
}

function unsignedToText(value?: boolean) {
  if (typeof value == "boolean")
    return value ? "Unsigned" : "Signed";
}

function receiversToText(value?: string[]) {
  if (Array.isArray(value))
    return value.join(',');
}

export class DBCSignal extends BaseControl {
  private _titleElm?: HTMLElement;
  private _startBitElm?: HTMLElement;
  private _sizeInBitsElm?: HTMLElement;
  private _byteOrderElm?: HTMLElement;
  private _isUnsignedElm?: HTMLElement;
  private _factorElm?: HTMLElement;
  private _offsetElm?: HTMLElement;
  private _minimumElm?: HTMLElement;
  private _maximumElm?: HTMLElement;
  private _unitElm?: HTMLElement;
  private _startValueElm?: HTMLElement;
  private _receiversElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(this.element, TITLE_CLASS);
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

  public setTitle(title: string) {
    if (this._titleElm)
      this._titleElm.textContent = title;
  }

  public setValue(params: ValueParams) {
    setTextContent(this._startBitElm, numberToText(params.startBit));
    setTextContent(this._sizeInBitsElm, numberToText(params.sizeInBits));
    setTextContent(this._byteOrderElm, byteOrdertoToText(params.byteOrder));
    setTextContent(this._isUnsignedElm, unsignedToText(params.isUnsigned));
    setTextContent(this._factorElm, numberToText(params.factor));
    setTextContent(this._offsetElm, numberToText(params.offset));
    setTextContent(this._minimumElm, numberToText(params.minimum));
    setTextContent(this._maximumElm, numberToText(params.maximum));
    setTextContent(this._unitElm, params.unit);
    setTextContent(this._startValueElm, numberToText(params.startValue), "<null>");
    setTextContent(this._receiversElm, receiversToText(params.receivers));
  }
};
