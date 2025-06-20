import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrBaseButton from '../../comp/HdrBaseButton.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrGitHubButton", import.meta.url);
  HdrBaseButton(mk, {
    type: "Link",
    url: "https://github.com/ykbin/dbc",
    anchorTarget: "_blank",
    text: "GitHub",
    mainImage: await mk.loadSvgAsCssUrl("./GitHub.svg"),
    hoverImage: [
      await mk.loadSvgAsCssUrl("./GitHub_light_hover.svg"),
      await mk.loadSvgAsCssUrl("./GitHub_dark_hover.svg"),
    ],
  });
  return mk.buildComponent();
}
