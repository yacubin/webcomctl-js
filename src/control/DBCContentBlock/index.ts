import { BaseControl } from "webnetq-js";
// @ts-ignore
import { dbc_view_document, dbc_view_message, dbc_view_signal, dbc_view_group } from "uictmplt-loader!./template.ts";

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

export class DBCContentBlock extends BaseControl {
  private _type?: DBCContentType;

  protected _init() {
    this.element.classList.remove(dbc_view_document);
    this.element.classList.remove(dbc_view_message);
    this.element.classList.remove(dbc_view_signal);
    this.element.classList.remove(dbc_view_group);
  }

  public setValue(type: DBCContentType) {
    if (type !== this._type) {
      this._type && this.element.classList.remove(typeToClassName(this._type));
      const className = typeToClassName(type);
      className && this.element.classList.add(className);
      this._type = className ? type : undefined;
    }
  }
};

