import { BaseControl } from 'webnetq-js';
import { SHOW, ANIME } from 'uictmplt-loader!./template.mjs';

export class RightSideProperties extends BaseControl {
  _visible;
  _animation;

  _init() {
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      this.element.classList[value ? 'add' : 'remove'](SHOW);
      this.element.classList[this._animation ? 'add' : 'remove'](ANIME);
      this._visible = value;
    }
  }

  get animation() { return this._animation; }
  set animation(value) { this._animation = value; }
};
