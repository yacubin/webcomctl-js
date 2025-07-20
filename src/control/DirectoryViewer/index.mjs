import { BaseControl, NQDOM } from 'webnetq-js';
import { ITEM_HTML, ITEM_LIST, FOLDER_CLASS, FILE_CLASS, LINK_CLASS, TYPE_CLASS, SIZE_CLASS, DATE_CLASS } from 'uictmplt-loader!./template.mjs';

export class DirectoryViewer extends BaseControl {
  _nameCounter = 0;
  _itemlistElm;

  _init() {
    this._itemlistElm = NQDOM.getElementByClassName(this.element, ITEM_LIST);
  }

  addItem({name, type, size, date, action}) {
    if (!this._itemlistElm)
      return;

    const itemElm = NQDOM.createElement(ITEM_HTML);

    if (type === "file")
      itemElm.classList.add(FILE_CLASS);
    else if (type === "folder")
      itemElm.classList.add(FOLDER_CLASS);

    const linkElm = NQDOM.getElementByClassName(itemElm, LINK_CLASS);
    if (linkElm) {
      if (!name) {
        name = "NAME#" + this._nameCounter++;
      }
      linkElm.textContent = name;
      if (typeof action === "string") {
        linkElm.href = action;
      }
    }

    const typeElm = NQDOM.getElementByClassName(itemElm, TYPE_CLASS);
    typeElm && (typeElm.textContent = type || "-");

    const sizeElm = NQDOM.getElementByClassName(itemElm, SIZE_CLASS);
    sizeElm && (sizeElm.textContent = size || "-");

    const dateElm = NQDOM.getElementByClassName(itemElm, DATE_CLASS);
    dateElm && (dateElm.textContent = date || "-");

    this._itemlistElm.appendChild(itemElm);
  }
};
