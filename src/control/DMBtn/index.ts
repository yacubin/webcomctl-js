import { DarkModeButton } from "@/comp/DarkModeButton/control";
import { ROOT_CLASS, TOGGLE_CLASS, CSS } from "./template.node";

export namespace DMBtn {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  // <div class="${ROOT_CLASS}">
  //   <span class="${TOGGLE_CLASS}"></span>
  // </div>
  const element = document.createElement("div");
  element.classList.add(ROOT_CLASS);

  const toggleElm  = document.createElement("span");
  toggleElm.classList.add(TOGGLE_CLASS);

  element.appendChild(toggleElm);
  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends DarkModeButton {
};

} // namespace DMBtn
