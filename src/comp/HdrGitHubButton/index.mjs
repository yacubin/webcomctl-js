import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';
import HdrBaseButton from '../HdrBaseButton.mjs';

export default async function(mk, { url }) {
  HdrBaseButton(mk, {
    type: "Link",
    url,
    anchorTarget: "_blank",
    text: "GitHub",
    mainImage: await loadSvgAsCssUrlAsync(import.meta.url, "./GitHub.svg"),
    hoverImage: [
      await loadSvgAsCssUrlAsync(import.meta.url, "./GitHub_light_hover.svg"),
      await loadSvgAsCssUrlAsync(import.meta.url, "./GitHub_dark_hover.svg"),
    ],
  });
}
