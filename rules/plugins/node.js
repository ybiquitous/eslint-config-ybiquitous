module.exports = {
  extends: ["plugin:node/recommended"],

  plugins: ["node"],

  // TODO: Overwrite because eslint-plugin-node@6.0.1 set `ecmaVersion: 8`
  // eslint-disable-next-line sort-keys
  parserOptions: {
    ecmaVersion: 2018,
  },
};
