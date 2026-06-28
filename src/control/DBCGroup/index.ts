import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, TITLE_CLASS, SIGNALS_CLASS } from"./template.node";

export namespace DBCGroup {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _titleElm?: HTMLElement;
  private _signalListElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, TITLE_CLASS);
    this._signalListElm = NQDOM.getElementByClassName(super.element, SIGNALS_CLASS);
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

} // namespace DBCGroup
