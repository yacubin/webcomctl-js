import { BaseControl, Random, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, ROOT_CLASS, LOAD_CLASS, HEIGHT_CLASS } from "uictmplt-loader!./template.ts";

const UPLOAD_EVENT = 'upload';

export class CntButtBRed extends BaseControl {
  private _heightElm?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = (event.target as HTMLInputElement).files;
        this.dispatchEvent(UPLOAD_EVENT, {files});
        (event.target as any).value = null;
      });

      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this._heightElm = NQDOM.getElementByClassName(this.element, HEIGHT_CLASS);
    if (this._heightElm) {
      this._heightElm.style.height = "0";
      this._heightElm.innerText = "";
    }

    this.registerEvent(UPLOAD_EVENT);
  }

  public loadProcess(value: number | null) {
    if (value === null) {
      this.element.classList.remove(LOAD_CLASS);
      this.element.classList.add(ROOT_CLASS);
    }
    else if (Number.isNaN(value)) {
      this.element.classList.remove(ROOT_CLASS);
      this.element.classList.add(LOAD_CLASS);
    }
    else if (this._heightElm) {
      this._heightElm.style.height = value + "%";
    }
  }
};
