import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, BUTTON_ACTIVE
// @ts-ignore
} from "uictmplt-loader!./template.ts";

export class DBCTreeInfo extends BaseControl {

  protected _init() {
    this._tableOfContents = NQDOM.getElementByClassName(this.element, ROOT_CLASS);
    this._buttonActive = NQDOM.getElementByClassName(this.element, BUTTON_ACTIVE);
  }

  if (this._tableOfContents) {
    Array.prototype.forEach.call(this._tableOfContents.children, iter => {
      if (iter.href && iter.href == location.href) {
        iter.classList.add(this._buttonActive);
      }
    });
  }
};
