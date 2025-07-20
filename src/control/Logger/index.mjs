import { NQDOM, BaseControl } from "webnetq-js";
import { ITEM_HTML, TITLE_CLASS, TEXT_CLASS, CLOSE_CLASS, INFO_CLASS, WARNING_CLASS, SUCCESS_CLASS, ERROR_CLASS } from 'uictmplt-loader!./template.mjs';

const createMessage = (level, title, text) => {
  const element = NQDOM.createElement(ITEM_HTML);
  element.classList.add(level);

  NQDOM.getElementByClassName(element, TITLE_CLASS).textContent = title;
  NQDOM.getElementByClassName(element, TEXT_CLASS).textContent = text;
  NQDOM.getElementByClassName(element, CLOSE_CLASS).addEventListener("click", () => element.remove());

  return element;
};

export class Logger extends BaseControl {
  _init() {
    const log = (title, level, logFunc, ...args) => {
      logFunc.apply(null, [ title, "-", ...args ]);
      const messageElm = createMessage(level, title, args.join(' '));
      while (this.element.children.length > 3) {
        this.element.removeChild(this.element.children[1]);
      }
      this.element.appendChild(messageElm);
    };

    this.info = log.bind(this, "Info", INFO_CLASS, console.info);
    this.success = log.bind(this, "Success", SUCCESS_CLASS, console.log);
    this.warning = log.bind(this, "Warning", WARNING_CLASS, console.warn);
    this.error = log.bind(this, "Error", ERROR_CLASS, console.error);
  }
};
