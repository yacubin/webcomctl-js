import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_attributes_root, dbc_attributes_list } from 'uictmplt-loader!./template.mjs';

export class DBCAttribute extends BaseControl {
  _attrRootElement;
  _attrListElement;


  _init() {
    this._attrRootElement = NQDOM.getElementByClassName(this.element, dbc_attributes_root);
    this._attrListElement = NQDOM.getElementByClassName(this.element, dbc_attributes_list);
  }

  setAttributes(attributes) {
    if (this._attrRootElement) {
      this._attrRootElement.style.display = attributes ? "" : "none";
    }
    if (this._attrListElement) {
      this._attrListElement.innerHTML = "";
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

