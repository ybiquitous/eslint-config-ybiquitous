import { writeFileSync, existsSync, unlinkSync } from "node:fs";
import { EOL } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test, expect, beforeAll, afterAll } from "vitest";
import pkg from "../package.json";
import { sandbox, $ } from "./helper.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const baseDir = path.join(__dirname, "..");

const npmrc = `
progress=false
loglevel=warn
`;

let tarballPath;

beforeAll(() => {
  $("npm", ["pack"]);
  tarballPath = path.join(baseDir, `${pkg.name}-${pkg.version}.tgz`);
});

afterAll(() => {
  if (existsSync(tarballPath)) {
    unlinkSync(tarballPath);
  }
});

test("End-to-End", () => {
  const peerDeps = Object.keys(pkg.peerDependencies);

  sandbox((cwd) => {
    /**
     * @param {string} file
     * @param {string} content
     */
    const outFile = (file, content) => writeFileSync(path.join(cwd, file), content);

    /**
     * @param {string} config
     */
    const writeESLintConfig = (config) =>
      outFile(
        "eslint.config.js",
        `
import ybiquitous from "eslint-config-ybiquitous"

export default ${config};
`,
      );

    /**
     * @param {string} content
     */
    const writeLintTargetFile = (content) => outFile("test.js", `${content}${EOL}`);

    outFile(".npmrc", npmrc);
    outFile("package.json", JSON.stringify({ type: "module" }));

    $("npm", ["install", ...peerDeps, tarballPath], { cwd });

    const eslint = path.join(cwd, "node_modules", ".bin", "eslint");

    writeESLintConfig("ybiquitous.configs.recommended");
    writeLintTargetFile("const func = () => 1;\nfunc();");
    $(eslint, [], { cwd });

    /**
     * @param {string[]} configs
     */
    const runTest = (...configs) => {
      if (configs[0] === "typescript") {
        outFile(
          "tsconfig.json",
          JSON.stringify({
            compilerOptions: { checkJs: true, noEmit: true, strict: true },
          }),
        );
        writeESLintConfig(
          `
[
  ...ybiquitous.configs.recommended,
  ...ybiquitous.configs.typescript,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: "${cwd}",
        project: ["./tsconfig.json"],
      },
    },
  },
]
`.trim(),
        );
      } else {
        configs = configs.map((c) => `...ybiquitous.configs.${c}`).join(", ");
        writeESLintConfig(`[...ybiquitous.configs.recommended, ${configs}]`);
      }
      writeLintTargetFile("[1, 2].indexOf(1);");
      $(eslint, [], { cwd });
      $(eslint, ["--print-config", "eslint.config.js"], { cwd });
      return true;
    };

    expect(runTest("node")).toBeTruthy();
    expect(runTest("browser")).toBeTruthy();
    expect(runTest("browser", "react")).toBeTruthy();
    expect(runTest("typescript")).toBeTruthy();
  });
});
