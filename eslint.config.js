const base = require('./index.js');

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],

    languageOptions: {
      ecmaVersion: 2022,

      // TODO: Remove this configuration after the migration to ESM will complete.
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },

  //  ...compat.extends("./node.js"),
  ...base,

  // Rules
  {
    files: ["rules/**/*.js"],
    rules: {
      "sort-keys": "error",
    },
  },

  // Ignores should be put at the last.
  {
    ignores: ["coverage", "dist", "tmp"],
  },
];
