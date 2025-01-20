const ybiquitous = require("./index.js");

module.exports = [
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],

    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },

  ...ybiquitous.configs.recommended,
  ...ybiquitous.configs.node,

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
    files: ["**/*.js"],
    rules: {
      "import/no-internal-modules": "off",
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
