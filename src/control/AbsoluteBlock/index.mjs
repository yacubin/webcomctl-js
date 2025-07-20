import { BaseControl } from 'webnetq-js';
import { RIGHT_CLASS, BOTTOM_CLASS } from 'uictmplt-loader!./template.mjs';

const SideType = {
  TOP_LEFT: 0,
  TOP_RIGHT: 1,
  BOTTOM_LEFT: 2,
  BOTTOM_RIGHT: 3,
};

SideType.fromString = (str) => {
  switch (str) {
  case "top-left":
    return SideType.TOP_LEFT;
  case "top-right":
    return SideType.TOP_RIGHT;
  case "bottom-left":
    return SideType.BOTTOM_LEFT;
  case "bottom-right":
    return SideType.BOTTOM_RIGHT;
  }
  return null;
};

SideType.toString = (sideType) => {
  switch (sideType) {
  case SideType.TOP_LEFT:
    return "top-left";
  case SideType.TOP_RIGHT:
    return "top-right";
  case SideType.BOTTOM_LEFT:
    return "bottom-left";
  case SideType.BOTTOM_RIGHT:
    return "bottom-right";
  }
  return null;
};

export class AbsoluteBlock extends BaseControl {
  _sideType;
  _visible;

  _init() {
    const hasRight = this.element.classList.contains(RIGHT_CLASS);
    const hasBottom = this.element.classList.contains(BOTTOM_CLASS);

    if (hasRight)
      this._sideType = hasBottom ? SideType.BOTTOM_RIGHT : SideType.TOP_RIGHT;
    else
      this._sideType = hasBottom ? SideType.BOTTOM_LEFT : SideType.TOP_LEFT;

    this._visible = true;
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      this._visible = value;
    }
  }

  get sideType() {
    return this._sideType;
  }

  set sideType(value) {
    if(typeof value === "string")
      value = SideType.fromString(value);

    let hasRight = false;
    let hasBottom = false;

    switch (value) {
    case SideType.TOP_LEFT:
      break;

    case SideType.TOP_RIGHT:
      hasRight = true;
      break;

    case SideType.BOTTOM_LEFT:
      hasBottom = true;
      break;

    case SideType.BOTTOM_RIGHT:
      hasRight = hasBottom = true;
      break;

    default:
      console.warn(`Unknown side type has ${value}`);
      return;
    }

    this.element.classList.toggle(RIGHT_CLASS, hasRight);
    this.element.classList.toggle(BOTTOM_CLASS, hasBottom);
  }
};
