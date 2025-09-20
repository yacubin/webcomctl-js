import { BaseControl } from "webnetq-js";
// @ts-ignore
import { NODE_DOCUMENT, NODE_MESSAGE, NODE_MESSAGE_PSEUDO, NODE_GROUP, NODE_SIGNAL, STATE_CLICK, SHOWCASE_CLICK, STATE_COLLAPSE, STATE_EXPAND, STATE_NONE, TREE_ACTIVE } from "uictmplt-loader!./template.ts";

interface DBCNodeInfo {
  name: string;
  type: "document" | "message" | "group" | "signal";
  selected?: boolean;
  collapse?: boolean;
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
        this.element.appendChild(root);
        this._selectedElm = this._selectedElm ?? root;
        this._selectNode(root, node);
      }
    }
  }

  private _selectNode(element?: HTMLElement, node?: DBCNodeInfo) {
    this._selectedElm && this._selectedElm.classList.remove(TREE_ACTIVE);
    element && element.classList.add(TREE_ACTIVE);
    this._selectedElm = element;
    this.dispatchEvent(SELECTEDCHANGED_EVENT, node);
  }

  private _createElementByNodeInfo(node: DBCNodeInfo): HTMLElement | undefined {
    const element = document.createElement("div");
    switch (node.type) {
    case "document":
      element.classList.add(NODE_DOCUMENT);
      break;

    case "message":
      element.classList.add(node.pseudo ? NODE_MESSAGE_PSEUDO : NODE_MESSAGE);
      break;

    case "group":
      element.classList.add(NODE_GROUP);
      break;

    case "signal":
      element.classList.add(NODE_SIGNAL);
      break;

    default:
      return;
    }

    {
      const s = document.createElement('s');

      {
        const b = document.createElement('b');
        b.classList.add(STATE_CLICK);
        if (node.childs?.length) {
          let collapse = !!node.collapse;
          b.addEventListener("click", () => {
            element.classList.add(collapse ? STATE_EXPAND : STATE_COLLAPSE);
            element.classList.remove(collapse ? STATE_COLLAPSE : STATE_EXPAND);
            collapse = !collapse;
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
        h2.classList.add(SHOWCASE_CLICK);

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
        element.classList.add(STATE_NONE);
      else {
        element.classList.add(node.collapse ? STATE_COLLAPSE : STATE_EXPAND);
        for (const iter of node.childs) {
          const child = this._createElementByNodeInfo(iter);
          child && span.appendChild(child);
        }
      }

      element.appendChild(span);
    }

    if (node.selected) {
      this._selectedElm = element;
    }

    return element;
  }
};
