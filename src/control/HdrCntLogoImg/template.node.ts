import { HdrLogoImg } from "@/comp/HdrLogoImg/builder";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";

const { ROOT_CLASS, ROOT_HTML, CSS } = HdrLogoImg.template("HdrCntLogoImg", {
  favicon: [ favicon1Svg, favicon2Svg ],
  width: 36,
});

export { ROOT_CLASS, ROOT_HTML, CSS };
