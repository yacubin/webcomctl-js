import { BaseControl } from "webnetq-js";
// @ts-ignore
import { NTH1_CLASS, NTH2_CLASS } from "uictmplt-loader!./template.ts";

export class SwitchBlock  extends BaseControl {
  private _isSecond = false;

  public showFirst() {
    if (this._isSecond) {
      this.element.classList.add(NTH1_CLASS);
      this.element.classList.remove(NTH2_CLASS);
      this._isSecond = false;
    }
  }

  public showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(NTH2_CLASS);
      this.element.classList.remove(NTH1_CLASS);
      this._isSecond = true;
    }
  }
};
