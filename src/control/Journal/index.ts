import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { TITLE, LIST } from "uictmplt-loader!./template.ts";

export class Journal extends BaseControl {
  private _titleElm?: HTMLElement;
  private _dataElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(this.element, TITLE) as HTMLElement;
    this._dataElm = NQDOM.getElementByClassName(this.element, LIST) as HTMLElement;
  }

  public setTitle(title: string) {
    this._titleElm && (this._titleElm.textContent = title);
  }

  public setData(lines: string[]) {
    if (!this._dataElm)
      return;

    this._dataElm.innerHTML = "";
    for (const text of lines) {
      const element = document.createElement("div");
      element.textContent = text;
      this._dataElm.appendChild(element);
    }
  }
};
