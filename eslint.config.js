const index = require('./index.js');

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],

    languageOptions: {
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
  ...index,

  {
    files: ["**/*.js"],
    rules: {
      "import/no-internal-modules": "off"
    }
  },

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
