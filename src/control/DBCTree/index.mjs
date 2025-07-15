import { BaseControl, NQDOM } from 'webnetq-js';
import { STATE_EXPAND, STATE_CLICK } from 'uictmplt-loader!./template.mjs';

export default class DBCTreeControl extends BaseControl {
  _init() {
    const stateElm = NQDOM.getElementByClassName(this.element, STATE_CLICK);
    console.log("Hey", stateElm)
    if (stateElm) {
      stateElm.addEventListener("click", () => {
        stateElm.classList.toggle(STATE_EXPAND);
      });
    }
  }
};
