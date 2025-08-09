import { SwitchBlockControl } from "@/comp/SwitchBlock/control";
// @ts-ignore
import { NTH1_CLASS, NTH2_CLASS } from "uictmplt-loader!./template.ts";

export class SwitchBlock2  extends SwitchBlockControl {
  public constructor() {
    super(NTH1_CLASS, NTH2_CLASS);
  }
};
