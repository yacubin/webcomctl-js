import { BaseControl, NQDOM, Setting } from 'webnetq-js';
import { TOGGLE_CLASS } from 'uictmplt-loader!./template.mjs';

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const hasDocument = (typeof document === 'object' && document !== null);
if (hasDocument && document.documentElement) {
  const setting = Setting.getInstance();
  document.documentElement.dataset.theme = setting.getTheme();
}

export class DMBtn extends BaseControl {
  _toggleElm;

  _init() {
    this._toggleElm = NQDOM.getElementByClassName(this.element, TOGGLE_CLASS);
    this._toggleElm && this._toggleElm.addEventListener("click", (event) => {
      const setting = Setting.getInstance();
      setting.toggleTheme();
      this._setTheme(setting.getTheme());
    });

    const setting = Setting.getInstance();
    this._setTheme(setting.getTheme());
    setting.addEventListener('themchange', event => this._setTheme(event.theme));
  }

  _setTheme(theme) {
    const isDarkMode = (theme == 'dark');
    if (hasDocument && document.documentElement) {
      document.documentElement.dataset.theme = theme;
    }
    this._toggleElm && this._toggleElm.setAttribute("title", isDarkMode ? kDarkModeTip : kLightModeTip);
  }
};
