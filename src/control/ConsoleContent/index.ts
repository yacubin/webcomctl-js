import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_HTML, ROOT_CLASS, CSS } from "./template.node";

export namespace ConsoleContent {

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
  }
};

} // namespace ConsoleContent
