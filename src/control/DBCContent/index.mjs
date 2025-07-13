import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_view_document, dbc_view_message, dbc_view_signal, dbc_view_group, dbc_comment_root, dbc_comment_text, dbc_attributes_root, dbc_attributes_list } from 'uictmplt-loader!./template.mjs';

const DOCUMENT_TYPE = "document";
const MESSAGE_TYPE = "message";
const SIGNAL_TYPE = "signal";
const GROUP_TYPE = "group";

function typeToClassName(type) {
  switch (type) {
  case DOCUMENT_TYPE:
    return dbc_view_document;
  case MESSAGE_TYPE:
    return dbc_view_message;
  case SIGNAL_TYPE:
    return dbc_view_signal;
  case GROUP_TYPE:
    return dbc_view_group;
  }
}

function classNameFromType(classname) {
  switch (classname) {
  case dbc_view_document:
    return DOCUMENT_TYPE;
  case dbc_view_message:
    return MESSAGE_TYPE;
  case dbc_view_signal:
    return SIGNAL_TYPE;
  case dbc_view_group:
    return GROUP_TYPE;
  }
}

export default class DBCContentControl extends BaseControl {
  _type;
  _commentRootElement;
  _commentTextElement;
  _attrRootElement;
  _attrListElement;

  _init() {
    this.element.classList.remove(dbc_view_document);
    this.element.classList.remove(dbc_view_message);
    this.element.classList.remove(dbc_view_signal);
    this.element.classList.remove(dbc_view_group);

    this._commentRootElement = NQDOM.getElementByClassName(this.element, dbc_comment_root);
    this._commentTextElement = NQDOM.getElementByClassName(this.element, dbc_comment_text);

    this._attrRootElement = NQDOM.getElementByClassName(this.element, dbc_attributes_root);
    this._attrListElement = NQDOM.getElementByClassName(this.element, dbc_attributes_list);
  }

  setViewType(type) {
    if (type !== this._type) {
      this._type && this.element.classList.remove(typeToClassName(this._type));
      const className = typeToClassName(type);
      className && this.element.classList.add(className);
      this._type = className ? type : undefined;
    }
  }

  setComment(text) {
    if (this._commentRootElement) {
      this._commentRootElement.style.display = text ? "" : "none";
    }
    if (this._commentTextElement) {
      this._commentTextElement.innerHTML = "";
      text && text.split("\n").forEach((iter) => {
        const element = document.createElement('span');
        element.textContent = iter;
        this._commentTextElement.appendChild(element);
      });
    }
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
