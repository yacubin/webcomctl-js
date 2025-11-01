import { BaseControl } from "webnetq-js";

export class SwitchBlockControl extends BaseControl {
  private _nth1Class!: string;
  private _nth2Class!: string;

  protected _init(nth1Class: string, nth2Class: string) {
    this._nth1Class = nth1Class;
    this._nth2Class = nth2Class;
  }

  public showFirst() {
    this.element.classList.toggle(this._nth1Class, true);
    this.element.classList.toggle(this._nth2Class, false);
  }

  public showSecond() {
    this.element.classList.toggle(this._nth1Class, false);
    this.element.classList.toggle(this._nth2Class, true);
  }
};
