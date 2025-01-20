const importPlugin = require("eslint-plugin-import");

const core = require("./rules/core.js");
const compat = require("./rules/plugins/compat.js");
const eslintComments = require("./rules/plugins/eslint-comments.js");
const importPluginRules = require("./rules/plugins/import.js");
const jsxA11y = require("./rules/plugins/jsx-a11y.js");
const node = require("./rules/plugins/node.js");
const prettier = require("./rules/plugins/prettier.js");
const reactHooks = require("./rules/plugins/react-hooks.js");
const reactJsx = require("./rules/plugins/react-jsx.js");
const reactPlugin = require("./rules/plugins/react.js");
const regexp = require("./rules/plugins/regexp.js");
const typescript = require("./rules/plugins/typescript.js");

const recommended = [
  ...core,
  ...eslintComments,
  ...importPluginRules,
  ...regexp,
  ...prettier, // must be last

  {
    name: "ybiquitous/language-options",
    languageOptions: {
      ecmaVersion: 2022,
    },
  },
];

const nodeConfig = [...node];

const browserConfig = [...compat];

const reactConfig = [
  ...reactPlugin,
  ...reactHooks,
  ...reactJsx,
  ...jsxA11y,
  importPlugin.flatConfigs.react,
];

const typescriptConfig = [...typescript, importPlugin.flatConfigs.typescript];

module.exports = {
  configs: {
    recommended,
    node: nodeConfig,
    browser: browserConfig,
    react: reactConfig,
    typescript: typescriptConfig,
  },
};
