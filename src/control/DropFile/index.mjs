import { BaseControl } from "webnetq-js";
import { SHOW_CLASS } from 'uictmplt-loader!./template.mjs';

export class DropFile extends BaseControl {
  _visible;

  _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (value != this._visible) {
      this.element.classList.toggle(SHOW_CLASS, value);
      this._visible = value;
    }
  }
};
