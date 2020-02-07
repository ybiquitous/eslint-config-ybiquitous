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
  const ignoredRules = [
    "jsx-a11y/label-has-for",
    "@typescript-eslint/camelcase",
    "@typescript-eslint/class-name-casing",
    "@typescript-eslint/interface-name-prefix",
  ];

  lintConfigFiles.forEach(file => {
    try {
      checkRules(file, "--deprecated", { ESLINT_CONFIG_PRETTIER_NO_DEPRECATED: "true" });
    } catch (err) {
      if (typeof err.stdout === "string") {
        const msg = ignoredRules
          .filter(rule => err.stdout.includes(rule))
          .map(rule => `  => "${rule}" is deprecated but included in the recommended config${EOL}`)
          .join("");
        if (msg) {
          process.stderr.write(msg);
          return;
        }
      }
      throw err;
    }
    t.pass(file);
  });
  t.end();
});
