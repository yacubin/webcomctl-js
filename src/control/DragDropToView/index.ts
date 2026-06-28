import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS } from "./template.node";

const DRAGENTER_EVENT = "dragenter";
const DRAGOVER_EVENT = "dragover";
const DRAGLEAVE_EVENT = "dragleave";
const DRAG_EVENT = "drop";

export namespace DragDropToView {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  protected _init() {
    this.registerEvent(DRAGENTER_EVENT, DRAGLEAVE_EVENT, DRAG_EVENT);

    let count = 0;
    this.element.addEventListener(DRAGENTER_EVENT, (event) => {
      if (count++ == 0)
        this.dispatchEvent(DRAGENTER_EVENT, {});
    });
    this.element.addEventListener(DRAGOVER_EVENT, (event) => {
      event.preventDefault();
    });
    this.element.addEventListener(DRAGLEAVE_EVENT, (event) => {
      if (--count == 0)
        this.dispatchEvent(DRAGLEAVE_EVENT, {});
    });
    this.element.addEventListener(DRAG_EVENT, (event) => {
      event.preventDefault();
      count = 0;

      let files =[];
      if (event.dataTransfer && event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          if (event.dataTransfer.items[i].kind === 'file') {
            const file = event.dataTransfer.items[i].getAsFile();
            files.push(file);
          }
        }
      }

      this.dispatchEvent(DRAG_EVENT, {files});
    });
  }
};

} // namespace DragDropToView
