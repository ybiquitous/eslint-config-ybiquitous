module.exports = {
  extends: [
    "airbnb",
    "plugin:eslint-comments/recommended",
    "prettier",
    "prettier/react",
  ],

  plugins: ["prettier"],

  env: {
    browser: true,
    node: true,
  },

  rules: {
    "prettier/prettier": "error",
  },
};
