import { test, expect } from "vitest"; // eslint-disable-line import/named -- False positive.

import { $ } from "./helper.js";

test("set correct `ecmaVersion`", () => {
  const runTest = (/** @type {string} */ file) => {
    const stdout = JSON.parse($("eslint", ["--print-config", file]));
    expect(stdout.parserOptions.ecmaVersion).toBe(2020);
    expect(stdout.env.es2020).toBe(true);
    return true;
  };

  expect(runTest("index.js")).toBeTruthy();
  expect(runTest("node.js")).toBeTruthy();
  expect(runTest("browser.js")).toBeTruthy();
  expect(runTest("react.js")).toBeTruthy();
  expect(runTest("typescript.js")).toBeTruthy();
});
