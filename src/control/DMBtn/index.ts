import { BaseControl, NQDOM, Setting } from "webnetq-js";
// @ts-ignore
import { ROOT_CLASS, TOGGLE_CLASS } from "uictmplt-loader!./template.ts";

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const THEMCHANGE_EVENT = "themchange";

export class DMBtn extends BaseControl {
  private _toggleElm?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    // <div class="${ROOT_CLASS}">
    //   <span class="${TOGGLE_CLASS}"></span>
    // </div>
    const element = document.createElement("div");
    element.classList.add(ROOT_CLASS);

    const toggleElm  = document.createElement("span");
    toggleElm.classList.add(TOGGLE_CLASS);

    element.appendChild(toggleElm);
    return element;
  }

  protected _init() {
    this._toggleElm = NQDOM.getElementByClassName(this.element, TOGGLE_CLASS);
    this._toggleElm && this._toggleElm.addEventListener("click", (event) => {
      const setting = Setting.getInstance();
      setting.toggleTheme();
      this._setTheme(setting.getTheme());
    });

    const setting = Setting.getInstance();
    this._setTheme(setting.getTheme());

    setting.addEventListener(THEMCHANGE_EVENT, event => this._setTheme(event.theme));
  }

  private _setTheme(theme: string) {
    const document = this.element.ownerDocument;
    if (document.documentElement)
      document.documentElement.dataset.theme = theme;
    if (this._toggleElm) {
      this._toggleElm.setAttribute("title", (theme == Setting.DARK_VAL) ? kDarkModeTip : kLightModeTip);
    }
  }
};
