import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_HTML, ITEM_HTML, CSS, ROOT_CLASS, DOCUMENT_CLASS, MESSAGE_CLASS,
  GROUP_CLASS, SIGNAL_CLASS, PSEUDO_CLASS, EXPAND_CLASS, CHILDFREE_CLASS,
  ACTIVE_CLASS, TITLE_CLASS, CHILDS_CLASS, DO_EXPAND_CLASS, DO_ACTIVE_CLASS } from "./template.node";

const typeToClass = {
  document: DOCUMENT_CLASS,
  message: MESSAGE_CLASS,
  group: GROUP_CLASS,
  signal: SIGNAL_CLASS,
};

interface DBCNodeParams {
  name: string;
  type: keyof typeof typeToClass;
  selected?: boolean;
  expand?: boolean;
  pseudo?: boolean;
  childs?: DBCNodeParams[];
  data?: any;
};

const SELECTEDCHANGED_EVENT = "selectedchanged";

export namespace DBCTree {

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
  private _selectedElm?: HTMLElement;
  private _itemTemplate?: HTMLElement;

  protected _init() {
    this._itemTemplate = NQDOM.createElement(ITEM_HTML);
    this.registerEvent(SELECTEDCHANGED_EVENT);
  }

  public setRootNode(params: DBCNodeParams | null | undefined) {
    this._selectedElm = undefined;
    this.element.textContent = "";
    if (params) {
      const root = this._createDbcNode(params);
      if (root) {
        if (!this._selectedElm)
          this._selectNode(root, params);
        this.element.appendChild(root);
      }
    }
  }

  private _selectNode(element?: HTMLElement, params?: DBCNodeParams) {
    this._selectedElm && this._selectedElm.classList.remove(ACTIVE_CLASS);
    element && element.classList.add(ACTIVE_CLASS);
    this._selectedElm = element;
    this.dispatchEvent(SELECTEDCHANGED_EVENT, params);
  }

  private _createDbcNode(params: DBCNodeParams): HTMLElement | undefined {
    const typeClass = typeToClass[params.type];
    if (!typeClass || !this._itemTemplate)
      return;

    const itemElm = this._itemTemplate.cloneNode(true) as HTMLElement;
    itemElm.classList.add(typeClass);    
    itemElm.classList.toggle(PSEUDO_CLASS, !!params.pseudo);

    const titleElm = NQDOM.getElementByClassName(itemElm, TITLE_CLASS);
    if (titleElm) {
      titleElm.textContent = params.name;
    }

    let expand = !!params.expand;
    const doExpandElm = NQDOM.getElementByClassName(itemElm, DO_EXPAND_CLASS);
    if (doExpandElm) {
      doExpandElm.addEventListener("click", () => {
        expand = !expand;
        itemElm.classList.toggle(EXPAND_CLASS, expand);
      });
    }

    const doActiveElm = NQDOM.getElementByClassName(itemElm, DO_ACTIVE_CLASS);
    if (doActiveElm) {
      doActiveElm.addEventListener("click", () => {
        if (this._selectedElm !== itemElm)
          this._selectNode(itemElm, params)
      });
    }

    if (!params.childs?.length)
      itemElm.classList.add(CHILDFREE_CLASS);
    else {
      itemElm.classList.toggle(EXPAND_CLASS, expand);
      const childsElm = NQDOM.getElementByClassName(itemElm, CHILDS_CLASS);
      if (childsElm) {
        for (const iter of params.childs) {
          const child = this._createDbcNode(iter);
          child && childsElm.appendChild(child);
        }
      }
    }

    if (params.selected) {
      this._selectNode(itemElm, params);
    }

    return itemElm;
  }
};

} // namespace DBCTree
