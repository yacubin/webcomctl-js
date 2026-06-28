import { HdrLogoText } from "@/comp/HdrLogoText/builder";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";
import header1Svg from "./header1.svg";
import header2Svg from "./header2.svg";

const { ROOT_CLASS, ROOT_HTML, CSS } = HdrLogoText.template("HdrCntLogo", {
  favicon: [ favicon1Svg, favicon2Svg ],
  header: [ header1Svg, header2Svg ],
});

export { ROOT_CLASS, ROOT_HTML, CSS };
