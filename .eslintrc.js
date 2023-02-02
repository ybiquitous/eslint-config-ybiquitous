module.exports = {
  root: true,

  reportUnusedDisableDirectives: true,

  ignorePatterns: ["coverage", "dist", "tmp"],

  extends: ["./node.js"],

  // TODO: Remove this configuration after the migration to ESM will complete.
  globals: {
    module: true,
    require: true,
  },

  overrides: [
    {
      files: ["rules/**/*.js"],
      rules: {
        "sort-keys": "error",
      },
    },
  ],
};
