import { DarkModeButton } from "@/comp/DarkModeButton/control";
import { ROOT_CLASS, CSS } from "./template.node";

export namespace DMBtn2 {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  // <div class="${ROOT_CLASS}"></div>
  const element = document.createElement("div");
  element.classList.add(ROOT_CLASS);
  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends DarkModeButton {
  protected _init() {
  }
};

} // namespace DMBtn2
