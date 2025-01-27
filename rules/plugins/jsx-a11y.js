const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = [
  jsxA11y.flatConfigs.recommended,

  {
    name: "ybiquitous/jsx-a11y",
    rules: {
      "jsx-a11y/lang": "error",
      "jsx-a11y/no-aria-hidden-on-focusable": "error",
      "jsx-a11y/prefer-tag-over-role": "error",
    },
  },
];
