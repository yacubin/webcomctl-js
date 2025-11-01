import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, ITEM_HTML, CENT_CLASS, MAIN_CLASS, LOGO_CLASS, ICON_CLASS, TITLE_CLASS, DESC_CLASS } from "uictmplt-loader!./template.ts";

interface AppParams {
  title?: string;
  main?: string;
  icon?: string[];
  logo?: string[];
  description?: string;
};

export class UtilspotApps extends BaseControl {
  private _listElm?: HTMLElement;
  private _itemTemplate?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._listElm = NQDOM.getElementByClassName(this.element, CENT_CLASS);
    this._itemTemplate = NQDOM.createElement(ITEM_HTML);
  }

  public addItem(params: AppParams) {
    if (!this._listElm || !this._itemTemplate)
      return;

    const itemElm = this._itemTemplate.cloneNode(true) as HTMLElement;

    if (params.main) {
      const mainElm = NQDOM.getElementByClassName(itemElm, MAIN_CLASS) as HTMLAnchorElement;
      if (mainElm) {
        mainElm.href = params.main;
      }
    }

    const logoElm = NQDOM.getElementByClassName(itemElm, LOGO_CLASS);
    if (logoElm && Array.isArray(params.logo)) {
      for (const imgSrc of params.logo) {
        const imgElm = document.createElement("img") as HTMLImageElement;
        imgElm.src = imgSrc;
        logoElm.appendChild(imgElm);
      }
    }

    const iconElm = NQDOM.getElementByClassName(itemElm, ICON_CLASS);
    if (iconElm && Array.isArray(params.icon)) {
      for (const imgSrc of params.icon) {
        const imgElm = document.createElement("img") as HTMLImageElement;
        imgElm.src = imgSrc;
        iconElm.appendChild(imgElm);
      }
    }

    const titleElm = NQDOM.getElementByClassName(itemElm, TITLE_CLASS);
    if (titleElm && params.title) {
      titleElm.textContent = params.title;
    }

    const descElm = NQDOM.getElementByClassName(itemElm, DESC_CLASS);
    if (descElm && params.description) {
      descElm.textContent = params.description;
    }

    this._listElm.appendChild(itemElm);
  }
};
