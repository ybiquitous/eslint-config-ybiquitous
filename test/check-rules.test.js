import { writeFileSync, rmSync } from "node:fs";
import { EOL } from "node:os";
import path from "node:path";
import { test, beforeAll, afterAll } from "vitest";

import { $, makeTmpDir } from "./helper.js";

let tmpDir;
let tmpConfigFile;

beforeAll(() => {
  tmpDir = makeTmpDir();
  tmpConfigFile = path.join(tmpDir, "eslint.config.mjs");
  writeFileSync(
    tmpConfigFile,
    `
import ybiquitous from "../../index.js";

export default [
  ...ybiquitous.configs.recommended,
  ...ybiquitous.configs.node,
  ...ybiquitous.configs.browser,
  ...ybiquitous.configs.react,
  ...ybiquitous.configs.typescript,
];
`.trim(),
  );
});

afterAll(() => {
  rmSync(tmpDir, { force: true, recursive: true });
});

/**
 * @param {string} option
 * @param {Record<string, string>} env
 */
const checkRules = (option, env = {}) => {
  try {
    $("eslint-find-rules", ["--verbose", "--flatConfig", option, tmpConfigFile], { env });
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

test("no unused rules", () => {
  const deprecatedRules = [
    // ...
  ];

  try {
    checkRules("--unused");
  } catch (err) {
    if (typeof err.stdout === "string") {
      const msgs = deprecatedRules
        .filter((rule) => err.stdout.includes(`${rule} `))
        .map((rule) => `  --> "${rule}" is deprecated`);
      if (msgs.length !== 0) {
        process.stderr.write(msgs.join(EOL) + EOL);
      }
    }
    throw err;
  }
});

test("deprecated rules", () => {
  const ignoredRules = [
    // stylistic
    "array-bracket-newline",
    "array-bracket-spacing",
    "array-element-newline",
    "arrow-parens",
    "arrow-spacing",
    "block-spacing",
    "brace-style",
    "comma-dangle",
    "comma-spacing",
    "comma-style",
    "computed-property-spacing",
    "dot-location",
    "eol-last",
    "func-call-spacing",
    "function-call-argument-newline",
    "function-paren-newline",
    "generator-star-spacing",
    "implicit-arrow-linebreak",
    "indent",
    "indent-legacy",
    "jsx-quotes",
    "key-spacing",
    "keyword-spacing",
    "linebreak-style",
    "lines-around-comment",
    "lines-between-class-members",
    "max-len",
    "max-statements-per-line",
    "multiline-ternary",
    "new-parens",
    "newline-per-chained-call",
    "no-confusing-arrow",
    "no-extra-parens",
    "no-extra-semi",
    "no-floating-decimal",
    "no-mixed-operators",
    "no-mixed-spaces-and-tabs",
    "no-multi-spaces",
    "no-multiple-empty-lines",
    "no-spaced-func",
    "no-tabs",
    "no-trailing-spaces",
    "no-whitespace-before-property",
    "nonblock-statement-body-position",
    "object-curly-newline",
    "object-curly-spacing",
    "object-property-newline",
    "one-var-declaration-per-line",
    "operator-linebreak",
    "padded-blocks",
    "padding-line-between-statements",
    "quote-props",
    "quotes",
    "rest-spread-spacing",
    "semi",
    "semi-spacing",
    "semi-style",
    "space-before-blocks",
    "space-before-function-paren",
    "space-in-parens",
    "space-infix-ops",
    "space-unary-ops",
    "spaced-comment",
    "switch-colon-spacing",
    "template-curly-spacing",
    "template-tag-spacing",
    "wrap-iife",
    "wrap-regex",
    "yield-star-spacing",
  ];

  try {
    checkRules("--deprecated", { ESLINT_CONFIG_PRETTIER_NO_DEPRECATED: "true" });
  } catch (err) {
    if (typeof err.stdout === "string") {
      const msgs = ignoredRules
        .filter((rule) => err.stdout.includes(`${rule} `))
        .map((rule) => `  --> "${rule}" is deprecated but included in the recommended config`);
      if (msgs.length !== 0) {
        process.stderr.write(msgs.join(EOL) + EOL);
        return; // passed
      }
    }
    throw err;
  }
});
