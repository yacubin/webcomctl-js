import { BaseControl, Random } from "webnetq-js";
// @ts-ignore
import { HIDDEN_CLASS } from "uictmplt-loader!./template.ts";

const UPLOAD_EVENT = 'upload';

export class HdrUploadButton extends BaseControl {
  private _inputElm?: HTMLInputElement;
  private _uploadVisible = false;

  protected _init() {
    const inputId = Random.nextElementId();
  
    this._inputElm = document.createElement('input');
    this._inputElm.id = inputId;
    this._inputElm.type = "file";
    this._inputElm.addEventListener("input", (event) => {
      const inputElm = event.target as HTMLInputElement;
      this.dispatchEvent(UPLOAD_EVENT, {files: inputElm.files});
      inputElm.value = "";
    });

    this.element.appendChild(this._inputElm);
    this.element.setAttribute('for', inputId);

    this.registerEvent(UPLOAD_EVENT);
  }

  public setUploadVisible(value: boolean) {
    if (this._uploadVisible != value) {
      this.element.classList.toggle(HIDDEN_CLASS);
      this._uploadVisible = value;
    }
  }
};
