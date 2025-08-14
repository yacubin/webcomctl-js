import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { STATE_EXPAND, STATE_CLICK } from "uictmplt-loader!./template.ts";

export class DBCTree extends BaseControl {
  protected _init() {
    const stateElm = NQDOM.getElementByClassName(this.element, STATE_CLICK);
    console.log("Hey", stateElm)
    if (stateElm) {
      stateElm.addEventListener("click", () => {
        stateElm.classList.toggle(STATE_EXPAND);
      });
    }
  }
};
