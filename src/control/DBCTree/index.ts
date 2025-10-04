import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ITEM_HTML, DOCUMENT_CLASS, MESSAGE_CLASS, GROUP_CLASS, SIGNAL_CLASS, PSEUDO_CLASS, EXPAND_CLASS, CHILDFREE_CLASS, ACTIVE_CLASS, TITLE_CLASS, CHILDS_CLASS, DO_EXPAND_CLASS, DO_ACTIVE_CLASS } from "uictmplt-loader!./template.ts";

interface DBCNodeParams {
  name: string;
  type: "document" | "message" | "group" | "signal";
  selected?: boolean;
  expand?: boolean;
  pseudo?: boolean;
  childs?: DBCNodeParams[];
  data?: any;
};

const SELECTEDCHANGED_EVENT = "selectedchanged";

const typeToClass = {
  document: DOCUMENT_CLASS,
  message: MESSAGE_CLASS,
  group: GROUP_CLASS,
  signal: SIGNAL_CLASS,
};

export class DBCTree extends BaseControl {
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
      const root = this._createElementByNodeInfo2(params);
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

  private _createElementByNodeInfo2(params: DBCNodeParams): HTMLElement | undefined {
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
          const child = this._createElementByNodeInfo2(iter);
          child && childsElm.appendChild(child);
        }
      }
    }

    if (params.selected) {
      this._selectNode(itemElm, params);
    }

    return itemElm;
  }

  private _createElementByNodeInfo(node: DBCNodeParams): HTMLElement | undefined {
    const element = document.createElement("div");
    switch (node.type) {
    case "document":
      element.classList.add(DOCUMENT_CLASS);
      break;

    case "message":
      element.classList.add(MESSAGE_CLASS);
      break;

    case "group":
      element.classList.add(GROUP_CLASS);
      break;

    case "signal":
      element.classList.add(SIGNAL_CLASS);
      break;

    default:
      return;
    }
    
    element.classList.toggle(PSEUDO_CLASS, !!node.pseudo);

    {
      const s = document.createElement('s');

      {
        const b = document.createElement('b');
        if (node.childs?.length) {
          let expand = !!node.expand;
          b.addEventListener("click", () => {
            expand = !expand;
            element.classList.toggle(EXPAND_CLASS, expand);
          });
        }
      
        {
          const div = document.createElement('div');
          b.appendChild(div);
        }

        s.appendChild(b);
      }

      {
        const h2 = document.createElement('h2');

        h2.addEventListener("click", () => {
          if (this._selectedElm !== element)
            this._selectNode(element, node)
        });

        {
          const s = document.createElement('s');
          h2.appendChild(s);
        }

        {
          const div = document.createElement('div');
          div.textContent = node.name;
          h2.appendChild(div);
        }

        s.appendChild(h2);
      }

      element.appendChild(s);
    }

    
    {
      const span = document.createElement('span');

      if (!node.childs?.length)
        element.classList.add(CHILDFREE_CLASS);
      else {
        element.classList.toggle(EXPAND_CLASS, !!node.expand);
        for (const iter of node.childs) {
          const child = this._createElementByNodeInfo(iter);
          child && span.appendChild(child);
        }
      }

      element.appendChild(span);
    }

    if (node.selected) {
      this._selectNode(element, node);
    }

    return element;
  }
};
