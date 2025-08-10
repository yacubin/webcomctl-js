import { HdrButton } from "@/comp/HdrButton/builder";

import gitHubSvg from "./GitHub.svg";
import gitHubLightHoverSvg from "./GitHub_light_hover.svg";
import gitHubDarkHoverSvg from "./GitHub_dark_hover.svg";

export namespace HdrGitHubButton {
export function build(name: string, { url }: { url: string }) {
  return HdrButton.build(name, {
    type: "Link",
    url,
    anchorTarget: "_blank",
    text: "GitHub",
    mainImage: gitHubSvg,
    hoverImage: [ gitHubLightHoverSvg, gitHubDarkHoverSvg ],
  });
}
} // namespace HdrGitHubButton
