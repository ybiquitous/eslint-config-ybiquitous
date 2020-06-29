const { EOL } = require("os");
const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

const checkRules = (file, option, env = {}) => {
  try {
    $("eslint-find-rules", "--verbose", option, file, { env });
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

test("no unused rules", (t) => {
  const deprecatedRules = [
    // NOTE: Node-specific rules are deprecated and will be removed.
    // See https://eslint.org/docs/user-guide/migrating-to-7.0.0#deprecate-node-rules
    "callback-return",
    "global-require",
    "handle-callback-err",
    "no-buffer-constructor",
    "no-mixed-requires",
    "no-new-require",
    "no-path-concat",
    "no-process-env",
    "no-process-exit",
    "no-restricted-modules",
    "no-sync",
  ];

  lintConfigFiles.forEach((file) => {
    try {
      checkRules(file, "--unused");
    } catch (err) {
      if (typeof err.stdout === "string") {
        const msgs = deprecatedRules
          .filter((rule) => err.stdout.includes(`${rule} `))
          .map((rule) => `  --> "${rule}" is deprecated`);
        if (msgs.length !== 0) {
          process.stderr.write(msgs.join(EOL) + EOL);
          return;
        }
      }
      throw err;
    }
    t.pass(file);
  });
  t.end();
});

test("deprecated rules", (t) => {
  const ignoredRules = [
    "jsx-a11y/label-has-for",
    "@typescript-eslint/camelcase",
    "@typescript-eslint/class-name-casing",
    "@typescript-eslint/interface-name-prefix",
  ];

  lintConfigFiles.forEach((file) => {
    try {
      checkRules(file, "--deprecated", { ESLINT_CONFIG_PRETTIER_NO_DEPRECATED: "true" });
    } catch (err) {
      if (typeof err.stdout === "string") {
        const msgs = ignoredRules
          .filter((rule) => err.stdout.includes(`${rule} `))
          .map((rule) => `  --> "${rule}" is deprecated but included in the recommended config`);
        if (msgs.length !== 0) {
          process.stderr.write(msgs.join(EOL) + EOL);
          return;
        }
      }
      throw err;
    }
    t.pass(file);
  });
  t.end();
});
