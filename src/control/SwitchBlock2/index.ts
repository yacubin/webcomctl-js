import { SwitchBlockControl } from "@/comp/SwitchBlock/control";
// @ts-ignore
import { NTH1_CLASS, NTH2_CLASS } from "uictmplt-loader!./template.ts";

export class SwitchBlock2  extends SwitchBlockControl {
  protected _init() {
    super._init(NTH1_CLASS, NTH2_CLASS);
  }
};
