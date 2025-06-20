import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrBaseLogoImg from '../../comp/HdrBaseLogoImg.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrLibarchiveImg", import.meta.url);
  HdrBaseLogoImg(mk, {
    favicon: [
      await mk.loadSvgAsCssUrl('./favicon1.svg'),
      await mk.loadSvgAsCssUrl('./favicon2.svg'),
    ],
    width: 35,
  });
  return mk.buildComponent();
}
