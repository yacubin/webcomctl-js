import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, COMMENT_CLASS } from "./template.node";

export namespace DBCComment {

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
  private _commentTextElement?: HTMLElement;

  protected _init() {
    this._commentTextElement = NQDOM.getElementByClassName(super.element, COMMENT_CLASS);
  }

  public setValue(text: string) {
    if (this._commentTextElement) {
      this._commentTextElement.textContent = "";
      for (const iter of (text || "").split("\n")) {
        const element = document.createElement('span');
        element.textContent = iter;
        this._commentTextElement.appendChild(element);
      }
    }
  }
};

} // namespace DBCComment
