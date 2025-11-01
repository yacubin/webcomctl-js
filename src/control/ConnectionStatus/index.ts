import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, SIGNAL_STATE_TEXT, SIGNAL_STATE_ON, SIGNAL_STATE_OFF } from "uictmplt-loader!./template.ts";

export class ConnectionStatus extends BaseControl {
  private _valueElm?: HTMLElement;
  private _textElm?: HTMLElement;

  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }

  protected _init() {
    this._valueElm = NQDOM.getElementByClassName(this.element, SIGNAL_STATE_OFF);
    this._textElm = NQDOM.getElementByClassName(this.element, SIGNAL_STATE_TEXT);
  }

  public get value(): boolean {
    return !!this._valueElm && this._valueElm.classList.contains(SIGNAL_STATE_ON);
  }

  public set value(value: boolean) {
    if (this._valueElm) {
      this._valueElm.classList.toggle(SIGNAL_STATE_OFF, !value);
      this._valueElm.classList.toggle(SIGNAL_STATE_ON, value);
    }
  }

  public get text(): string {
    return this._textElm?.textContent || "";
  }

  public set text(value: string) {
    this._textElm && (this._textElm.textContent = value);
  }

  public setState(value: boolean, text: string) {
    this.value = value;
    this.text = text;
  }
};
