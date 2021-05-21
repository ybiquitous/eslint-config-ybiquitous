const { $ } = require("./helper.js");

test("set correct `ecmaVersion`", () => {
  const runTest = (file) => {
    const stdout = JSON.parse($("eslint", "--print-config", file));
    expect(stdout.parserOptions.ecmaVersion).toEqual(2020);
    expect(stdout.env.es2020).toEqual(true);
    return true;
  };

  expect(runTest("index.js")).toBeTruthy();
  expect(runTest("node.js")).toBeTruthy();
  expect(runTest("browser.js")).toBeTruthy();
  expect(runTest("react.js")).toBeTruthy();
  expect(runTest("typescript.js")).toBeTruthy();
});
