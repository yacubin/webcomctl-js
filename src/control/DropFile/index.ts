import { BaseControl } from "webnetq-js";
// @ts-ignore
import { SHOW_CLASS } from "uictmplt-loader!./template.ts";

export class DropFile extends BaseControl {
  private _visible = false;

  protected _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (value != this._visible) {
      this.element.classList.toggle(SHOW_CLASS, value);
      this._visible = value;
    }
  }
};
