import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, ITEM_HTML, CSS, TEXT_CLASS, LIST_CLASS, DOWN_CLASS, HIDE_CLASS, RIGHT_CLASS, SIDE_CLASS } from "./template.node";

interface ButtonParams {
  onclick: (event: MouseEvent) => void;
};

export namespace DebugPanel {

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
  protected _init() {
    const hideClickElm = NQDOM.getElementByClassName(this.element, HIDE_CLASS);
    hideClickElm && hideClickElm.addEventListener("click", (event) => {
      this.element.classList.toggle(DOWN_CLASS);
    });
    const sideClickElm = NQDOM.getElementByClassName(this.element, SIDE_CLASS);
    sideClickElm && sideClickElm.addEventListener("click", (event) => {
      this.element.classList.toggle(RIGHT_CLASS);
    });
  }

  public setButton(name: string, { onclick }: ButtonParams) {
    const itemElm = NQDOM.createElement(ITEM_HTML) as HTMLElement;
    const textElm = NQDOM.getElementByClassName(itemElm, TEXT_CLASS);
    const listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
    if (itemElm && textElm && listElm) {
      onclick && itemElm.addEventListener("click", (event) => onclick(event));
      textElm.textContent = name;
      listElm.appendChild(itemElm);
    }
  }
};

} // namespace DebugPanel
