import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { CLOSE_CLASS, PULL_OUT_ON, PULL_OUT_RIGHT, PULL_OUT_LEFT } from 'uictmplt-loader!./template.ts';

enum SideType {
  NONE_SIDE = 'node',
  RIGHT_SIDE = 'right',
  LEFT_SIDE = 'left',
};

function sydeTypeToClassName(sideType: SideType) {
  switch (sideType) {
  case SideType.RIGHT_SIDE:
    return PULL_OUT_RIGHT;
  case SideType.LEFT_SIDE:
    return PULL_OUT_LEFT;
  }
  return null;
};

export class TipInfoBlock extends BaseControl {
  private _closeElm?: HTMLElement;
  private _visible = false;
  private _sideType = SideType.NONE_SIDE;

  protected _init() {
    const element = (this as any).element as HTMLElement; // FIXME
    this._visible = element.classList.contains(PULL_OUT_ON);
    if (element.classList.contains(PULL_OUT_RIGHT))
      this._sideType = SideType.RIGHT_SIDE;
    else if (element.classList.contains(PULL_OUT_LEFT))
      this._sideType = SideType.LEFT_SIDE;
    else 
      this._sideType = SideType.NONE_SIDE;
    this._closeElm = NQDOM.getElementByClassName(element, CLOSE_CLASS);
    this._closeElm && this._closeElm.addEventListener("click", () => this.visible = false);
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    const element = (this as any).element as HTMLElement; // FIXME
    if (this._visible != value) {
      const method = value ? 'add' : 'remove';
      element.classList[method](PULL_OUT_ON);
      this._visible = value;
    }
  }

  public get sideType() {
    return this._sideType;
  }

  public set sideType(value) {
    const element = (this as any).element as HTMLElement; // FIXME
    if (this._sideType != value) {
      this.visible = false;
      const oldClass = sydeTypeToClassName(this._sideType);
      oldClass && element.classList.remove(oldClass);
      const newClass = sydeTypeToClassName(value);
      newClass && element.classList.add(newClass);
      this._sideType = newClass ? value : SideType.NONE_SIDE;
    }
  }
};
