import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { dbc_comment_text } from "uictmplt-loader!./template.ts";

export class DBCComment extends BaseControl {
  private _commentTextElement?: HTMLElement;

  protected _init() {
    this._commentTextElement = NQDOM.getElementByClassName(this.element, dbc_comment_text);
  }

  public setValue(text: string) {
    if (this._commentTextElement) {
      this._commentTextElement.textContent = "";
      for (const iter of (text || "").split("\n")) {
        const element = document.createElement('span');
        element.textContent = iter;
        this._commentTextElement.appendChild(element);
      }
    }
  }
};
