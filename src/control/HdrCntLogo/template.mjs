import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrBaseLogo from '../../comp/HdrBaseLogo.mjs';

export async function buildComponent() {
  const mk = new ControlMaker('HdrCntLogo', import.meta.url);
  HdrBaseLogo(mk, {
    favicon: [
      await mk.loadSvgAsCssUrl('./favicon1.svg'),
      await mk.loadSvgAsCssUrl('./favicon2.svg'),
    ],
    header: [
      await mk.loadSvgAsCssUrl('./header1.svg'),
      await mk.loadSvgAsCssUrl('./header2.svg'),
    ],
  });
  return mk.buildComponent();
}
