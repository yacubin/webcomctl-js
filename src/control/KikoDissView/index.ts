import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { SHOW_CLASS, IMAGE_CLASS } from "uictmplt-loader!./template.ts";

export class KikoDissView extends BaseControl {
  private _visible = false;
  private _imageElm?: HTMLImageElement;

  protected _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
    this._imageElm = NQDOM.getElementByClassName(this.element, IMAGE_CLASS) as HTMLImageElement;
    this.element.addEventListener("click", event => {
      if (this._visible && (event.target as HTMLElement).tagName !== "IMG")
        this.visible = false;
    });
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (this._visible != value) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](SHOW_CLASS);
      this._visible = value;
    }
  }

  public setContent(value: string) {
    if (this._imageElm) {
      this._imageElm.src = value;
    }
  }
};
