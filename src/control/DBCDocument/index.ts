import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, TITLE_CLASS, VERSION_CLASS, PROTOCOL_CLASS, NEW_SYMBOLS_LIST, NEW_SYMBOLS, BAUDRATE, BTR1, BTR2, BIT_TIMING } from "./template.node";

function setTextContent(elm: HTMLElement | undefined, val: string | number) {
  elm && (elm.textContent = val as any);
}

function setDisplayValue(elm: HTMLElement | undefined, val: boolean) {
  elm && (elm.style.display = val ? "" : "none");
}

interface ValueParams {
  version: string;
  protocol: string;
  newSymbols?: string[];
  bitTiming?: {
    baudrate: number;
    btr1: number;
    btr2: number;
  };
};

export namespace DBCDocument {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS) {
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
  }
}

export class Control extends BaseControl {
  private _titleElm?: HTMLElement;
  private _newSymbolsElm?: HTMLElement;
  private _versionElm?: HTMLElement;
  private _protocolElm?: HTMLElement;
  private _newSymbolsListElm?: HTMLElement;
  private _baudrateElm?: HTMLElement;
  private _btr1Elm?: HTMLElement;
  private _btr2Elm?: HTMLElement;
  private _bitTiming?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, TITLE_CLASS);
    this._newSymbolsElm = NQDOM.getElementByClassName(super.element, NEW_SYMBOLS);
    this._versionElm = NQDOM.getElementByClassName(super.element, VERSION_CLASS);
    this._protocolElm = NQDOM.getElementByClassName(super.element, PROTOCOL_CLASS);
    this._newSymbolsListElm = NQDOM.getElementByClassName(super.element, NEW_SYMBOLS_LIST);
    this._baudrateElm = NQDOM.getElementByClassName(super.element, BAUDRATE);
    this._btr1Elm = NQDOM.getElementByClassName(super.element, BTR1);
    this._btr2Elm = NQDOM.getElementByClassName(super.element, BTR2);
    this._bitTiming = NQDOM.getElementByClassName(super.element, BIT_TIMING);
  }

  public setTitle(title: string) {
    if (this._titleElm) {
      this._titleElm.textContent = title;
    }
  }

  public setValue(params: ValueParams) {
    setTextContent(this._versionElm, params.version);
    setTextContent(this._protocolElm, params.protocol);

    if (params.newSymbols && params.newSymbols.length) {
      setDisplayValue(this._newSymbolsElm, true);
      if (this._newSymbolsListElm) {
        this._newSymbolsListElm.textContent = "";
        for (const iter of params.newSymbols) {
          const element = document.createElement('div');
          element.textContent = iter;
          this._newSymbolsListElm.appendChild(element);
        }
      }
    }
    else {
      setDisplayValue(this._newSymbolsElm, false);
    }

    if (params.bitTiming) {
      setDisplayValue(this._bitTiming, true);
      setTextContent(this._baudrateElm, params.bitTiming.baudrate);
      setTextContent(this._btr1Elm, params.bitTiming.btr1);
      setTextContent(this._btr2Elm, params.bitTiming.btr2);
    }
    else {
      setDisplayValue(this._bitTiming, false);
    }
  }
};

} // namespace DBCDocument
