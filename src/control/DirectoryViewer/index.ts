import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_HTML, ITEM_HTML, ITEM_LIST, CSS, ROOT_CLASS, FOLDER_CLASS, FILE_CLASS, LINK_CLASS, TYPE_CLASS, SIZE_CLASS, DATE_CLASS } from "./template.node";

interface ItemParams {
  name: string;
  type: "file" | "folder";
  size: string;
  date: string;
  action: string;
};

export namespace DirectoryViewer {

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
  private _nameCounter = 0;
  private _itemlistElm?: HTMLElement;

  protected _init() {
    this._itemlistElm = NQDOM.getElementByClassName(this.element, ITEM_LIST);
  }

  public addItem({name, type, size, date, action}: ItemParams) {
    if (!this._itemlistElm)
      return;

    const itemElm = NQDOM.createElement(ITEM_HTML) as HTMLElement;

    if (type === "file")
      itemElm.classList.add(FILE_CLASS);
    else if (type === "folder")
      itemElm.classList.add(FOLDER_CLASS);

    const linkElm = NQDOM.getElementByClassName(itemElm, LINK_CLASS) as HTMLAnchorElement;
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

} // namespace DirectoryViewer
