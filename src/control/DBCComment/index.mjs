import { BaseControl, NQDOM } from 'webnetq-js';
import { dbc_comment_root, dbc_comment_text } from 'uictmplt-loader!./template.mjs';

export class DBCComment extends BaseControl {
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
