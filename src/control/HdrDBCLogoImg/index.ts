import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS } from "uictmplt-loader!./template.ts";

export class HdrDBCLogoImg extends BaseControl {
  public static createElement(document: HTMLDocument): HTMLElement {
    const element = document.createElement("h3");
    element.classList.add(ROOT_CLASS);
    return element;
  }
};
