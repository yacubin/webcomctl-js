import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, TITLE, ITEM_HTML, LIST_CLASS, LIST_NAME, LIST_VALUE } from "uictmplt-loader!./template.ts";

export class PropInfoPanel extends BaseControl {
  private _titleElm?: HTMLElement;
  private _listElm?: HTMLElement;
  private _valueElmMap: { [name: string]: any } = {};

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
      this._titleElm = NQDOM.getElementByClassName(this.element, TITLE);
      this._listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
  }

  public get title(): string {
    return this._titleElm ? (this._titleElm.textContent || "") : "";
  }

  public set title(value: string) {
    this._titleElm && (this._titleElm.textContent = value);
  }

  public setItem(name: string, value: string) {
    let valueElm = this._valueElmMap[name];
    if (valueElm)
      valueElm.textContent = value;
    else if (this._listElm) {
      const itemElm = NQDOM.createElement(ITEM_HTML) as HTMLElement;
      const nameElm = NQDOM.getElementByClassName(itemElm, LIST_NAME);
      valueElm = NQDOM.getElementByClassName(itemElm, LIST_VALUE);
      if (valueElm) {
        this._valueElmMap[name] = valueElm;
        valueElm.textContent = NQDOM.escapeHTML(value);
        nameElm && (nameElm.textContent = NQDOM.escapeHTML(name));
        this._listElm.appendChild(itemElm);
      }
    }
  }

  public clearItems() {
    this._valueElmMap = {};
    this._listElm && (this._listElm.innerHTML = "");
  }
};
