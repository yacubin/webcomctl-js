import { BaseControl, NQDOM } from 'webnetq-js';
import { ITEM_HTML, TEXT_CLASS, LIST_CLASS, DOWN_CLASS, HIDE_CLASS, RIGHT_CLASS, SIDE_CLASS } from 'uictmplt-loader!./template.mjs';

export default class UIDebugPanelControl extends BaseControl {
  _init() {
    const hideClickElm = NQDOM.getElementByClassName(this.element, HIDE_CLASS);
    hideClickElm && hideClickElm.addEventListener("click", (event) => {
      this.element.classList.toggle(DOWN_CLASS);
    });
    const sideClickElm = NQDOM.getElementByClassName(this.element, SIDE_CLASS);
    sideClickElm && sideClickElm.addEventListener("click", (event) => {
      this.element.classList.toggle(RIGHT_CLASS);
    });
  }

  setButton(name, { onclick }) {
    const itemElm = NQDOM.createElement(ITEM_HTML);
    const textElm = NQDOM.getElementByClassName(itemElm, TEXT_CLASS);
    const listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
    if (itemElm && textElm && listElm) {
      onclick && itemElm.addEventListener("click", (event) => onclick(event));
      textElm.textContent = name;
      listElm.appendChild(itemElm);
    }
  }
};
