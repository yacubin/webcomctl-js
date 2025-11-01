import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, dbc_attributes_list } from "uictmplt-loader!./template.ts";

export class DBCAttribute extends BaseControl {
  private _attrListElement?: HTMLElement;


  protected _init() {
    this._attrListElement = NQDOM.getElementByClassName(this.element, dbc_attributes_list);
  }

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
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
