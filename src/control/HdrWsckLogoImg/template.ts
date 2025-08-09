import ControlMaker from "@/lib/ControlMaker.mjs";
import { convertSvgToCssUrl } from "@/lib/SVG.mjs";
import HdrBaseLogoImg from "@/comp/HdrBaseLogoImg.mjs";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";

export async function buildComponent() {
  const mk = new ControlMaker("HdrWsckLogoImg", import.meta.url);
  HdrBaseLogoImg(mk, {
    favicon: [
      convertSvgToCssUrl(favicon1Svg),
      convertSvgToCssUrl(favicon2Svg),
    ],
    width: 40,
  });
  return mk.buildComponent();
}
