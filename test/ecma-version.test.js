import { test, expect } from "vitest";

import { $ } from "./helper.js";

const ecmaVersion = 2022;

/**
 * @param {string} file
 * @returns {boolean}
 */
const runTest = (file) => {
  const stdout = JSON.parse($("eslint", ["--print-config", file]));
  expect(stdout.languageOptions.ecmaVersion).toBe(ecmaVersion);
  return true;
};

const files = ["index.js", "node.js", "browser.js", "react.js", "typescript.js"];

for (const file of files) {
  test(`set correct \`ecmaVersion: ${ecmaVersion}\` in ${file}`, () => {
    expect(runTest(file)).toBeTruthy();
  });
}
