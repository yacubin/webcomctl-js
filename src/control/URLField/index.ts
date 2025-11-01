import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, ADDRESSES_INPUT, ADDRESSES_LIST, ADDRESSES_DISABLED, ADDRESSES_SHOW, CONNECT_BTN_ON, CONNECT_BTN_OFF } from "uictmplt-loader!./template.ts";

const STATECHANGED_EVENT = 'stateChanged';
const URLCHANGED_EVENT = 'urlChanged';

export class URLField extends BaseControl {
  private _disableURL = false;
  private _isShowURLs = false;
  private _state = false;
  private _address = "";
  private _inputElement?: HTMLInputElement;
  private _listElement?: HTMLElement;
  private _buttonElm?: HTMLInputElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init()
  {
    this._listElement = NQDOM.getElementByClassName(this.element, ADDRESSES_LIST);

    this._inputElement = NQDOM.getElementByClassName(this.element, ADDRESSES_INPUT) as HTMLInputElement;
    if (this._inputElement) {
      let isClick = false;
      this._inputElement.addEventListener('click', () => {
        const flag = !!this._listElement && (this._listElement.childElementCount > 0) && !this._isShowURLs;
        this.showURLsImpl(flag);
        isClick = true;
      });
      window.addEventListener('click', () => {
        !isClick && this.hideURLs();
        isClick = false;
      });
      this._inputElement.value = this._address;
      this._inputElement.addEventListener("change", (event) => {
        this._address = (event.target as HTMLInputElement).value;
      });
    }

    this._isShowURLs = this.element.classList.contains(ADDRESSES_SHOW);
    this._disableURL = this.element.classList.contains(ADDRESSES_DISABLED);

    this._buttonElm = NQDOM.getElementByClassName(this.element, CONNECT_BTN_ON) as HTMLInputElement;
    if (this._buttonElm) {
      const buttonElm = this._buttonElm;
      this._buttonElm.addEventListener('click', (event) => {
        const state = !this._state;
        buttonElm.classList.toggle(CONNECT_BTN_ON, !state);
        buttonElm.classList.toggle(CONNECT_BTN_OFF, state);
        buttonElm.value = state ? "Disconnect" : "Connect";
        this._state = state;
        this.dispatchEvent(STATECHANGED_EVENT, {state});
      });
      this.registerEvent(STATECHANGED_EVENT);
    }
  
    this.registerEvent(URLCHANGED_EVENT);
  }

  public get currentURL() { return this._address; }
  public set currentURL(value)
  {
    if (this._inputElement)
      this._inputElement.value = value;
    this._address = value;
  }

  public get disableURL() { return this._disableURL; }
  public set disableURL(value)
  {
    this._disableURL = this.element.classList.toggle(ADDRESSES_DISABLED, value);
  }

  public appendURL(url: string)
  {
    if (this._listElement) {
      const item = document.createElement("li");
      item.textContent = url;
  
      item.addEventListener('click', (event) => {
        this.currentURL = url;
        this.hideURLs();
        this.dispatchEvent(URLCHANGED_EVENT, {url});
      });
  
      this._listElement.appendChild(item);
    }
  }

  public clearURLs()
  {
    if (this._listElement) {
      this._listElement.textContent = "";
    }
  }

  private showURLsImpl(value: boolean)
  {
    if (this._isShowURLs != value) {
      this._isShowURLs = this.element.classList.toggle(ADDRESSES_SHOW, value);
    }
  }

  public showURLs()
  {
    this.showURLsImpl(true);
  }

  public hideURLs()
  {
    this.showURLsImpl(false);
  }
};
