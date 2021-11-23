module.exports = {
  extends: [
    "./rules/core.js",
    "./rules/plugins/eslint-comments.js",
    "./rules/plugins/import.js",
    "./rules/plugins/regexp.js",
    "./rules/plugins/prettier.js", // must be last
  ],
};
