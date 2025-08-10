import { GITHUB_DBC_URL } from "@/lib/Links";
import { HdrGitHubButton } from "@/comp/HdrGitHubButton/builder";

export async function buildComponent() {
  return HdrGitHubButton.build("HdrDBCGitHubButton", {
    url: GITHUB_DBC_URL,
  });
}
