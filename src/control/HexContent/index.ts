import { BaseControl, NQDOM, FileChunkLoader } from "webnetq-js";
// @ts-ignore
import { CONTENT_CLASS, OFSLIST_CLASS, BINLIST_CLASS, TXTLIST_CLASS, SCROLL_MAIN_CLASS, SCROLL_BAR_CLASS, SCROLL_THUMB_CLASS } from "uictmplt-loader!./template.ts";

const kThumbSizeMin = 40;

interface ThmbClickState {
  dy: number;
};

interface ChangePositionEvent {
  position: number;
};

type ChangePositionListener = (event: ChangePositionEvent) => void;

class UIScrollControl {
  private _thmbSize = 0;
  private _thmbEnable?: boolean;
  private _maxPosition = 0;
  private _viewSize = 0;
  private _thmbClickState?: ThmbClickState;
  private _factor = 0.0;

  private _scrollBarElement?: HTMLElement;
  private _thmbElement: HTMLElement;

  private _listeners = {
    changeposition: [] as ChangePositionListener[],
  };

  public constructor(element: HTMLElement) {
    this._thmbElement = NQDOM.getElementByClassName(element, SCROLL_THUMB_CLASS) as HTMLElement;
    this._thmbElement && this._thmbElement.addEventListener("mousedown", event => {
      if (event.buttons === 1) {
        this._thmbClickState = { dy: event.offsetY };
        event.preventDefault();
      }
      else {
        this._thmbClickState = undefined;
      }
    });

    this._scrollBarElement = NQDOM.getElementByClassName(element, SCROLL_BAR_CLASS);
    this._scrollBarElement && this._scrollBarElement.addEventListener("mousedown", (event: MouseEvent) => {
      const rect = this._thmbElement.getBoundingClientRect();
      const diff = (event.y < rect.top) ? -this._viewSize : ((event.y > rect.bottom) ? this._viewSize : 0);
      if (diff != 0) {
        const position = this.position;
        this.setPosition(position + diff, true);
      }
      event.preventDefault();
    });

    window.addEventListener("mousemove", event => {
      if (this._thmbClickState) {
        if (event.buttons === 1 && this._scrollBarElement) {
          const rect = this._scrollBarElement.getBoundingClientRect();
          const y = event.pageY - rect.top - this._thmbClickState.dy;
          const height = this._scrollBarElement.clientHeight - this._thmbSize;
          this.setFactor(y / height, true);
        }
        else {
          this._thmbClickState = undefined;
        }
      }
    });
    
    window.addEventListener("mouseup", event => {
      if (this._thmbClickState && event.button !== 1) {
        this._thmbClickState = undefined;
      }
    });

    window.addEventListener("resize", event => {
      this.updateThumb(false);
    });

    this.updateThumb(false);
  }
  
  public updateThumb(notify: boolean) {
    if (!this._scrollBarElement)
      return;

    const height = this._scrollBarElement.clientHeight;
    const scale = Math.min(1, this._viewSize / this._maxPosition);
    const enable = this._viewSize <= this._maxPosition;

    this._thmbSize = Math.max(kThumbSizeMin, Math.floor(scale * height));
    this._thmbElement.style.height = this._thmbSize + "px";
    this._thmbElement.style.top = Math.round((height - this._thmbSize) * this._factor)  + "px";

    if (this._thmbEnable !== enable) {
      this._thmbEnable = enable;
      this._thmbElement.style.display = enable ? "" : "none";
    }
    
    if (notify) {
      this._listeners.changeposition.forEach(listener => listener({ position: this.position }));
    }
  }

  public setFactor(value: number, notify: boolean) {
    const claimFactor = Math.max(0.0, Math.min(1.0, value));
    if (this._factor !== claimFactor) {
      this._factor = claimFactor;
      this.updateThumb(notify);
    }
  }

  public setPosition(value: number, notify: boolean) {
    this.setFactor(value > 0 ? value / (this._maxPosition - this._viewSize) : 0.0, notify);
  }

  // public
  public get position() {
    return Math.round((this._maxPosition - this._viewSize) * this._factor);
  }

  public set position(value) {
    this.setPosition(value, false);
  }

  public get maxPosition() {
    return this._maxPosition;
  }

  public set maxPosition(value) {
    if (this._maxPosition != value) {
      this._maxPosition = value;
      this.updateThumb(false);
    }
  }

  public get viewSize() {
    return this._viewSize;
  }

  set viewSize(value) {
    if (this._viewSize != value) {
      this._viewSize = value;
      this.updateThumb(false);
    }
  }

  public addEventListener(type: "changeposition", listener: ChangePositionListener) {
    this._listeners[type].push(listener);
  }
};

function createBaseElement(tagName: string, text: string) {
  const element = document.createElement(tagName);
  element.textContent = text;
  return element;
};

const createOffsetElement = (offset: string) => createBaseElement("li", offset);
const createBinaryElement = (binary: string) => createBaseElement("s", binary);
const createAsciiElement = (ascii: string) => createBaseElement("li", ascii);

