import { test, expect } from "vitest";

import { $ } from "./helper.js";

test("set correct `ecmaVersion`", () => {
  const runTest = (/** @type {string} */ file) => {
    const stdout = JSON.parse($("eslint", ["--print-config", file]));
    expect(stdout.parserOptions.ecmaVersion).toBe(2022);
    return true;
  };

  expect(runTest("index.js")).toBeTruthy();
  expect(runTest("node.js")).toBeTruthy();
  expect(runTest("browser.js")).toBeTruthy();
  expect(runTest("react.js")).toBeTruthy();
  expect(runTest("typescript.js")).toBeTruthy();
});
