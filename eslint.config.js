const ybiquitous = require("./index.js");

module.exports = [
  ...ybiquitous.configs.recommended,
  ...ybiquitous.configs.node,

  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],

    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },

  // TODO: Remove this configuration after the migration to ESM will complete.
  {
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
  },

  {
    files: ["rules/**/*.js"],
    rules: {
      "sort-keys": "error",
    },
  },

  // Must be at the last.
  {
    ignores: ["coverage", "dist", "tmp"],
  },
];
