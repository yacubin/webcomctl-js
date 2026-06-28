import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS, NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS, INSET_CLASS } from "./template.node";

const DRAGENTER_EVENT = "dragenter";
const DRAGOVER_EVENT = "dragover";
const DRAGLEAVE_EVENT = "dragleave";
const DRAG_EVENT = "drop";

const MIN_CHUNK_WIDTH = 50;
const MIN_CHUNK_HEIGHT = 50;

enum SideType {
  NONE = 0,
  TOP = 1,
  RIGHT = 2,
  BOTTOM = 3,
  LEFT = 4,
  INSET = 5,
};

type SideStrType = "none" | "top" | "right" | "bottom" | "left" | "inset";

namespace SideType {

export function fromString(str: SideStrType): SideType | undefined {
  switch (str) {
  case "none":
    return SideType.NONE;
  case "top":
    return SideType.TOP;
  case 'right':
    return SideType.RIGHT;
  case 'bottom':
    return SideType.BOTTOM;
  case 'left':
    return SideType.LEFT;
  case 'inset':
    return SideType.INSET;
  }
  return undefined;
};

export function toString(sideType: SideType): SideStrType {
  switch (sideType) {
  case SideType.NONE:
    return "none";
  case SideType.TOP:
    return 'top';
  case SideType.RIGHT:
    return 'right';
  case SideType.BOTTOM:
    return 'bottom';
  case SideType.LEFT:
    return 'left';
  case SideType.INSET:
    return 'inset';
  }
};

export function toClassName(sideType: SideType) {
  switch (sideType) {
  case SideType.NONE:
    return NONE_CLASS;
  case SideType.TOP:
    return TOP_CLASS;
  case SideType.RIGHT:
    return RIGHT_CLASS;
  case SideType.BOTTOM:
    return BOTTOM_CLASS;
  case SideType.LEFT:
    return LEFT_CLASS;
  case SideType.INSET:
    return INSET_CLASS;
  }
};

} // namespace SideType

export namespace DropBlock {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _sideSet = new Set();
  private _sideType = SideType.NONE;
  private _rectElm?: HTMLElement;

  protected _init() {
    this._rectElm = NQDOM.getElementByClassName(this.element, NONE_CLASS);
    
    let count = 0;
    this.element.addEventListener(DRAGENTER_EVENT, (event) => {
      if (count++ == 0) {
        this._onDragEnter(event);
        this.dispatchEvent(DRAGENTER_EVENT, {});
      }
    });

    this.element.addEventListener(DRAGOVER_EVENT, (event) => {
      if (count) {
        this._onDragOver(event);
        this.dispatchEvent(DRAGOVER_EVENT, {});
      }
      event.preventDefault();
    });

    this.element.addEventListener(DRAGLEAVE_EVENT, (event) => {
      if (--count == 0) {
        this._onDragLeave();
        this.dispatchEvent(DRAGLEAVE_EVENT, {});
      }
    });

    this.element.addEventListener(DRAG_EVENT, (event) => {
      event.preventDefault();
      count = 0;

      if (this._sideType != SideType.NONE) {
        const newEvent: any = {
          side: SideType.toString(this._sideType),
        };
        if (event.dataTransfer?.items) {
          newEvent.files = [];
          for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
              const file = event.dataTransfer.items[i].getAsFile();
              newEvent.files.push(file);
            }
          }
        }
        this._onDragLeave();
        this.dispatchEvent(DRAG_EVENT, newEvent);
      }
    });

    this.registerEvent(DRAGENTER_EVENT, DRAGOVER_EVENT, DRAGLEAVE_EVENT, DRAG_EVENT);
  }

  public initConfig(config: { allowSides: SideStrType }) {
    if (config && Array.isArray(config.allowSides)) {
      for (const sideStr of config.allowSides) {
        const sideType = SideType.fromString(sideStr);
        if (typeof sideType === 'number') {
          this._sideSet.add(sideType);
        }
        else {
          console.warn(`Unknown side type of ${sideStr}`);
        }
      }
    }
  }

  private _setSideType(sideType: SideType) {
    if (sideType != this._sideType) {
      if (this._rectElm) {
        const prevClass = SideType.toClassName(this._sideType);
        this._rectElm.classList.remove(prevClass);
        const newClass = SideType.toClassName(sideType);
        this._rectElm.classList.add(newClass);
      }
      this._sideType = sideType;
    }
  }

  private _detectSideType(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    const chunkWidth = rect.width / 8;
    if (MIN_CHUNK_WIDTH < chunkWidth) {
      if (this._sideSet.has(SideType.LEFT) && event.clientX < (rect.left + chunkWidth))
        return SideType.LEFT;
      if (this._sideSet.has(SideType.RIGHT) && event.clientX > (rect.right - chunkWidth))
        return SideType.RIGHT;
    }
    
    const chunkHeight = rect.height / 8;
    if (MIN_CHUNK_HEIGHT < chunkHeight) {
      if (this._sideSet.has(SideType.TOP) && event.clientY < (rect.top + chunkHeight))
        return SideType.TOP;
      if (this._sideSet.has(SideType.BOTTOM) && event.clientY > (rect.bottom - chunkHeight))
        return SideType.BOTTOM;
    }

    if (this._sideSet.has(SideType.INSET))
      return SideType.INSET;

    return SideType.NONE;
  }

  private _onDragEnter(event: DragEvent) {
    const sideType = this._detectSideType(event);
    this._setSideType(sideType);
  }

  private _onDragOver(event: DragEvent) {
    const sideType = this._detectSideType(event);
    this._setSideType(sideType);
  }

  private _onDragLeave() {
    this._setSideType(SideType.NONE);
  }
};

} // namespace DropBlock
