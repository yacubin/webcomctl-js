import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, ROOT_CLASS, BUTTON_ACTIVE } from "uictmplt-loader!./template.ts";

export class Notfound extends BaseControl {
  private _tableOfContents?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    }
  }
