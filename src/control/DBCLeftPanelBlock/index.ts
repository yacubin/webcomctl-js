import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS } from "./template.node";

export namespace DBCLeftPanelBlock {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
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

} // namespace DBCLeftPanelBlock
