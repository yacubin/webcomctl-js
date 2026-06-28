import { BaseControl } from "webnetq-js";
import { ROOT_CLASS, CSS } from "./template.node";

export namespace HdrDBCLogoImg {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
    const element = document.createElement("h3");
    element.classList.add(ROOT_CLASS);
    return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  protected _init() {
  }
};

} // namespace HdrDBCLogoImg
