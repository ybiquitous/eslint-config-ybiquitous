module.exports = {
  extends: ['airbnb'],
  plugins: ['compat'],
  rules: {
    semi: ['error', 'never'],
    'compat/compat': 'error',
  },
  env: {
    browser: true,
    node: true,
  },
}
