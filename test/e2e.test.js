const path = require("path");
const fs = require("fs");
const { EOL } = require("os");
const test = require("tape");
const pkg = require("../package.json");
const { sandbox, $, lintConfigFiles } = require("./helper");

const baseDir = path.join(__dirname, "..");

const writeESLintConfig = config =>
  fs.writeFileSync(".eslintrc", JSON.stringify(config));

const writeLintTargetFile = content =>
  fs.writeFileSync("test.js", `${content}${EOL}`);

test("End-to-End", t => {
  t.test("local", t => {
    const tarball = $("npm", ["pack"]);
    const tarballPath = `file:${path.join(baseDir, tarball)}`;

    sandbox(() => {
      fs.writeFileSync(
        ".npmrc",
        [
          "progress=false",
          "loglevel=warn",
          "cache-max=0",
          "cache-min=9999",
        ].join(EOL)
      );
      $("npm", "init", "--yes");
      $("npm", "install", ...Object.keys(pkg.peerDependencies), tarballPath);

      t.test("default configuration", t => {
        writeESLintConfig({ extends: "ybiquitous" });
        writeLintTargetFile("process.stdout.write(1);");
        $("eslint", ".");
        t.end();
      });

      lintConfigFiles.filter(file => file !== pkg.main).forEach(file => {
        const configName = `ybiquitous/${path.basename(file, ".js")}`;
        t.test(`configuration for ${configName}`, t => {
          writeESLintConfig({ extends: configName });
          writeLintTargetFile("process.stdout.write(1);");
          $("eslint", ".");
          t.end();
        });
      });

      lintConfigFiles.forEach(file => {
        t.test(`verify configuration file: ${file}`, t => {
          $(
            "eslint",
            "--print-config",
            path.join("node_modules/eslint-config-ybiquitous", file)
          );
          t.end();
        });
      });

      t.end();
    });
  });
});
