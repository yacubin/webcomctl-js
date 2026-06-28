import { DarkModeButton } from "@/comp/DarkModeButton/control";
import { ROOT_CLASS, CSS } from "./template.node";

export namespace DMKikoBtn {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  // <div class="${ROOT_CLASS}">
  //   <div></div>
  // </div>
  const element = document.createElement("div");
  element.classList.add(ROOT_CLASS);
  const divElm  = document.createElement("div");
  element.appendChild(divElm);
  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends DarkModeButton {
};

} // namespace DMKikoBtn
