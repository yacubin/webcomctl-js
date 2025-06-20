import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrBaseButton from '../../comp/HdrBaseButton.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrHomeButton", import.meta.url);
  HdrBaseButton(mk, {
    type: "Link",
    url: "\${ENV:HOST_URL}",
    anchorTarget: "_self",
    text: "Home",
    mainImage: await mk.loadSvgAsCssUrl("./home_default.svg"),
    hoverImage: [
      await mk.loadSvgAsCssUrl("./home_light_hover.svg"),
      await mk.loadSvgAsCssUrl("./home_dark_hover.svg"),
    ],
  });
  return mk.buildComponent();
}
