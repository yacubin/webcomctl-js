import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, SHOW, ANIME } from "uictmplt-loader!./template.ts";

export class RightSideProperties extends BaseControl {
  private _visible = false;
  private _animation = false;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (this._visible != value) {
      this.element.classList[value ? 'add' : 'remove'](SHOW);
      this.element.classList[this._animation ? 'add' : 'remove'](ANIME);
      this._visible = value;
    }
  }

  public get animation() { return this._animation; }
  public set animation(value) { this._animation = value; }
};
