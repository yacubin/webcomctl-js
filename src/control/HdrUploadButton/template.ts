import { HdrButton } from "@/comp/HdrButton/builder";

import searchDefaultSvg from "./search_default.svg";
import searchLightHoverSvg from "./search_light_hover.svg";
import searchDarkHoverSvg from "./search_dark_hover.svg";

export async function buildComponent() {
  return HdrButton.build("HdrUploadButton", {
    type: "FileUpload",
    text: "Upload",
    mainImage: searchDefaultSvg,
    hoverImage: [ searchLightHoverSvg, searchDarkHoverSvg ],
  });
}
