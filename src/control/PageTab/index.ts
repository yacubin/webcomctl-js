import { BaseControl, Random, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, ITEM_HTML, FOCUS_CLASS, CLOSE_CLASS, TEXT_CLASS, LOADING_CLASS } from "uictmplt-loader!./template.ts";

interface TabItemInfo {
  name?: string;
  focus: boolean;
  text: string;
};

type TabItemEventListener = (event: TabItemInfo) => void;

interface TabItemOptions {
  name: string;
  text: string;
  focus: boolean;
  onclose: TabItemEventListener;
  onfocus: TabItemEventListener;
};

class TabItemControl {
  private _name: string;
  private _element: HTMLElement;

  private _focus = true;
  private _loading = false;
  private _text = '';
  private _onfocuscanceled = false;

  private _focusElm?: HTMLElement;
  private _textElm?: HTMLElement;
  private _closeElm?: HTMLElement;

  private _onclose: TabItemEventListener;
  private _onfocus: TabItemEventListener;

  private _listeners = {
    close: [] as TabItemEventListener[],
    focus: [] as TabItemEventListener[],
  };

  public constructor(options: TabItemOptions) {
    this._element = NQDOM.createElement(ITEM_HTML) as HTMLElement;
    this._element.id = Random.nextElementId();
    this._element.title = options.text;
    this._element.addEventListener('dragstart', event => this.onOnDragStart(event));

    this._name = options.name;
    
    this._focusElm = NQDOM.getElementByClassName(this._element, FOCUS_CLASS);
    this._focusElm && this._focusElm.addEventListener('click', event => this.onOnFocusClick(event), false);

    this._closeElm = NQDOM.getElementByClassName(this._element, CLOSE_CLASS);
    this._closeElm && this._closeElm.addEventListener('click', event => this.onOnCloseClick(event));

    this._textElm = NQDOM.getElementByClassName(this._element, TEXT_CLASS);

    this._onclose = options.onclose;
    this._onfocus = options.onfocus;

    this.text = options.text;
    this.focus = options.focus;
  }

  public get name() {
    return this._name;
  }

  public get element() {
    return this._element;
  }

  public get text() { return this._text; }
  public set text(value) {
    if (this._text != value) {
      this._textElm && (this._textElm.textContent = value);
      this._text = value;
    }
  }

  public get focus() { return this._focus; }
  public set focus(value) {
    if (this._focus != value) {
      if (this._focusElm) {
        const cname = FOCUS_CLASS;
        const clist = this._focusElm.classList;
        value ? clist.add(cname) : clist.remove(cname);
      }
      this._focus = value;
    }
  }
  
  public get loading() { return this._loading; }
  public set loading(value) {
    if (this._loading != value) {
      if (this._focusElm) {
        const cname = LOADING_CLASS;
        const clist = this._focusElm.classList;
        value ? clist.add(cname) : clist.remove(cname);
      }
      this._loading = value;
    }
  }

  public addEventListener(type: "focus" | "close", listener: TabItemEventListener) {
    this._listeners[type].push(listener);
  }

  public getInfo() {
    const info: TabItemInfo = {
      focus: this._focus,
      text: this._text,
    };

    if (this._name)
      info.name = this._name;

    return info;
  }

  public onOnFocusClick(event: Event) {
    if (!this._onfocuscanceled) {
      const info = this.getInfo();
      this._listeners.focus.forEach(listener => listener(info));
    }
    this._onfocuscanceled = false;
  }

  public onOnCloseClick(event: Event) {
    const info = this.getInfo();
    this._listeners.close.forEach(listener => listener(info));
    this._onfocuscanceled = true;
  }

  public onOnDragStart(event: DragEvent) {
    (event.dataTransfer as DataTransfer).setData("text/plain", this._name);
  }

  public emitClose(event: TabItemInfo) {
    this._onclose(event);
  }

  public emitFocus(event: TabItemInfo) {
    this._onfocus(event);
  }

  public release() {
    this._listeners.close.length = 0;
    this._listeners.focus.length = 0;
    this._focusElm = undefined;
    this._textElm = undefined;
    this._closeElm = undefined;
  }
};

const EMPTY_EVENT = 'empty';

interface PageTabItemParams {
  focus: boolean;
  text: string;
  onclose: TabItemEventListener;
  onfocus: TabItemEventListener;
};

export class PageTab extends BaseControl {
  private _items = [] as TabItemControl[];
  private _focusIndex = 0;
  private _focusHistory = [] as TabItemControl[];

  private _idCounter = 1;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this.registerEvent(EMPTY_EVENT);
  }

  private _unfocusAll() {
    this._items.forEach(iter => iter.focus = false);
  }

  private _removeItem(item: TabItemControl) {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
    this.element.removeChild(item.element);
    item.release();
  }

  private _setFocusItem(item: TabItemControl) {
    this._removeFromHistory(item);
    this._focusHistory.push(item);
    item.focus = true;
  }

  private _removeFromHistory(item: TabItemControl) {
    const index = this._focusHistory.indexOf(item);
    (index !== -1) && (this._focusHistory.splice(index, 1));
  }

  public appendItem(params: PageTabItemParams) {
    this._idCounter = Math.max(this._idCounter + 1, 1);
    const name = "N" + this._idCounter.toString().padStart(3, '0');

    const focus = params.focus || this._items.length == 0;
    const item = new TabItemControl({
      name,
      text: params.text,
      onclose: params.onclose || (() => {}),
      onfocus: params.onfocus || (() => {}),
      focus,
    });
    
    if (focus) {
      if (this._items.length)
        this._items[this._focusIndex].focus = false;
      this._focusIndex = this._items.length;
      this._setFocusItem(item);
    }

    item.addEventListener('focus', event => {
      if (!event.focus) {
        this._items[this._focusIndex].focus = false;
        this._focusIndex = this._items.indexOf(item);
        this._setFocusItem(item);
        item.emitFocus(item.getInfo());
      }
    });

    item.addEventListener('close', event => {
      const index = this._items.indexOf(item);
      this._removeFromHistory(item);
      this._removeItem(item);
      const isLast = (this._items.length == 0);
      let newFocusItem = null;
      if (event.focus && !isLast) {
        if (this._focusHistory.length) {
          newFocusItem = this._focusHistory[this._focusHistory.length - 1];
          this._focusIndex = this._items.indexOf(newFocusItem);
        }
        else {
          if (this._items.length <= this._focusIndex)
            this._focusIndex = this._items.length - 1;
          newFocusItem = this._items[this._focusIndex];
        }
      }
      else if (index < this._focusIndex) {
        this._focusIndex--;
      }
      item.emitClose(event);
      if (newFocusItem) {
        this._setFocusItem(newFocusItem);
        newFocusItem.emitFocus(newFocusItem.getInfo());
      }
      else if (isLast) {
        this.dispatchEvent(EMPTY_EVENT, {});
      }
    });

    this._items.push(item);
    this.element.appendChild(item.element);

    if (!params.focus && this._items.length == 1) {
      item.emitFocus(item.getInfo());
    }

    return name;
  }

  public setLoadingByName(name: string, value: boolean) {
    const item = this._items.find((item) => item.name && item.name === name);
    if (item) {
      item.loading = value;
    }
  }

  public removeItemByName(name: string) {
    const item = this._items.find((item) => item.name && item.name === name);
    if (!item)
      return false;
    this._removeItem(item);
    return true;
  }
};
