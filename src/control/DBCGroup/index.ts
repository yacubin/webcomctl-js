import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, TITLE_CLASS, SIGNALS_CLASS } from "uictmplt-loader!./template.ts";

export class DBCGroup extends BaseControl {
  private _titleElm?: HTMLElement;
  private _signalListElm?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(this.element, TITLE_CLASS);
    this._signalListElm = NQDOM.getElementByClassName(this.element, SIGNALS_CLASS);
  }

  public setTitle(title: string) {
    if (this._titleElm) {
      this._titleElm.textContent = title;
    }
  }

  public setValue(signals: string[]) {
    if (this._signalListElm) {
      this._signalListElm.textContent = "";
      for (const iter of signals) {
        const item = document.createElement('li');
        item.textContent = iter;
        this._signalListElm.appendChild(item);
      }
    }
  }
};
