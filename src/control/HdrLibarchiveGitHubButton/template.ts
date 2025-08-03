import { GITHUB_LIBARCHIVE_URL } from "@/lib/Links";
import ControlMaker from "@/lib/ControlMaker.mjs";
import HdrGitHubButton from "@/comp/HdrGitHubButton/index.mjs";

export async function buildComponent() {
  const mk = new ControlMaker("HdrLibarchiveGitHubButton", import.meta.url);
  await HdrGitHubButton(mk, {
    url: GITHUB_LIBARCHIVE_URL,
  });
  return mk.buildComponent();
}
