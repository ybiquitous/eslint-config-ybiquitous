const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const semver = require("semver");
const test = require("tape");
const pkg = require("../package.json");
const { sandbox, $, lintConfigFiles } = require("./helper");

const baseDir = path.join(__dirname, "..");

const writeESLintConfig = (config) =>
  fs.writeFileSync(".eslintrc", JSON.stringify({ root: true, ...config }));

const writeLintTargetFile = (content) => fs.writeFileSync("test.js", `${content}${EOL}`);

const npmrc = `
progress=false
loglevel=warn
cache-max=0
cache-min=9999
`;

test("End-to-End", (t) => {
  const tarball = $("npm", "pack");
  const tarballPath = `file:${path.join(baseDir, tarball)}`;
  const peerDeps = Object.entries(pkg.peerDependencies).map(([name, verRange]) => {
    const ver = semver.valid(semver.coerce(verRange));
    return `${name}@${ver}`;
  });

  sandbox((cwd) => {
    fs.writeFileSync(".npmrc", npmrc);
    fs.writeFileSync("package.json", "{}");

    $("npm", "install", ...peerDeps, tarballPath);

    const eslint = path.join(cwd, "node_modules", ".bin", "eslint");

    writeESLintConfig({ extends: "ybiquitous" });
    writeLintTargetFile("const func = () => 1;\nfunc();");
    $(eslint, ".");
    t.pass("default configuration");

    lintConfigFiles
      .filter((file) => file !== pkg.main)
      .forEach((file) => {
        const configName = `ybiquitous/${path.basename(file, ".js")}`;
        if (configName.endsWith("/typescript")) {
          fs.writeFileSync("tsconfig.json", "{}");
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
        $(eslint, ".");
        t.pass(`${configName} configuration`);
      });

    lintConfigFiles.forEach((file) => {
      $(eslint, "--print-config", path.join("node_modules", "eslint-config-ybiquitous", file));
      t.pass(`verify configuration for ${file}`);
    });
  });

  t.end();
});
