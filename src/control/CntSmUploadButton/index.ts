import { BaseControl, Random } from "webnetq-js";
// @ts-ignore
import { LOAD_CLASS } from "uictmplt-loader!./template.ts";

const UPLOAD_EVENT = 'upload';

export class CntSmUploadButton extends BaseControl {
  protected _init() {
    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        this.dispatchEvent(UPLOAD_EVENT, {files});
        (event.target as any).value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this.registerEvent(UPLOAD_EVENT);
  }

  public get loadEnable() { return this.element.classList.contains(LOAD_CLASS); }
  public set loadEnable(value) {
    this.element.classList.toggle(LOAD_CLASS, value);
  }
};
