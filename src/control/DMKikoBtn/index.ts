import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML } from "uictmplt-loader!./template.ts";
import { DarkModeButton } from "@/comp/DarkModeButton/control";

export class DMKikoBtn extends DarkModeButton {
  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }
};
