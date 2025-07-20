import { BaseControl, NQDOM } from 'webnetq-js';
import { CLICK } from 'uictmplt-loader!./template.mjs';

const CLICK_EVENT = "click";

export class VertButtonInfo extends BaseControl {
  _init() {
    const clicknElm = NQDOM.getElementByClassName(this.element, CLICK);
    if (clicknElm) {
      clicknElm.addEventListener('click', (event) => {
        this.dispatchEvent(CLICK_EVENT, event);
      });
      this.registerEvent(CLICK_EVENT);
    }
  }
};
