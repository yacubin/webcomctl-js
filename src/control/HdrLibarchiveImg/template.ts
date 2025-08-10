import { HdrLogoImg } from "@/comp/HdrLogoImg/builder";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";

export async function buildComponent() {
  return HdrLogoImg.build("HdrLibarchiveImg", {
    favicon: [ favicon1Svg, favicon2Svg ],
    width: 35,
  });
}
