module.exports = {
  root: true,

  extends: ["./node.js"],

  overrides: [
    {
      files: ["rules/**/*.js"],
      rules: {
        "sort-keys": "error",
      },
    },
    {
      files: ["**/test/**/*.js"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "max-lines-per-function": "off",
        "max-statements": "off",
      },
    },
  ],
};
