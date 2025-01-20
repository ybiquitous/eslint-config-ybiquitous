const importPlugin = require("eslint-plugin-import");

const browser = require("./browser.js");
const jsxA11y = require("./rules/plugins/jsx-a11y.js");
const reactHooks = require("./rules/plugins/react-hooks.js");
const reactJsx = require("./rules/plugins/react-jsx.js");
const react = require("./rules/plugins/react.js");

module.exports = [
  ...browser,
  ...react,
  ...reactHooks,
  ...reactJsx,
  ...jsxA11y,
  importPlugin.flatConfigs.react,
];
