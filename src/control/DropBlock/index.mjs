import { BaseControl } from "webnetq-js";
import { NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS, INSET_CLASS } from 'uictmplt-loader!./template.mjs';

const MIN_CHUNK_WIDTH = 50;
const MIN_CHUNK_HEIGHT = 50;

const SideType = {
  NONE: 0,
  TOP: 1,
  RIGHT: 2,
  BOTTOM: 3,
  LEFT: 4,
  INSET: 5,
};

SideType.fromString = (str) => {
  switch (str) {
  case 'none':
    return SideType.NONE;
  case 'top':
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
  return null;
};

SideType.toString = (sideType) => {
  switch (sideType) {
  case SideType.NONE:
    return 'none';
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

SideType.toClassName = (sideType) => {
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

export class DropBlock  extends BaseControl {
  _sideSet = new Set();
  _sideType = SideType.NONE;
  _rectElm;

  _listeners = {
    dragenter: [],
    dragleave: [],
    dragover: [],
    drop: [],
  };

  _init() {
    this._rectElm = this.element.querySelector('.' + NONE_CLASS);
    
    let count = 0;
    this.element.addEventListener("dragenter", (event) => {
      if (count++ == 0) {
        this._onDragEnter(event);
        this.dispatchEvent("dragenter", {});
      }
    });

    this.element.addEventListener("dragover", (event) => {
      if (count) {
        this._onDragOver(event);
        this.dispatchEvent("dragover", {});
      }
      event.preventDefault();
    });

    this.element.addEventListener("dragleave", (event) => {
      if (--count == 0) {
        this._onDragLeave(event);
        this.dispatchEvent("dragleave", {});
      }
    });

    this.element.addEventListener("drop", (event) => {
      event.preventDefault();
      count = 0;

      if (this._sideType != SideType.NONE) {
        const newEvent = {
          side: SideType.toString(this._sideType),
        };
        if (event.dataTransfer.items) {
          newEvent.files = [];
          for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
              const file = event.dataTransfer.items[i].getAsFile();
              newEvent.files.push(file);
            }
          }
        }
        this._onDragLeave();
        this.dispatchEvent("drop", newEvent);
      }
    });
  }

  initConfig(config) {
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

  _setSideType(sideType) {
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

  _detectSideType(event) {
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

  _onDragEnter(event) {
    const sideType = this._detectSideType(event);
    this._setSideType(sideType);
  }

  _onDragOver(event) {
    const sideType = this._detectSideType(event);
    this._setSideType(sideType);
  }

  _onDragLeave(event) {
    this._setSideType(SideType.NONE);
  }

  dispatchEvent(type, event) {
    this._listeners[type].forEach(listener => listener(event));
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }
};
