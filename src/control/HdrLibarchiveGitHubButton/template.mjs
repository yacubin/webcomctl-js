import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrGitHubButton from '../../comp/HdrGitHubButton/index.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrLibarchiveGitHubButton", import.meta.url);
  await HdrGitHubButton(mk, {
    url: "https://github.com/yacubin/libarchive-js",
  });
  return mk.buildComponent();
}
