import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, SIGNAL_STATE_TEXT, SIGNAL_STATE_ON, SIGNAL_STATE_OFF } from "./template.node";

export namespace ConnectionStatus {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _valueElm?: HTMLElement;
  private _textElm?: HTMLElement;

  protected _init() {
    this._valueElm = NQDOM.getElementByClassName(super.element, SIGNAL_STATE_OFF);
    this._textElm = NQDOM.getElementByClassName(super.element, SIGNAL_STATE_TEXT);
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

} // namespace ConnectionStatus
