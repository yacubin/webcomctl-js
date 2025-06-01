import { BaseControl, NQDOM } from 'webnetq-js';
import { TITLE, ITEM_HTML, LIST_CLASS, LIST_NAME, LIST_VALUE } from 'uictmplt-loader!./template.mjs';

export default class PropInfoPanel extends BaseControl {
  _titleElm;
  _listElm;
  _valueElmMap = {};

  _init() {
      this._titleElm = NQDOM.getElementByClassName(this.element, TITLE);
      this._listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
  }

  get title() {
    return this._titleElm && this._titleElm.textContent;
  }

  set title(value) {
    this._titleElm && (this._titleElm.textContent = value);
  }

  setItem(name, value) {
    let valueElm = this._valueElmMap[name];
    if (valueElm)
      valueElm.textContent = NQDOM.escapeHTML(value);
    else if (this._listElm) {
      const itemElm = NQDOM.createElement(ITEM_HTML);
      const nameElm = NQDOM.getElementByClassName(itemElm, LIST_NAME);
      valueElm = NQDOM.getElementByClassName(itemElm, LIST_VALUE);
      if (valueElm) {
        this._valueElmMap[name] = valueElm;
        valueElm.textContent = NQDOM.escapeHTML(value);
        nameElm && (nameElm.textContent = NQDOM.escapeHTML(name));
        this._listElm.appendChild(itemElm);
      }
    }
  }

  clearItems() {
    this._valueElmMap = {};
    this._listElm.innerHTML = "";
  }
};
