import { BaseControl, NQDOM, FileChunkLoader } from 'webnetq-js';
import { CONTENT_CLASS, OFSLIST_CLASS, BINLIST_CLASS, TXTLIST_CLASS, SCROLL_MAIN_CLASS, SCROLL_BAR_CLASS, SCROLL_THUMB_CLASS } from 'uictmplt-loader!./template.mjs';

const kThumbSizeMin = 40;

class UIScrollControl {
  _thmbSize = 0;
  _thmbEnable = null;
  _maxPosition = 0;
  _viewSize = 0;
  _thmbClickState = null;
  _factor = 0.0;

  _scrollElm;
  _scrollBarElement;
  _thmbElement;

  _listeners = {
    changeposition: [],
  };

  constructor(element) {
    this._thmbElement = NQDOM.getElementByClassName(element, SCROLL_THUMB_CLASS);
    this._thmbElement && this._thmbElement.addEventListener("mousedown", event => {
      if (event.buttons === 1) {
        this._thmbClickState = { dy: event.offsetY };
        event.preventDefault();
      }
      else {
        this._thmbClickState = null;
      }
    });

    this._scrollBarElement = NQDOM.getElementByClassName(element, SCROLL_BAR_CLASS);
    this._scrollBarElement && this._scrollBarElement.addEventListener("mousedown", event => {
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
          this._thmbClickState = null;
        }
      }
    });
    
    window.addEventListener("mouseup", event => {
      if (this._thmbClickState && event.button !== 1) {
        this._thmbClickState = null;
      }
    });

    window.addEventListener("resize", event => {
      this.updateThumb(false);
    });

    this.updateThumb(false);
  }
  
  updateThumb(notify) {
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

  setFactor(value, notify) {
    const claimFactor = Math.max(0.0, Math.min(1.0, value));
    if (this._factor !== claimFactor) {
      this._factor = claimFactor;
      this.updateThumb(notify);
    }
  }

  setPosition(value, notify) {
    this.setFactor(value > 0 ? value / (this._maxPosition - this._viewSize) : 0.0, notify);
  }

  // public
  get position() {
    return Math.round((this._maxPosition - this._viewSize) * this._factor);
  }

  set position(value) {
    this.setPosition(value, false);
  }

  get maxPosition() {
    return this._maxPosition;
  }

  set maxPosition(value) {
    if (this._maxPosition != value) {
      this._maxPosition = value;
      this.updateThumb(false);
    }
  }

  get viewSize() {
    return this._viewSize;
  }

  set viewSize(value) {
    if (this._viewSize != value) {
      this._viewSize = value;
      this.updateThumb(false);
    }
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }
};


const createOffsetElement = offset => {
  return NQDOM.createElement(`<li>${offset}</li>`);
};

const createBinaryElement = binary => {
  return NQDOM.createElement(`<s>${binary}</s>`);
};

const createAsciiElement = ascii => {
  const element = document.createElement("li");
  element.textContent = ascii;
  return element;
};

const READYSTATECHANGE_EVENT = 'readystatechange';
const LOAD_EVENT = 'load';
const ERROR_EVENT = 'error';

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default class UIHexContentControl extends BaseControl {
  _scroll;
  _chunkLoader = null;

  _offsetParent;
  _binaryParent;
  _asciiParent;

  _numberOfFileLines = 0;
  _tailPosition = null;
  _padSize = 0;
  _data = [];
  _itemHeight = null;
  _offset = 0;
  _headPosition = null;
  _headGoal = null;
  _tailGoal = null;

  _readyState = 'idle';
  _visible;

  _init() {
    const scrollElm = NQDOM.getElementByClassName(this.element, SCROLL_MAIN_CLASS);
    if (scrollElm) {
      this._scroll = new UIScrollControl(scrollElm);
      this._scroll.addEventListener("changeposition", event => {
        this.updateContent(false, event.position);
      });
    }

    this._offsetParent = NQDOM.getElementByClassName(this.element, OFSLIST_CLASS);
    this._binaryParent = NQDOM.getElementByClassName(this.element, BINLIST_CLASS);
    this._asciiParent = NQDOM.getElementByClassName(this.element, TXTLIST_CLASS);
  
    const containerElm = NQDOM.getElementByClassName(this.element, CONTENT_CLASS);
    if (containerElm) {
      const observer = new MutationObserver(() => {
        let rootParent = containerElm;
        while (rootParent.parentNode)
          rootParent = rootParent.parentNode;
        if (rootParent instanceof Document) {
          observer.disconnect();
          containerElm.addEventListener("wheel",  e => {
            e.preventDefault();
            this._scroll.position = this._scroll.position + e.deltaY;
            this.updateContent(false, this._scroll.position);
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

  _onResize() {
    if (this._visible && this._itemHeight !== null)
      this.updateContent(true, this._offset);
  }

  get scroll() {
    return this._scroll;
  }

  get numberOfFileLines() {
    return this._numberOfFileLines;
  }

  set numberOfFileLines(value) {
    this._numberOfFileLines = value;
  }

  clear() {
    this._offsetParent.innerHTML = "";
    this._binaryParent.innerHTML = "";
    this._asciiParent.innerHTML = "";
  }

  resetContent() {
    if (this._tailPosition !== null) {
      this.clear();
      this._tailPosition = 0;
    }
  }

  pushBack(item) {
    this._offsetParent.appendChild(item.offset);
    this._binaryParent.appendChild(item.binary);
    this._asciiParent.appendChild(item.ascii);
  }

  popBack() {
    this._offsetParent.lastElementChild.remove();
    this._binaryParent.lastElementChild.remove();
    this._asciiParent.lastElementChild.remove();
  }

  pushFront(item) {
    this._offsetParent.insertBefore(item.offset, this._offsetParent.firstElementChild);
    this._binaryParent.insertBefore(item.binary, this._binaryParent.firstElementChild);
    this._asciiParent.insertBefore(item.ascii, this._asciiParent.firstElementChild);
  }

  popFront() {
    this._offsetParent.firstElementChild.remove();
    this._binaryParent.firstElementChild.remove();
    this._asciiParent.firstElementChild.remove();
  }

  makeElementList(offset, size, buffer) {
    const result = [];
    let sz = size;
    let pos = offset;
    let index = 0;
    const bytes = new Uint8Array(buffer);

    while (sz > 0) {
      const n = Math.min(sz, 16);
      const offset = pos.toString().padStart(this._padSize, '0');
  
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

  updateContent(updateHeight, newOffset) {
    const isStartup = (this._tailPosition === null);
    if (isStartup) {
      this._scroll.position = 0;
      this._headGoal = 0;
      this._headPosition = 0;
      this._tailPosition = 0;
      this._offset = 0;

      const item = this._data[this._offset + 0];
      if (!item)
        return;

      const testArray = new Uint8Array(16);
      const testItem = this.makeElementList(0, testArray.length, testArray.buffer)[0];

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
  
  setOffset(value) {
    this.updateContent(false, value);
  }

  setContent(content) {
    this.resetContent(true);

    if (this._chunkLoader) {
      this._chunkLoader.stop();
    }

    this._tailPosition = null;
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
      for (const item of this.makeElementList(e.offset, e.size, e.buffer)) {
        this._data[pos++] = item;
      }

      const isStartup = (this._tailPosition === null);
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
