import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS } from "uictmplt-loader!./template.ts";

enum SplitterType {
  NONE = 0,
  TOP = 1,
  RIGHT = 2,
  BOTTOM = 3,
  LEFT = 4,
};

namespace SplitterType {

function toString(sideType: SplitterType) {
  switch (sideType) {
  case SplitterType.NONE:
    return 'none';
  case SplitterType.TOP:
    return 'top';
  case SplitterType.RIGHT:
    return 'right';
  case SplitterType.BOTTOM:
    return 'bottom';
  case SplitterType.LEFT:
    return 'left';
  }
}

function toClassName(sideType: SplitterType) {
  switch (sideType) {
  case SplitterType.NONE:
    return NONE_CLASS;
  case SplitterType.TOP:
    return TOP_CLASS;
  case SplitterType.RIGHT:
    return RIGHT_CLASS;
  case SplitterType.BOTTOM:
    return BOTTOM_CLASS;
  case SplitterType.LEFT:
    return LEFT_CLASS;
  }
}

} // namespace SplitterType

export class SplitterBlock extends BaseControl {
  private _splitterType = SplitterType.NONE;
  private _splitterElm?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._splitterElm = NQDOM.getElementByClassName(this.element, NONE_CLASS);
  }
};
