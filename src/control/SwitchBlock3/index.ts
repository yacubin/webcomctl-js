import { BaseControl } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, NTH2_CLASS } from "./maker.node";

export abstract class SwitchBlock3 extends BaseControl {
  abstract showFirst(): void;
  abstract showSecond(): void;
};

export namespace SwitchBlock3 {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export interface InitParams {
  type?: "normal" | "flex";
  overflowX?: string;
  show?: "first" | "second";
};

export function createElement(document: HTMLDocument, params: InitParams): HTMLElement {
  // <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
  const element = document.createElement("div");

  element.classList.add(ROOT_CLASS, PORT_CLASS);

  if (params.type === "flex")
    element.style.flexGrow = "1";
  else
    element.style.height = "100%";

  if (params.overflowX)
    element.style.overflowX = params.overflowX;

  if (params.show === "second")
    element.classList.add(NTH2_CLASS);

  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  styleSheet.insertRule(`.${ROOT_CLASS} {width:inherit;box-sizing:border-box;}`, styleSheet.cssRules.length);
  styleSheet.insertRule(`.${ROOT_CLASS}.${NTH2_CLASS} > :first-child {display:none;}`, styleSheet.cssRules.length);
  styleSheet.insertRule(`.${ROOT_CLASS}:not(.${NTH2_CLASS}) > :nth-child(2) {display:none;}`, styleSheet.cssRules.length);
}

export class Control extends SwitchBlock3 {
  protected _init() {
  }

  public showFirst() {
    this.element.classList.toggle(NTH2_CLASS, false);
  }

  public showSecond() {
    this.element.classList.toggle(NTH2_CLASS, true);
  }
};

} // namespace SwitchBlock3
