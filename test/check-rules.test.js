const { EOL } = require("os");
const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

const checkRules = (file, option, env = {}) => {
  try {
    $("eslint-find-rules", option, file, { env });
  } catch (err) {
    const { stdout, stderr } = err;
    if (typeof stdout === "string" && stdout !== "") {
      process.stderr.write(stdout + EOL);
    }
    if (typeof stderr === "string" && stderr !== "") {
      process.stderr.write(stderr + EOL);
    }
    throw err;
  }
};

test("no unused rules", t => {
  lintConfigFiles.forEach(file => {
    checkRules(file, "--unused");
    t.pass(file);
  });
  t.end();
});

test("deprecated rules", t => {
  lintConfigFiles.forEach(file => {
    try {
      checkRules(file, "--deprecated", { ESLINT_CONFIG_PRETTIER_NO_DEPRECATED: "true" });
    } catch (err) {
      if (typeof err.stdout === "string" && err.stdout.includes("jsx-a11y/label-has-for")) {
        [
          "",
          "NOTE: `jsx-a11y/label-has-for` rule is deprecated but included in the recommended config.",
          "",
          "See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md",
          "",
        ].forEach(line => process.stdout.write(line + EOL));
      } else {
        throw err;
      }
    }
    t.pass(file);
  });
  t.end();
});
