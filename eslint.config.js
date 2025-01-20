const node = require("./node.js");

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

  ...node,

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
