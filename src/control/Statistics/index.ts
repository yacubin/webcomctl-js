import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { LIST_CLASS, URL_CLASS, METHOD_CLASS, COUNTER_CLASS, } from "uictmplt-loader!./template.ts";

export class Statistics extends BaseControl {
private _listElm?: HTMLElement;

  _init() {
    this._listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
  }
}
