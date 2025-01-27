// TODO: Remove FlatCompat.
const { FlatCompat } = require("@eslint/eslintrc"); // eslint-disable-line import/no-extraneous-dependencies, n/no-unpublished-require

const compat = new FlatCompat({ baseDirectory: __dirname }); // eslint-disable-line no-undef

module.exports = [...compat.extends("plugin:react-hooks/recommended")];
