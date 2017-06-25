module.exports = {
  extends: ['airbnb'],
  plugins: ['compat', 'eslint-comments'],
  rules: {
    semi: ['error', 'never'],
    'compat/compat': 'error',
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': 'error',
  },
  env: {
    browser: true,
    node: true,
  },
}
