import { BaseControl, NQDOM } from 'webnetq-js';
import { CLOSE_CLASS, PULL_OUT_ON, PULL_OUT_RIGHT, PULL_OUT_LEFT } from 'uictmplt-loader!./template.mjs';

const NONE_SIDE = 'node';
const RIGHT_SIDE = 'right';
const LEFT_SIDE = 'left';

function sydeTypeToClassName(sideType) {
  switch (sideType) {
  case RIGHT_SIDE:
    return PULL_OUT_RIGHT;
  case LEFT_SIDE:
    return PULL_OUT_LEFT;
  }
  return null;
};

export class TipInfoBlock extends BaseControl {
  _closeElm;
  _visible;
  _sideType

  _init() {
    this._visible = this.element.classList.contains(PULL_OUT_ON);
    if (this.element.classList.contains(PULL_OUT_RIGHT))
      this._sideType = RIGHT_SIDE;
    else if (this.element.classList.contains(PULL_OUT_LEFT))
      this._sideType = LEFT_SIDE;
    else 
      this._sideType = NONE_SIDE;
    this._closeElm = NQDOM.getElementByClassName(this.element, CLOSE_CLASS);
    this._closeElm && this._closeElm.addEventListener("click", () => this.visible = false);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](PULL_OUT_ON);
      this._visible = value;
    }
  }

  get sideType() {
    return this.sideType;
  }

  set sideType(value) {
    if (this._sideType != value) {
      this.visible = false;
      const oldClass = sydeTypeToClassName(this._sideType);
      oldClass && this.element.classList.remove(oldClass);
      const newClass = sydeTypeToClassName(value);
      newClass && this.element.classList.add(newClass);
      this._sideType = newClass ? value : NONE_SIDE;
    }
  }
};
