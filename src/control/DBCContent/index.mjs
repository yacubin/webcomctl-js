import { BaseControl } from 'webnetq-js';
import { dbc_view_document, dbc_view_message, dbc_view_signal, dbc_view_group } from 'uictmplt-loader!./template.mjs';

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

  _init() {
  }

  setViewType(type) {
    if (type !== this._type) {
      const className = typeToClassName(type);
      if (className) {
        this._type && this.element.classList.remove(classNameFromType(this._type));
        this.element.classList.add(className);
        this._type = type;
      }
    }
  }
};
