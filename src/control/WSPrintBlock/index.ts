import { BaseControl } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, RULES } from "./maker.node";

export abstract class WSPrintBlock extends BaseControl {
};

export namespace WSPrintBlock {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export interface InitParams {
};

export function createElement(document: HTMLDocument, params: InitParams): HTMLElement {
  // <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
  const element = document.createElement("div");
  element.classList.add(ROOT_CLASS, PORT_CLASS);
  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of RULES)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends WSPrintBlock {
  protected _init() {
  }
}

} // namespace WSPrintBlock
