// @ts-ignore
import { ROOT_CLASS, TOGGLE_CLASS } from "uictmplt-loader!./template.ts";
import { DarkModeButton } from "@/comp/DarkModeButton/control";

export class DMBtn extends DarkModeButton {
  public static createElement(document: HTMLDocument): HTMLElement {
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
};
