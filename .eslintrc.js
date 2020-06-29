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
  ],
};
