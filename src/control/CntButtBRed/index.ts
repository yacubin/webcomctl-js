import { BaseControl, Random, NQDOM } from "webnetq-js";
import { ROOT_HTML, CSS, ROOT_CLASS, LOAD_CLASS, HEIGHT_CLASS } from "./template.node";

const UPLOAD_EVENT = 'upload';

export namespace CntButtBRed {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _heightElm?: HTMLElement;
  protected _init() {
    const lableElm = super.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = (event.target as HTMLInputElement).files;
        super.dispatchEvent(UPLOAD_EVENT, {files});
        (event.target as any).value = null;
      });

      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this._heightElm = NQDOM.getElementByClassName(super.element, HEIGHT_CLASS);
    if (this._heightElm) {
      this._heightElm.style.height = "0";
      this._heightElm.innerText = "";
    }

    super.registerEvent(UPLOAD_EVENT);
  }

  public loadProcess(value: number | null) {
    if (value === null) {
      super.element.classList.remove(LOAD_CLASS);
      super.element.classList.add(ROOT_CLASS);
    }
    else if (Number.isNaN(value)) {
      super.element.classList.remove(ROOT_CLASS);
      super.element.classList.add(LOAD_CLASS);
    }
    else if (this._heightElm) {
      this._heightElm.style.height = value + "%";
    }
  }
};

} // namespace CntButtBRed
