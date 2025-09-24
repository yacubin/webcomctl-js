import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, BUTTON_ACTIVE
// @ts-ignore
} from "uictmplt-loader!./template.ts";

export class UtilspotButton extends BaseControl {
  private _tableOfContents?: HTMLElement;

  protected _init() {
    this._tableOfContents = NQDOM.getElementByClassName(this.element, ROOT_CLASS);

    if (this._tableOfContents) {
      Array.prototype.forEach.call(this._tableOfContents.children, iter => {
        if (iter.href && iter.href == location.href) {
          iter.classList.add(BUTTON_ACTIVE);
        }
      });
    }
  }
};
