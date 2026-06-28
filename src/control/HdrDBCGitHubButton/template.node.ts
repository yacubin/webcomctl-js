import { GITHUB_DBC_URL } from "@/lib/Links";
import { HdrGitHubButton } from "@/comp/HdrGitHubButton/builder";

const { ROOT_CLASS, ROOT_HTML, CSS } = HdrGitHubButton.template("HdrDBCGitHubButton", {
  url: GITHUB_DBC_URL,
});

export { ROOT_CLASS, ROOT_HTML, CSS };
