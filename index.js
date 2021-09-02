module.exports = {
  extends: [
    "./rules/core/possible-errors.js",
    "./rules/core/best-practices.js",
    "./rules/core/strict.js",
    "./rules/core/variables.js",
    "./rules/core/styles.js",
    "./rules/core/es6.js",
    "./rules/plugins/eslint-comments.js",
    "./rules/plugins/import.js",
    "./rules/plugins/regexp.js",
    "./rules/plugins/prettier.js", // must be last
  ],
};
