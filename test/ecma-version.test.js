const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

test("set correct `ecmaVersion`", t => {
  lintConfigFiles.forEach(file => {
    const stdout = JSON.parse($("eslint", "--print-config", file));
    t.is(stdout.parserOptions.ecmaVersion, 2019, file);
  });
  t.end();
});
