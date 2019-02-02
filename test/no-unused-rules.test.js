const test = require("tape");
const { $, lintConfigFiles } = require("./helper");

test("no unused rules", t => {
  lintConfigFiles.forEach(file => {
    // FIXME: `Error: Cannot find module 'eslint-plugin-@typescript-eslint'`
    if (file === "typescript.js") {
      console.warn(`Skip '${file}' to avoid an error.`); // eslint-disable-line no-console
      return;
    }

    $("eslint-find-rules", "--unused", file);
    t.pass(file);
  });
  t.end();
});
