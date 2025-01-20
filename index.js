const core = require("./rules/core.js");
const eslintComments = require("./rules/plugins/eslint-comments.js");
const importPlugin = require("./rules/plugins/import.js");
const prettier = require("./rules/plugins/prettier.js");
const regexp = require("./rules/plugins/regexp.js");

module.exports = [
  ...core,
  ...eslintComments,
  ...importPlugin,
  ...regexp,
  ...prettier, // must be last

  {
    languageOptions: {
      ecmaVersion: 2022,
    },
  },
];
