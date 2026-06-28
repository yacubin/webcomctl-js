import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS, ROOT_HTML, CSS, SHOW_CLASS } from "./template.node";

export namespace DropFile {

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

} // namespace DropFile
