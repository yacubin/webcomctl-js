import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_view_document, dbc_view_message, dbc_view_signal, dbc_view_group, dbc_comment_root,
  dbc_comment_text, dbc_attributes_root, dbc_attributes_list, dbc_group_signals
// @ts-ignore
} from "uictmplt-loader!./template.ts";

enum DBCContentType {
  DOCUMENT_TYPE = "document",
  MESSAGE_TYPE = "message",
  SIGNAL_TYPE = "signal",
  GROUP_TYPE = "group",
};

function typeToClassName(type: DBCContentType) {
  switch (type) {
  case DBCContentType.DOCUMENT_TYPE:
    return dbc_view_document;
  case DBCContentType.MESSAGE_TYPE:
    return dbc_view_message;
  case DBCContentType.SIGNAL_TYPE:
    return dbc_view_signal;
  case DBCContentType.GROUP_TYPE:
    return dbc_view_group;
  }
}

function classNameFromType(classname: string) {
  switch (classname) {
  case dbc_view_document:
    return DBCContentType.DOCUMENT_TYPE;
  case dbc_view_message:
    return DBCContentType.MESSAGE_TYPE;
  case dbc_view_signal:
    return DBCContentType.SIGNAL_TYPE;
  case dbc_view_group:
    return DBCContentType.GROUP_TYPE;
  }
}

export class DBCContent extends BaseControl {
  private _type?: DBCContentType;
  private _commentRootElement?: HTMLElement;
  private _commentTextElement?: HTMLElement;
  private _attrRootElement?: HTMLElement;
  private _attrListElement?: HTMLElement;
  private _signalListElm?: HTMLElement;

  protected _init() {
    this.element.classList.remove(dbc_view_document);
    this.element.classList.remove(dbc_view_message);
    this.element.classList.remove(dbc_view_signal);
    this.element.classList.remove(dbc_view_group);

    this._commentRootElement = NQDOM.getElementByClassName(this.element, dbc_comment_root);
    this._commentTextElement = NQDOM.getElementByClassName(this.element, dbc_comment_text);

    this._attrRootElement = NQDOM.getElementByClassName(this.element, dbc_attributes_root);
    this._attrListElement = NQDOM.getElementByClassName(this.element, dbc_attributes_list);

    this._signalListElm = NQDOM.getElementByClassName(this.element, dbc_group_signals);
  }

  public setViewType(type: DBCContentType) {
    if (type !== this._type) {
      this._type && this.element.classList.remove(typeToClassName(this._type));
      const className = typeToClassName(type);
      className && this.element.classList.add(className);
      this._type = className ? type : undefined;
    }
  }

  public setComment(text: string) {
    if (this._commentRootElement) {
      this._commentRootElement.style.display = text ? "" : "none";
    }
    if (this._commentTextElement) {
      this._commentTextElement.textContent = "";
      for (const iter of (text || "").split("\n")) {
        const element = document.createElement('span');
        element.textContent = iter;
        this._commentTextElement.appendChild(element);
      }
    }
  }

  public setAttributes(attributes?: { [key: string]: string }) {
    if (this._attrRootElement) {
      this._attrRootElement.style.display = attributes ? "" : "none";
    }
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

  public setSignals(signals: string[]) {
    if (this._signalListElm) {
      this._signalListElm.textContent = "";
      for (const iter of signals) {
        const item = document.createElement('li');
        item.textContent = iter;
        this._signalListElm.appendChild(item);
      }
    }
  };
};
