import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML } from "uictmplt-loader!./template.ts";

export class HdrDBCLogoName extends BaseControl {
  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }
};
