import { BaseControl } from "webnetq-js";

export class SwitchBlockControl extends BaseControl {
  private _nth1Class!: string;
  private _nth2Class!: string;
  private _isSecond = false;

  protected _init(nth1Class: string, nth2Class: string) {
    this._nth1Class = nth1Class;
    this._nth2Class = nth2Class;
  }

  public showFirst() {
    if (this._isSecond) {
      this.element.classList.add(this._nth1Class);
      this.element.classList.remove(this._nth2Class);
      this._isSecond = false;
    }
  }

  public showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(this._nth2Class);
      this.element.classList.remove(this._nth1Class);
      this._isSecond = true;
    }
  }
};
