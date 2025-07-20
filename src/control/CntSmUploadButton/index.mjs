import { BaseControl, Random } from 'webnetq-js';
import { LOAD_CLASS } from 'uictmplt-loader!./template.mjs';

const UPLOAD_EVENT = 'upload';

export class CntSmUploadButton extends BaseControl {
  _loadEnable = false;

  _init() {
    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = event.target.files;
        this.dispatchEvent(UPLOAD_EVENT, {files});
        event.target.value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this.registerEvent(UPLOAD_EVENT);
  }

  get loadEnable() { return this._loadEnable; }
  set loadEnable(value) {
    if (value != this._loadEnable) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](LOAD_CLASS);
      this._loadEnable = value;
    }
  }
};
