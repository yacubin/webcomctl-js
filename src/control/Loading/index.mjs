import { BaseControl } from "webnetq-js";
import { SHOW_CLASS } from 'uictmplt-loader!./template.mjs';

export class Loading extends BaseControl {
  _visible;

  _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      this.element.classList.toggle(SHOW_CLASS);
      this._visible = value;
    }
  }
};
