const { writeFileSync, existsSync, unlinkSync } = require("fs");
const { EOL } = require("os");
const path = require("path");
const pkg = require("../package.json");
const { sandbox, $ } = require("./helper.js");

const baseDir = path.join(__dirname, "..");

/**
 * @param {Record<string, unknown>} config
 */
const writeESLintConfig = (config) =>
  writeFileSync(".eslintrc", JSON.stringify({ root: true, ...config }));

/**
 * @param {string} content
 */
const writeLintTargetFile = (content) => writeFileSync("test.js", `${content}${EOL}`);

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
    writeFileSync(".npmrc", npmrc);
    writeFileSync("package.json", "{}");

    $("npm", ["install", ...peerDeps, tarballPath]);

    const eslint = path.join(cwd, "node_modules", ".bin", "eslint");

    writeESLintConfig({ extends: "ybiquitous" });
    writeLintTargetFile("const func = () => 1;\nfunc();");
    $(eslint, ["."]);

    const runTest = (/** @type {string} */ file) => {
      const configName = `ybiquitous/${path.basename(file, ".js")}`;
      if (configName.endsWith("/typescript")) {
        writeFileSync("tsconfig.json", JSON.stringify({ compilerOptions: { strict: true } }));
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
      $(eslint, ["."]);
      return true;
    };

    expect(runTest("node.js")).toBeTruthy();
    expect(runTest("browser.js")).toBeTruthy();
    expect(runTest("react.js")).toBeTruthy();
    expect(runTest("typescript.js")).toBeTruthy();

    const printConfig = (/** @type {string} */ file) => {
      $(eslint, ["--print-config", path.join("node_modules", "eslint-config-ybiquitous", file)]);
      return true;
    };

    expect(printConfig("index.js")).toBeTruthy();
    expect(printConfig("node.js")).toBeTruthy();
    expect(printConfig("browser.js")).toBeTruthy();
    expect(printConfig("react.js")).toBeTruthy();
    expect(printConfig("typescript.js")).toBeTruthy();
  });
});
