import { spawnSync } from "node:child_process";

// Firebase serves the deck at its hostname root, unlike GitHub Pages.
const result = spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "build"], {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "false", NEXT_PUBLIC_BASE_PATH: "" },
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
