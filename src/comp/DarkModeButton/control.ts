import { BaseControl, Setting } from "webnetq-js";

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const hasDocument = (typeof document === "object" && document !== null);
if (hasDocument && document.documentElement) {
  const setting = Setting.getInstance();
  document.documentElement.dataset.theme = setting.getTheme();
}

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
    const isDarkMode = (theme == Setting.DARK_VAL);
    if (hasDocument && document.documentElement) {
      document.documentElement.dataset.theme = theme;
    }
    this.element.setAttribute("title", isDarkMode ? kDarkModeTip : kLightModeTip);
  }
};
