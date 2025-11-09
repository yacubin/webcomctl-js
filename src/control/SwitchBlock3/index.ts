import { BaseControl } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS, PORT_CLASS, NTH2_CLASS } from "uictmplt-loader!./template.ts";

export abstract class SwitchBlock3 extends BaseControl {
  abstract showFirst(): void;
  abstract showSecond(): void;
};

export namespace SwitchBlock3 {

export interface InitParams {
  type?: "normal" | "flex";
  overflowX?: string;
  showNth2?: boolean;
};

export function createElement(document: HTMLDocument, params?: InitParams): HTMLElement {
  // <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
  const element = document.createElement("div");

  element.classList.add(ROOT_CLASS, PORT_CLASS);
  element.style.width = "inherit";
  element.style.boxSizing = "border-box";

  if (params?.type == "flex")
    element.style.flexGrow = "1";
  else
    element.style.height = "100%";

  if (params?.overflowX)
    element.style.overflowX = params.overflowX;

  if (params?.showNth2)
    element.classList.add(NTH2_CLASS);

  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
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
