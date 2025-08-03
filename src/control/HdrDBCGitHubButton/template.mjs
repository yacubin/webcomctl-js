import ControlMaker from '../../lib/ControlMaker.mjs';
import HdrGitHubButton from '../../comp/HdrGitHubButton/index.mjs';

export async function buildComponent() {
  const mk = new ControlMaker("HdrDBCGitHubButton", import.meta.url);
  await HdrGitHubButton(mk, {
    url: "https://github.com/yacubin/dbc",
  });
  return mk.buildComponent();
}
