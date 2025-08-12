import { BaseControl, NQDOM, Setting } from "webnetq-js";
// @ts-ignore
import { TOGGLE_CLASS } from "uictmplt-loader!./template.ts";

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const hasDocument = (typeof document === 'object' && document !== null);
if (hasDocument && document.documentElement) {
  const setting = Setting.getInstance();
  document.documentElement.dataset.theme = setting.getTheme();
}

const THEMCHANGE_EVENT = "themchange";

export class DMBtn extends BaseControl {
  private _toggleElm?: HTMLElement;

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
    const isDarkMode = (theme == 'dark');
    if (hasDocument && document.documentElement) {
      document.documentElement.dataset.theme = theme;
    }
    this._toggleElm && this._toggleElm.setAttribute("title", isDarkMode ? kDarkModeTip : kLightModeTip);
  }
};