const READYSTATECHANGE_EVENT = 'readystatechange';
const LOAD_EVENT = 'load';
const ERROR_EVENT = 'error';

function isElementVisible(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

interface HexContentItem {
  offset: HTMLElement;
  binary: HTMLElement;
  ascii: HTMLElement;
};

function makeElementList(offset: number, size: number, buffer: ArrayBuffer, padSize: number) {
  const result: HexContentItem[] = [];
  let sz = size;
  let pos = offset;
  let index = 0;
  const bytes = new Uint8Array(buffer);

  while (sz > 0) {
    const n = Math.min(sz, 16);
    const offset = pos.toString().padStart(padSize, '0');

    let binary = "";
    let ascii = "";

    for (let i = 0; i < n; i++) {
      const b = bytes[index++];
      ascii += (31 < b && b < 127) ? String.fromCharCode(b) : ".";
      const hex = b.toString(16).toUpperCase().padStart(2, '0');
      if (i == 8)
        binary += "  ";
      else if (i != 0)
        binary += " ";
      binary += hex;
    }
    
    result.push({
      offset: createOffsetElement(offset),
      binary: createBinaryElement(binary),
      ascii: createAsciiElement(ascii),
    });

    pos += n;
    sz -= n;
  }

  return result;
}

export class HexContent extends BaseControl {
  private _scroll?: UIScrollControl;
  private _chunkLoader?: FileChunkLoader;

  private _offsetParent!: HTMLElement;
  private _binaryParent!: HTMLElement;
  private _asciiParent!: HTMLElement;

  private _numberOfFileLines = 0;
  private _tailPosition?: number;
  private _padSize = 0;
  private _data: HexContentItem[] = [];
  private _itemHeight?: number;
  private _offset = 0;
  private _headPosition = 0;
  private _headGoal = 0;
  private _tailGoal = 0;

  private _readyState = 'idle';
  private _visible = false;

  protected _init() {
    const scrollElm = NQDOM.getElementByClassName(this.element, SCROLL_MAIN_CLASS);
    if (scrollElm) {
      this._scroll = new UIScrollControl(scrollElm);
      this._scroll.addEventListener("changeposition", (event: ChangePositionEvent) => {
        this.updateContent(false, event.position);
      });
    }

    this._offsetParent = NQDOM.getElementByClassName(this.element, OFSLIST_CLASS) as HTMLElement;
    this._binaryParent = NQDOM.getElementByClassName(this.element, BINLIST_CLASS) as HTMLElement;
    this._asciiParent = NQDOM.getElementByClassName(this.element, TXTLIST_CLASS) as HTMLElement;
  
    const containerElm = NQDOM.getElementByClassName(this.element, CONTENT_CLASS);
    if (containerElm) {
      const observer = new MutationObserver(() => {
        let rootParent: ParentNode = containerElm;
        while (rootParent.parentNode)
          rootParent = rootParent.parentNode;
        if (rootParent instanceof Document) {
          observer.disconnect();
          containerElm.addEventListener("wheel",  e => {
            e.preventDefault();
            if (this._scroll) {
              this._scroll.position = this._scroll.position + e.deltaY;
              this.updateContent(false, this._scroll.position);
            }
          });
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    window.addEventListener("resize", event => this._onResize());

    this._visible = isElementVisible(this.element);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        this._visible = entry.isIntersecting;
        this._visible && this._onResize();
      });
    }, { threshold: [0] });
    observer.observe(this.element);

    this.registerEvent(READYSTATECHANGE_EVENT, LOAD_EVENT, ERROR_EVENT);
  }

  private _onResize() {
    if (this._visible && this._itemHeight !== undefined)
      this.updateContent(true, this._offset);
  }

  public get scroll() {
    return this._scroll;
  }

  public get numberOfFileLines() {
    return this._numberOfFileLines;
  }

  public set numberOfFileLines(value) {
    this._numberOfFileLines = value;
  }

  public clear() {
    this._offsetParent.innerHTML = "";
    this._binaryParent.innerHTML = "";
    this._asciiParent.innerHTML = "";
  }

  public resetContent() {
    if (this._tailPosition !== undefined) {
      this.clear();
      this._tailPosition = 0;
    }
  }

  public pushBack(item: HexContentItem) {
    this._offsetParent.appendChild(item.offset);
    this._binaryParent.appendChild(item.binary);
    this._asciiParent.appendChild(item.ascii);
  }

  public popBack() {
    this._offsetParent.lastElementChild?.remove();
    this._binaryParent.lastElementChild?.remove();
    this._asciiParent.lastElementChild?.remove();
  }

  public pushFront(item: HexContentItem) {
    this._offsetParent.insertBefore(item.offset, this._offsetParent.firstElementChild);
    this._binaryParent.insertBefore(item.binary, this._binaryParent.firstElementChild);
    this._asciiParent.insertBefore(item.ascii, this._asciiParent.firstElementChild);
  }

  public popFront() {
    this._offsetParent.firstElementChild?.remove();
    this._binaryParent.firstElementChild?.remove();
    this._asciiParent.firstElementChild?.remove();
  }

  public updateContent(updateHeight: boolean, newOffset: number) {
    if (!this._scroll)
      return;
    /* is startup */
    let isStartup = false;
    if (this._tailPosition === undefined) {
      isStartup = true;
      this._scroll.position = 0;
      this._headGoal = 0;
      this._headPosition = 0;
      this._tailPosition = 0;
      this._offset = 0;

      const item = this._data[this._offset + 0];
      if (!item)
        return;

      const testArray = new Uint8Array(16);
      const testItem = makeElementList(0, testArray.length, testArray.buffer, this._padSize)[0];

      this.pushBack(testItem);      
      this._offsetParent.style.width = testItem.offset.clientWidth + 'px';
      this._binaryParent.style.width = testItem.binary.clientWidth + 'px';
      this._asciiParent.style.width = testItem.ascii.clientWidth + 'px';
      this.popBack();

      this.pushBack(item);
      this._tailPosition++;

      this._itemHeight = item.offset.offsetHeight;
      updateHeight = true;
    }

    if (this._itemHeight === undefined)
      return;

    if (updateHeight || this._offset != newOffset) {
      const numberOfHtmlLines = Math.floor(this._offsetParent.clientHeight / this._itemHeight);
      this._tailGoal = Math.min(numberOfHtmlLines, this._numberOfFileLines);
      this._scroll.viewSize = numberOfHtmlLines;
      
      if (!isStartup) {
        if (newOffset == this._offset) {
          newOffset = this._scroll.position;
        }
        if (newOffset < this._offset) {
          if ((newOffset + numberOfHtmlLines) < this._offset) {
            this._headGoal = 0;
            this._headPosition = 0;
            this._tailPosition = 0;
            this.clear();
          }
          else {
            const diff = this._offset - newOffset;
            this._headPosition += diff;
            this._tailPosition += diff;
          }
        }
        else if (newOffset > this._offset) {
          if (newOffset > (this._offset + numberOfHtmlLines)) {
            this._headGoal = 0;
            this._headPosition = 0;
            this._tailPosition = 0;
            this.clear();
          }
          else {
            const diff = newOffset - this._offset;
            this._headPosition -= diff;
            this._tailPosition -= diff;
          }
        }
        if (newOffset != this._offset) {
          this._offset = newOffset;
          if (this._chunkLoader)
            this._chunkLoader.setPreferOffset(this._offset * 16);
        }
      }
    }

    while (this._headPosition < this._headGoal) {
      this.popFront();
      this._headPosition++;
    }

    while (this._tailPosition > this._tailGoal) {
      this.popBack();
      this._tailPosition--;
    }
    
    while (this._headPosition > this._headGoal) {
      const item = this._data[this._offset + this._headPosition - 1];
      if (!item) {
        break;
      }
      this.pushFront(item);
      this._headPosition--;
    }
    
    while (this._tailPosition < this._tailGoal) {
      const item = this._data[this._offset + this._tailPosition];
      if (!item) {
        break;
      }
      this.pushBack(item);
      this._tailPosition++;
    }
  }
  
  public setOffset(value: number) {
    this.updateContent(false, value);
  }

  public setContent(content: File) {
    if (!this._scroll)
      return;

    this.resetContent();

    if (this._chunkLoader) {
      this._chunkLoader.stop();
    }

    this._tailPosition = undefined;
    this._numberOfFileLines = Math.ceil(content.size / 16);
    this._data = new Array(this._numberOfFileLines);

    this._padSize = 0;
    for (let n = 1; n < content.size; n *= 10) {
      this._padSize++;
    }
    this._padSize = Math.max(this._padSize, 8);

    // console.log(`File size: ${file.size}`);
    this._chunkLoader = new FileChunkLoader(content);
    this._chunkLoader.addEventListener("chunk", e => {
      // console.log(`Load chunk - offset: ${e.offset} size: ${e.size}`);
      let pos = e.offset / 16;
      for (const item of makeElementList(e.offset, e.size, e.buffer, this._padSize)) {
        this._data[pos++] = item;
      }

      const isStartup = (this._tailPosition === undefined);
      if (isStartup) {
        this._readyState = 'loading';
        this.dispatchEvent(READYSTATECHANGE_EVENT, { readyState: this._readyState });
      }

      if (isStartup || this._tailPosition !== this._tailGoal) {
        this.updateContent(false, this._offset);
      }

      if (isStartup) {
        this._readyState = 'complete';
        this.dispatchEvent(READYSTATECHANGE_EVENT, { readyState: this._readyState });
      }
    });

    this._chunkLoader.addEventListener("done", e => {
      this.dispatchEvent(LOAD_EVENT, {});
    });

    this._chunkLoader.addEventListener("error", e => {
      this.dispatchEvent(ERROR_EVENT, { message: e.message });
    });

    this._chunkLoader.start();

    this._scroll.maxPosition = this._numberOfFileLines;
  }
};
