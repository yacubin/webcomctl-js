import { BaseControl } from "webnetq-js";
// @ts-ignore
import { DOCUMENT_CLASS, MESSAGE_CLASS, GROUP_CLASS, SIGNAL_CLASS, PSEUDO_CLASS, EXPAND_CLASS, CHILDFREE_CLASS, ACTIVE_CLASS } from "uictmplt-loader!./template.ts";

interface DBCNodeInfo {
  name: string;
  type: "document" | "message" | "group" | "signal";
  selected?: boolean;
  expand?: boolean;
  pseudo?: boolean;
  childs?: DBCNodeInfo[];
  data?: any;
};

const SELECTEDCHANGED_EVENT = "selectedchanged";

export class DBCTree extends BaseControl {
  private _selectedElm?: HTMLElement;

  protected _init() {
    this.registerEvent(SELECTEDCHANGED_EVENT);
  }

  public setRootNode(node: DBCNodeInfo | null | undefined) {
    this._selectedElm = undefined;
    this.element.textContent = "";
    if (node) {
      const root = this._createElementByNodeInfo(node);
      if (root) {
        if (!this._selectedElm)
          this._selectNode(root, node);
        this.element.appendChild(root);
      }
    }
  }

  private _selectNode(element?: HTMLElement, node?: DBCNodeInfo) {
    this._selectedElm && this._selectedElm.classList.remove(ACTIVE_CLASS);
    element && element.classList.add(ACTIVE_CLASS);
    this._selectedElm = element;
    this.dispatchEvent(SELECTEDCHANGED_EVENT, node);
  }

  private _createElementByNodeInfo(node: DBCNodeInfo): HTMLElement | undefined {
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
