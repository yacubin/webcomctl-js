import { BaseControl, Random, NQDOM } from "webnetq-js";
import { ROOT_HTML, CSS, ROOT_CLASS, LOAD_CLASS } from "./template.node";

const UPLOAD_EVENT = 'upload';

export namespace CntSmUploadButton {

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
  protected _init() {
    const lableElm = super.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        super.dispatchEvent(UPLOAD_EVENT, {files});
        (event.target as any).value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    super.registerEvent(UPLOAD_EVENT);
  }

  public get loadEnable() { return super.element.classList.contains(LOAD_CLASS); }
  public set loadEnable(value) {
    super.element.classList.toggle(LOAD_CLASS, value);
  }
};

} // namespace CntSmUploadButton
