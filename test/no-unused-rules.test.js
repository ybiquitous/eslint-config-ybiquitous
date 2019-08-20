const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

test("no unused rules", t => {
  lintConfigFiles.forEach(file => {
    $("eslint-find-rules", "--unused", file);
    t.pass(file);
  });
  t.end();
});
