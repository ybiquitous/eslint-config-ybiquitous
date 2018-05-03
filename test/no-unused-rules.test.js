const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

lintConfigFiles.forEach(file => {
  test(`no unused rules: ${file}`, { skip: true }, t => {
    $("eslint-find-rules", "--unused", file);
    t.end();
  });
});
