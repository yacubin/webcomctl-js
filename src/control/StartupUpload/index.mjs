import { NQDOM, BaseControl, Random } from 'webnetq-js';
import { DHIDE_CLASS, DSHOW_CLASS, FDROP_CLASS } from 'uictmplt-loader!./template.mjs';

const UPLOAD_EVENT = 'upload';

export class StartupUpload extends BaseControl {
  _fdropElm;
  _inputElm;

  _init() {
    this._fdropElm = NQDOM.getElementByClassName(this.element, FDROP_CLASS);
    if (this._fdropElm) {
      const showDropArea = () => {
        this._fdropElm.classList.remove(DHIDE_CLASS);
        this._fdropElm.classList.add(DSHOW_CLASS);
      };
      const hideDropArea = () => {
        this._fdropElm.classList.remove(DSHOW_CLASS);
        this._fdropElm.classList.add(DHIDE_CLASS);
      };
      let count = 0;
      this._fdropElm.addEventListener("dragenter", (event) => {
        if (count++ == 0)
          showDropArea();
      });
      this._fdropElm.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      this._fdropElm.addEventListener("dragleave", (event) => {
        if (--count == 0)
          hideDropArea();
      });
      this._fdropElm.addEventListener("drop", (event) => {
        event.preventDefault();
        hideDropArea();
        count = 0;

        if (event.dataTransfer.items) {
          let files = [];
          for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
              const file = event.dataTransfer.items[i].getAsFile();
              files.push(file);
            }
          }
          this.dispatchEvent(UPLOAD_EVENT, { kind: 'drop', files });
        }
      });
    }

    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = event.target.files;
        this.dispatchEvent(UPLOAD_EVENT, { kind: 'input', files });
        event.target.value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this.registerEvent(UPLOAD_EVENT);
  }
};
