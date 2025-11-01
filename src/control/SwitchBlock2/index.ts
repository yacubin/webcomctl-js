import { SwitchBlockControl } from "@/comp/SwitchBlock/control";
import { BaseControl, NQDOM } from "webnetq-js";
// @ts-ignore
import { ROOT_HTML, NTH1_CLASS, NTH2_CLASS } from "uictmplt-loader!./template.ts";

export class SwitchBlock2  extends SwitchBlockControl {
  public static createElement(document: HTMLDocument): HTMLElement {
    return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
  }
  protected _init() {
    super._init(NTH1_CLASS, NTH2_CLASS);
  }
};
