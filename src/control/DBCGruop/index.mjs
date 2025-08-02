import { BaseControl, NQDOM } from 'webnetq-js';
import { GROUP_SIGNALS_CLASS } from 'uictmplt-loader!./template.mjs';

export class DBCGruop extends BaseControl {
  _signalListElm;

  _init() {
    this._signalListElm = NQDOM.getElementByClassName(this.element, GROUP_SIGNALS_CLASS);
  }

  setValue(signals) {
    if (this._signalListElm) {
      this._signalListElm.textContent = "";
      signals.forEach((signal) => {
        const item = document.createElement('li');
        item.textContent = signal;
        this._signalListElm.appendChild(item);
      });
    }
  };
};
