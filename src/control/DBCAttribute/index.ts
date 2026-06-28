import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, ATTRIBUTES_LIST } from "./template.node";

export namespace DBCAttribute {

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
  private _attrListElement?: HTMLElement;

  protected _init() {
    this._attrListElement = NQDOM.getElementByClassName(super.element, ATTRIBUTES_LIST);
  }

  public setValue(attributes: { [key: string]: string }) {
    if (this._attrListElement) {
      this._attrListElement.textContent = "";
      if (attributes) {
        for (const key of Object.keys(attributes).sort()) {
          const element = document.createElement("div");

          const keyElm = document.createElement("h5");
          keyElm.textContent = key + ":";
          element.appendChild(keyElm);

          const valElem = document.createElement("u");
          valElem.textContent = attributes[key];
          element.appendChild(valElem);
            
          this._attrListElement.appendChild(element);
        }
      }
    }
  }
};

} // namespace DBCAttribute
