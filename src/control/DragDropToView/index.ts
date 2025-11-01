import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML } from "uictmplt-loader!./template.ts";

const DRAGENTER_EVENT = "dragenter";
const DRAGOVER_EVENT = "dragover";
const DRAGLEAVE_EVENT = "dragleave";
const DRAG_EVENT = "drop";

export class DragDropToView extends BaseControl {
  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }
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
