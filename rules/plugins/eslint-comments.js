module.exports = {
  extends: ["plugin:@eslint-community/eslint-comments/recommended"],
  rules: {
    "@eslint-community/eslint-comments/no-restricted-disable": "off",
    "@eslint-community/eslint-comments/no-unused-disable": "error",
    "@eslint-community/eslint-comments/no-use": "off",
    "@eslint-community/eslint-comments/require-description": "off",
  },
};
