import { BaseControl, NQDOM } from 'webnetq-js';
import { DESCRIPTION_TITLE, DESCRIPTION_HISTORY, LIST_CLASS, ITEM_HTML, LIST_NAME, LIST_VALUE } from 'uictmplt-loader!./template.mjs';

export class ImageInfoPanel extends BaseControl {
  _titleElm;
  _descriptionElm;
  _listElm;

  _init() {
    this._titleElm = NQDOM.getElementByClassName(this.element, DESCRIPTION_TITLE);
    this._descriptionElm = NQDOM.getElementByClassName(this.element, DESCRIPTION_HISTORY);
    this._listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
  }

  get title() {
    return this._titleElm && this._titleElm.textContent;
  }
  set title(value) {
    this._titleElm && (this._titleElm.textContent = value);
  }

  get description() {
    return this._descriptionElm && this._descriptionElm.textContent;
  }
  set description(value) {
    this._descriptionElm && (this._descriptionElm.textContent = value);
  }

  addListItem(name, value) {
    const itemElm = NQDOM.createElement(ITEM_HTML);
    const nameElm = NQDOM.getElementByClassName(itemElm, LIST_NAME);
    nameElm && (nameElm.textContent = name);
    const valueElm = NQDOM.getElementByClassName(itemElm, LIST_VALUE);
    valueElm && (valueElm.textContent = value);
    this._listElm && this._listElm.appendChild(itemElm);
  }
};
