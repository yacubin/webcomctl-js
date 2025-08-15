import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { GROUP_SIGNALS_CLASS } from "uictmplt-loader!./template.ts";

export class DBCGruop extends BaseControl {
  private _signalListElm?: HTMLElement;

  protected _init() {
    this._signalListElm = NQDOM.getElementByClassName(this.element, GROUP_SIGNALS_CLASS);
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
