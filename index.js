module.exports = {
  extends: [
    "./rules/core/possible-errors.js",
    "./rules/core/best-practices.js",
    "./rules/core/strict.js",
    "./rules/core/variables.js",
    "./rules/core/styles.js",
    "./rules/core/es6.js",
    "./rules/core/node-disable-all.js",
    "./rules/plugins/prettier.js",
    "./rules/plugins/eslint-comments.js",
    "./rules/plugins/import.js",
  ],
};
