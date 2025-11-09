import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS } from "uictmplt-loader!./template.ts";
import { DarkModeButton } from "@/comp/DarkModeButton/control";

export class DMKikoBtn extends DarkModeButton {
  public static createElement(document: HTMLDocument): HTMLElement {
    // <div class="${ROOT_CLASS}">
    //   <div></div>
    // </div>
    const element = document.createElement("div");
    element.classList.add(ROOT_CLASS);
    const divElm  = document.createElement("div");
    element.appendChild(divElm);
    return element;
  }
};
