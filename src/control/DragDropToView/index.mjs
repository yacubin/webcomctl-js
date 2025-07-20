import { BaseControl } from 'webnetq-js';

export class DragDropToView extends BaseControl {
  _init() {
    this.registerEvent("dragenter", "dragleave", "drop");

    let count = 0;
    this.element.addEventListener("dragenter", (event) => {
      if (count++ == 0)
        this.dispatchEvent("dragenter", {});
    });
    this.element.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    this.element.addEventListener("dragleave", (event) => {
      if (--count == 0)
        this.dispatchEvent("dragleave", {});
    });
    this.element.addEventListener("drop", (event) => {
      event.preventDefault();
      count = 0;

      let files =[];
      if (event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          if (event.dataTransfer.items[i].kind === 'file') {
            const file = event.dataTransfer.items[i].getAsFile();
            files.push(file);
          }
        }
      }

      this.dispatchEvent("drop", {files});
    });
  }
};
