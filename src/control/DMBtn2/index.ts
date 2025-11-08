import { NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS } from "uictmplt-loader!./template.ts";
import { DarkModeButton } from "@/comp/DarkModeButton/control";

export class DMBtn2 extends DarkModeButton {
  public static createElement(document: HTMLDocument): HTMLElement {
    // <div class="${ROOT_CLASS}"></div>
    const element = document.createElement("div");
    element.classList.add(ROOT_CLASS);
    return element;
  }
};
