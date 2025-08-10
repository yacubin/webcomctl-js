import { GITHUB_LIBARCHIVE_URL } from "@/lib/Links";
import { HdrGitHubButton } from "@/comp/HdrGitHubButton/builder";

export async function buildComponent() {
  return HdrGitHubButton.build("HdrLibarchiveGitHubButton", {
    url: GITHUB_LIBARCHIVE_URL,
  });
}
