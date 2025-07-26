// @ts-ignore
import { NQDOM, BaseControl } from "webnetq-js";
// @ts-ignore
import { ITEM_HTML, TITLE_CLASS, TEXT_CLASS, CLOSE_CLASS, INFO_CLASS, WARNING_CLASS, SUCCESS_CLASS, ERROR_CLASS } from 'uictmplt-loader!./template.ts';

import { LOGGER_INFO_TITLE } from "@/lib/Logger";
import { LOGGER_SUCCESS_TITLE } from "@/lib/Logger";
import { LOGGER_WARNING_TITLE } from "@/lib/Logger";
import { LOGGER_ERROR_TITLE } from "@/lib/Logger";

const createMessage = (level: string, title: string, text: string) => {
  const element = NQDOM.createElement(ITEM_HTML);
  element.classList.add(level);

  NQDOM.getElementByClassName(element, TITLE_CLASS).textContent = title;
  NQDOM.getElementByClassName(element, TEXT_CLASS).textContent = text;
  NQDOM.getElementByClassName(element, CLOSE_CLASS).addEventListener("click", () => element.remove());

  return element;
};

export class Logger extends BaseControl {
  _init(this: any) {
    const log = (title: string, level: string, logFunc: Function, ...args: any) => {
      logFunc.apply(null, [ title, "-", ...args ]);
      const messageElm = createMessage(level, title, args.join(' '));
      while (this.element.children.length > 3) {
        this.element.removeChild(this.element.children[1]);
      }
      this.element.appendChild(messageElm);
    };

    this.info = log.bind(this, LOGGER_INFO_TITLE, INFO_CLASS, console.info);
    this.success = log.bind(this, LOGGER_SUCCESS_TITLE, SUCCESS_CLASS, console.log);
    this.warning = log.bind(this, LOGGER_WARNING_TITLE, WARNING_CLASS, console.warn);
    this.error = log.bind(this, LOGGER_ERROR_TITLE, ERROR_CLASS, console.error);
  }
};
