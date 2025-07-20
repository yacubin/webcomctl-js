import { BaseControl } from "webnetq-js";
import { LINK_ON_CLASS, LINK_OFF_CLASS } from 'uictmplt-loader!./template.mjs';

function isLocationEqual(href) {
  if (typeof document === 'object') {
    const currHref = document.location.href;
    if (currHref === href) {
      return true;
    }
    if (!href.endsWith('/')) {
      return currHref === (href + '/');
    }
  }
  return false;
}

export class MainFooter extends BaseControl {
  _init() {
    const linkElm = this.element.querySelector(`a.${LINK_ON_CLASS}`);
    if (linkElm && isLocationEqual(linkElm.href)) {
      linkElm.classList.remove(LINK_ON_CLASS);
      linkElm.classList.add(LINK_OFF_CLASS);
    }
  }
};
