import { BaseControl, NQDOM } from 'webnetq-js';
import { SHOW_CLASS, IMAGE_CLASS } from 'uictmplt-loader!./template.mjs';

export class KikoDissView extends BaseControl {
  _visible;
  _imageElm;

  _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
    this._imageElm = NQDOM.getElementByClassName(this.element, IMAGE_CLASS);
    this.element.addEventListener("click", event => {
      if (this._visible && event.target.tagName !== "IMG")
        this.visible = false;
    });
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](SHOW_CLASS);
      this._visible = value;
    }
  }

  setContent(value) {
    if (this._imageElm) {
      this._imageElm.src = value;
    }
  }
};
