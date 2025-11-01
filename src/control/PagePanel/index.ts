import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_HTML, MENU_ITEM_HTML, PSNT_ITEM_HTML, CODETYPE_CLASS, DOWNLOAD_CLASS, MENULIST_CLASS, PSNTLIST_CLASS,
  CTSHOW_CLASS, PSNTACTV_CLASS, MENUTEXT_CLASS, PSNTTEXT_CLASS, PERENTMENU_CLASS, MENUNAME_CLASS, MENU_LIST_HTML,
  MENUSTYLE1_CLASS, MENUSTYLE2_CLASS, MENUSTYLE3_CLASS, MENUSTYLE4_CLASS, PROPERTIES_CLASS, PROPERTIES2_CLASS,
  PROPERTIES_SHOW_CLASS
// @ts-ignore
} from "uictmplt-loader!./template.ts";

type MenuStyle = "ST1" | "ST2" | "ST3" | "ST4";
function typeToStyleClass(type: MenuStyle)
{
  switch (type) {
  case 'ST1':
    return MENUSTYLE1_CLASS;
  case 'ST2':
    return MENUSTYLE2_CLASS;
  case 'ST3':
    return MENUSTYLE3_CLASS;
  case 'ST4':
    return MENUSTYLE4_CLASS;
  }
  return MENUSTYLE1_CLASS;
}

interface MenuEvent {
  baseEvent: Event;
  text?: string;
};

interface MenuItem {
  text?: string;
  onclick?: (event: MenuEvent) => void;
};

interface PresentationEvent extends MouseEvent {
  text?: string;
};

interface PresentationItemParams {
  text?: string;
  active: boolean;
  onclick?: (event: PresentationEvent) => void;
};

interface PagePanelSnap {
  url?: string;
  blob?: Blob;
};

export class PagePanel extends BaseControl {
  private _downloadElm?: HTMLAnchorElement;
  private _psntlistElm?: HTMLElement;
  private _parentMenuElm?: HTMLElement;
  private _infoButElm?: HTMLElement;
  private _propButElm?: HTMLElement;
  private _blob?: Blob;
  private _filename = "";
  private _snap: PagePanelSnap = {};

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._parentMenuElm = NQDOM.getElementByClassName(this.element, PERENTMENU_CLASS);
    this._downloadElm = NQDOM.getElementByClassName(this.element, DOWNLOAD_CLASS) as HTMLAnchorElement;
    this._psntlistElm = NQDOM.getElementByClassName(this.element, PSNTLIST_CLASS);
    this._infoButElm = NQDOM.getElementByClassName(this.element, PROPERTIES_CLASS);
    this._propButElm = NQDOM.getElementByClassName(this.element, PROPERTIES2_CLASS);

    this._updateDownloadData();
  }

  public get blob() {
    return this._blob;
  }

  public set blob(value) {
    this._blob = value;
    this._updateDownloadData();
  }

  public get filename() {
    return this._filename;
  }

  public set filename(value) {
    this._filename = value;
    this._updateDownloadData();
  }

  private _updateDownloadData() {
    if (this._blob !== this._snap.blob) {
      this._snap.url && URL.revokeObjectURL(this._snap.url);
      this._snap.url = this._blob && URL.createObjectURL(this._blob);
      this._snap.blob = this._blob;
    }
    if (this._downloadElm && this._snap.url) {
      this._downloadElm.href = this._snap.url;
      this._downloadElm.download = this._filename;
      this._downloadElm.title = `Click to download - ${this._filename}`;
    }
  }

  public addMenuList(text: string, style: MenuStyle, items: MenuItem[]) {
    if (!this._parentMenuElm)
      return;

    const menuRootElm = NQDOM.createElement(MENU_LIST_HTML) as HTMLElement;
    const menuNameElm = NQDOM.getElementByClassName(menuRootElm, MENUNAME_CLASS);
    if (menuNameElm) {
      menuNameElm.textContent = text;
    }

    const codetypeElm = NQDOM.getElementByClassName(menuRootElm, CODETYPE_CLASS);
    if (codetypeElm) {
      let codetypeIsShow = false;
      codetypeElm.addEventListener('click', e => {
        codetypeIsShow = codetypeElm.classList.toggle(CTSHOW_CLASS);
        codetypeVisibleChanged = true;
      });
  
      let codetypeVisibleChanged = false;
      window.addEventListener('click', e => {
        if (!codetypeVisibleChanged && codetypeIsShow)
          codetypeElm.classList.remove(CTSHOW_CLASS);
        codetypeVisibleChanged = false;
      });
    }

    const menuListElm = NQDOM.getElementByClassName(menuRootElm, MENULIST_CLASS);
    if (menuListElm) {
      menuListElm.classList.add(typeToStyleClass(style));
      for (const params of items) {
        const itemElm = NQDOM.createElement(MENU_ITEM_HTML) as HTMLElement;
        const textElm = NQDOM.getElementByClassName(itemElm, MENUTEXT_CLASS);
        if (params.text) {
          textElm && (textElm.textContent = params.text);
        }
        if (params.onclick && textElm) {
          const onclick = params.onclick;
          textElm.addEventListener('click', event => onclick({ baseEvent: event, text: params.text }));
        }
        menuListElm.appendChild(itemElm);
      }
    }

    this._parentMenuElm.appendChild(menuRootElm);
  }

  public addPresentationItem(params: PresentationItemParams) {
    if (this._psntlistElm) {
      const rootElm = NQDOM.createElement(PSNT_ITEM_HTML) as HTMLElement;
      const textElm = NQDOM.getElementByClassName(rootElm, PSNTTEXT_CLASS);
      params.text && textElm && (textElm.textContent = params.text);

      const psntlistElm = this._psntlistElm;
      const doActiveItem = () => {
        for (let i = 0; i < psntlistElm.children.length; i++)
          psntlistElm.children[i].classList.remove(PSNTACTV_CLASS);
        rootElm.classList.add(PSNTACTV_CLASS);
      };

      params.active && doActiveItem();
      rootElm.addEventListener('click', event => {
        doActiveItem();
        const newEvent = Object.create(event);
        newEvent.text = params.text;
        params.onclick && params.onclick(newEvent);
      });
  
      this._psntlistElm.appendChild(rootElm);
    }
  }

  public setPropertiesClick(func: (event: MouseEvent) => void) {
    this.setButtonClick("info", func);
  }

  public setButtonClick(type: string, func: (event: MouseEvent) => void) {
    if (type === "info") {
      if (this._infoButElm) {
        this._infoButElm.classList.add(PROPERTIES_SHOW_CLASS);
        this._infoButElm.addEventListener('click', func);
      }
    }
    else if (type === "prop") {
      if (this._propButElm) {
        this._propButElm.classList.add(PROPERTIES_SHOW_CLASS);
        this._propButElm.addEventListener('click', func);
      }
    }
    else {
      console.warn(`Unknown type "${type}"`)
    }
  }
};
