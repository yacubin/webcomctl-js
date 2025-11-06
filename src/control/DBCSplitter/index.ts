import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import {  } from "uictmplt-loader!./template.ts";

export class DBCSplitter extends BaseControl {
  protected _init() {
  }
  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }
};
