import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_state_expand, dbc_state_click } from 'uictmplt-loader!./template.mjs';

export default class DBCTreeControl extends BaseControl {
  _init() {
    const stateElm = NQDOM.getElementByClassName(this.element, dbc_state_click);
    console.log("Hey", stateElm)
    if (stateElm) {
      stateElm.addEventListener("click", () => {
        stateElm.classList.toggle(dbc_state_expand);
      });
    }
  }
};
