const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const test = require("tape");
const pkg = require("../package.json");
const { sandbox, $, lintConfigFiles } = require("./helper");

const baseDir = path.join(__dirname, "..");

const writeESLintConfig = config => fs.writeFileSync(".eslintrc", JSON.stringify(config));

const writeLintTargetFile = content => fs.writeFileSync("test.js", `${content}${EOL}`);

const npmrc = `
progress=false
loglevel=warn
cache-max=0
cache-min=9999
`;

test("End-to-End", t => {
  const tarball = $("npm", "pack");
  const tarballPath = `file:${path.join(baseDir, tarball)}`;

  sandbox(() => {
    fs.writeFileSync(".npmrc", npmrc);

    $("npm", "init", "--yes", "--no-init-module");
    $("npm", "install", ...Object.keys(pkg.peerDependencies), tarballPath);

    writeESLintConfig({ extends: "ybiquitous" });
    writeLintTargetFile("process.stdout.write(1);");
    $("eslint", ".");
    t.pass("default configuration");

    lintConfigFiles
      .filter(file => file !== pkg.main)
      .forEach(file => {
        const configName = `ybiquitous/${path.basename(file, ".js")}`;
        writeESLintConfig({ extends: configName });
        writeLintTargetFile("process.stdout.write(1);");
        $("eslint", ".");
        t.pass(`${configName} configuration`);
      });

    lintConfigFiles.forEach(file => {
      $("eslint", "--print-config", path.join("node_modules", "eslint-config-ybiquitous", file));
      t.pass(`verify configuration for ${file}`);
    });
  });

  t.end();
});
