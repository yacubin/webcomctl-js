import { BaseControl } from 'webnetq-js';
import { NTH1_CLASS, NTH2_CLASS } from 'uictmplt-loader!./template.mjs';

export class SwitchBlock  extends BaseControl {
  _isSecond = false;

  showFirst() {
    if (this._isSecond) {
      this.element.classList.add(NTH1_CLASS);
      this.element.classList.remove(NTH2_CLASS);
      this._isSecond = false;
    }
  }

  showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(NTH2_CLASS);
      this.element.classList.remove(NTH1_CLASS);
      this._isSecond = true;
    }
  }
};
