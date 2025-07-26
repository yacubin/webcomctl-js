import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_view_document, dbc_view_message, dbc_view_signal, dbc_view_group, dbc_comment_root, dbc_comment_text, dbc_attributes_root, dbc_attributes_list, dbc_group_signals } from 'uictmplt-loader!./template.mjs';

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

export class DBCContent extends BaseControl {
  _commentRootElement;
  _commentTextElement;

  _init() {
    this._commentRootElement = NQDOM.getElementByClassName(this.element, dbc_comment_root);
    this._commentTextElement = NQDOM.getElementByClassName(this.element, dbc_comment_text);
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
};
