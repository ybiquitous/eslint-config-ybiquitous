module.exports = {
  extends: ['airbnb'],

  plugins: ['eslint-comments'],

  env: {
    browser: true,
    node: true,
  },

  rules: {
    semi: ['error', 'never'],
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': 'off',
  },
}
