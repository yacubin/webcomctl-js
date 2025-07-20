import { BaseControl, NQDOM } from 'webnetq-js';
import { ADDRESSES_INPUT, ADDRESSES_LIST, ADDRESSES_DISABLED, ADDRESSES_SHOW, CONNECT_BTN_ON, CONNECT_BTN_OFF } from 'uictmplt-loader!./template.mjs';

const STATECHANGED_EVENT = 'stateChanged';
const URLCHANGED_EVENT = 'urlChanged';

export class URLField extends BaseControl {
  _disableURL;
  _isShowURLs;
  _address = "";
  _inputElement;
  _listElement;
  _buttonElm;
  _state = false;

  _init()
  {
    this._listElement = NQDOM.getElementByClassName(this.element, ADDRESSES_LIST);

    this._inputElement = NQDOM.getElementByClassName(this.element, ADDRESSES_INPUT);
    if (this._inputElement) {
      let isClick = false;
      this._inputElement.addEventListener('click', () => {
        this._setShowURLs(!!this._listElement.childElementCount && !this._isShowURLs);
        isClick = true;
      });
      window.addEventListener('click', () => {
        !isClick && this.hideURLs();
        isClick = false;
      });
      this._inputElement.value = this._address;
      this._inputElement.addEventListener("change", (event) => {
        this._address = event.target.value;
      });
    }

    this._isShowURLs = this.element.classList.contains(ADDRESSES_SHOW);
    this._disableURL = this.element.classList.contains(ADDRESSES_DISABLED);

    this._buttonElm = NQDOM.getElementByClassName(this.element, CONNECT_BTN_ON);
    if (this._buttonElm) {
      this._buttonElm.addEventListener('click', (event) => {
        const state = !this._state;
        this._buttonElm.classList.toggle(CONNECT_BTN_ON, !state);
        this._buttonElm.classList.toggle(CONNECT_BTN_OFF, state);
        this._buttonElm.value = state ? "Disconnect" : "Connect";
        this._state = state;
        this.dispatchEvent(STATECHANGED_EVENT, {state});
      });
      this.registerEvent(STATECHANGED_EVENT);
    }
  
    this.registerEvent(URLCHANGED_EVENT);
  }

  get currentURL() { return this._address; }
  set currentURL(value)
  {
    if (this._inputElement)
      this._inputElement.value = value;
    this._address = value;
  }

  get disableURL() { return this._disableURL; }
  set disableURL(value)
  {
    this._disableURL = this.element.classList.toggle(ADDRESSES_DISABLED, value);
  }

  appendURL(url)
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

  clearURLs()
  {
    if (this._listElement) {
      this._listElement.textContent = "";
    }
  }

  _setShowURLs(value)
  {
    if (this._isShowURLs != value) {
      this._isShowURLs = this.element.classList.toggle(ADDRESSES_SHOW, value);
    }
  }

  showURLs()
  {
    this._setShowURLs(true);
  }

  hideURLs()
  {
    this._setShowURLs(false);
  }
};
