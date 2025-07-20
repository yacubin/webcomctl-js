import { BaseControl, NQDOM } from 'webnetq-js';
import { UNLOAD_CLASS } from 'uictmplt-loader!./template.mjs';

export class LoadingBlock extends BaseControl {
  _isLoad = false;
  _loadElm;

  _init() {
    this._loadElm = NQDOM.getElementByClassName(this.element, UNLOAD_CLASS);
  }

  show() {
    if (this._loadElm && !this._isLoad) {
      this._loadElm.classList.remove(UNLOAD_CLASS);
      this._isLoad = true;
    }
  }

  hide() {
    if (this._loadElm && this._isLoad) {
      this._loadElm.classList.add(UNLOAD_CLASS);
      this._isLoad = false;
    }
  }
};
