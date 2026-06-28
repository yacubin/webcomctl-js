import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ITEM_HTML, CSS, TITLE_CLASS, TEXT_CLASS, CLOSE_CLASS, INFO_CLASS, WARNING_CLASS, SUCCESS_CLASS, ERROR_CLASS } from "./template.node";

import { LOGGER_INFO_TITLE } from "@/lib/Logger";
import { LOGGER_SUCCESS_TITLE } from "@/lib/Logger";
import { LOGGER_WARNING_TITLE } from "@/lib/Logger";
import { LOGGER_ERROR_TITLE } from "@/lib/Logger";

export abstract class Logger extends BaseControl {
  abstract info: (...args: any[]) => void;
  abstract success: (...args: any[]) => void;
  abstract warning: (...args: any[]) => void;
  abstract error: (...args: any[]) => void;
};

export namespace Logger {

export const classList = {
  ROOT_CLASS,
};

export interface InitParams {
};

export function createElement(document: HTMLDocument, params: InitParams): HTMLElement {
  // <div class="${ROOT_CLASS}"></div>
  const element = document.createElement("div");
  element.classList.add(ROOT_CLASS);
  return element;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

const createMessage = (level: string, title: string, text: string) => {
  const element = NQDOM.createElement(ITEM_HTML);
  if (!element)
    return;

  element.classList.add(level);

  const titleElm = NQDOM.getElementByClassName(element, TITLE_CLASS);
  if (titleElm)
    titleElm.textContent = title;

  const textElm = NQDOM.getElementByClassName(element, TEXT_CLASS)
  if (textElm)
    textElm.textContent = text;

  const closeElm = NQDOM.getElementByClassName(element, CLOSE_CLASS);
  if (closeElm)
    closeElm.addEventListener("click", () => element.remove());

  return element;
};

export class Control extends Logger {
  public info!: (...args: any[]) => void;
  public success!: (...args: any[]) => void;
  public warning!: (...args: any[]) => void;
  public error!: (...args: any[]) => void;

  protected _init(this: any) {
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

} // namespace Logger
