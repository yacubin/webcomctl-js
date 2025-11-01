import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, SHOW_CLASS } from "uictmplt-loader!./template.ts";

export class Loading extends BaseControl {
  private _visible = false;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (this._visible != value) {
      this.element.classList.toggle(SHOW_CLASS);
      this._visible = value;
    }
  }
};
