import { HdrLogoText } from "@/comp/HdrLogoText/builder";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";
import header1Svg from "./header1.svg";
import header2Svg from "./header2.svg";

export async function buildComponent() {
  return HdrLogoText.build("HdrCntLogo", {
    favicon: [ favicon1Svg, favicon2Svg ],
    header: [ header1Svg, header2Svg ],
  });
}
