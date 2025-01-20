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
     * @param {Record<string, unknown>} config
     */
    const writeESLintConfig = (config) =>
      outFile(".eslintrc", JSON.stringify({ root: true, ...config }));

    /**
     * @param {string} content
     */
    const writeLintTargetFile = (content) => outFile("test.js", `${content}${EOL}`);

    outFile(".npmrc", npmrc);
    outFile("package.json", "{}");

    $("npm", ["install", ...peerDeps, tarballPath], { cwd });

    const eslint = path.join(cwd, "node_modules", ".bin", "eslint");

    writeESLintConfig({ extends: "ybiquitous" });
    writeLintTargetFile("const func = () => 1;\nfunc();");
    $(eslint, [], { cwd });

    const runTest = (/** @type {string} */ file) => {
      const configName = `ybiquitous/${path.basename(file, ".js")}`;
      if (configName.endsWith("/typescript")) {
        outFile(
          "tsconfig.json",
          JSON.stringify({
            compilerOptions: { checkJs: true, noEmit: true, strict: true },
          }),
        );
        writeESLintConfig({
          extends: configName,
          parserOptions: {
            tsconfigRootDir: cwd,
            project: ["./tsconfig.json"],
          },
        });
      } else {
        writeESLintConfig({ extends: configName });
      }
      writeLintTargetFile("[1, 2].indexOf(1);");
      $(eslint, [], { cwd });
      return true;
    };

    expect(runTest("node.js")).toBeTruthy();
    expect(runTest("browser.js")).toBeTruthy();
    expect(runTest("react.js")).toBeTruthy();
    expect(runTest("typescript.js")).toBeTruthy();

    const printConfig = (/** @type {string} */ file) => {
      $(eslint, ["--print-config", path.join("node_modules", "eslint-config-ybiquitous", file)], {
        cwd,
      });
      return true;
    };

    expect(printConfig("index.js")).toBeTruthy();
    expect(printConfig("node.js")).toBeTruthy();
    expect(printConfig("browser.js")).toBeTruthy();
    expect(printConfig("react.js")).toBeTruthy();
    expect(printConfig("typescript.js")).toBeTruthy();
  });
});
