import { BaseControl, Setting } from "webnetq-js";

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const THEMCHANGE_EVENT = "themchange";

export class DarkModeButton extends BaseControl {
  protected _init() {
    this.element.addEventListener("click", (event) => {
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
    this.element.setAttribute("title", (theme == Setting.DARK_VAL) ? kDarkModeTip : kLightModeTip);
  }
};
