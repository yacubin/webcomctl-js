import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { UNLOAD_CLASS } from "uictmplt-loader!./template.ts";

export class LoadingBlock extends BaseControl {
  private _isLoad = false;
  private _loadElm?: HTMLElement;

  protected _init() {
    this._loadElm = NQDOM.getElementByClassName(this.element, UNLOAD_CLASS);
  }

  public show() {
    if (this._loadElm && !this._isLoad) {
      this._loadElm.classList.remove(UNLOAD_CLASS);
      this._isLoad = true;
    }
  }

  public hide() {
    if (this._loadElm && this._isLoad) {
      this._loadElm.classList.add(UNLOAD_CLASS);
      this._isLoad = false;
    }
  }
};
