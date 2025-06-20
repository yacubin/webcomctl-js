import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrBaseButton from '../../comp/HdrBaseButton.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrUploadButton", import.meta.url);
  HdrBaseButton(mk, {
    type: "FileUpload",
    text: "Upload",
    mainImage: await mk.loadSvgAsCssUrl("./search_default.svg"),
    hoverImage: [
      await mk.loadSvgAsCssUrl("./search_light_hover.svg"),
      await mk.loadSvgAsCssUrl("./search_dark_hover.svg"),
    ],
  });
  return mk.buildComponent();
}
