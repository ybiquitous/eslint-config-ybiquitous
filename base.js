module.exports = {
  extends: ['airbnb', 'plugin:eslint-comments/recommended'],

  env: {
    browser: true,
    node: true,
  },

  rules: {
    semi: ['error', 'never'],
  },
}
