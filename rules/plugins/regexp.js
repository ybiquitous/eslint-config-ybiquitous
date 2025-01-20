const regexp = require("eslint-plugin-regexp");

module.exports = [
  regexp.configs["flat/recommended"],

  {
    rules: {
      "regexp/grapheme-string-literal": "off",
      "regexp/hexadecimal-escape": "off",
      "regexp/letter-case": "off",
      "regexp/no-contradiction-with-assertion": "error",
      "regexp/no-control-character": "error",
      "regexp/no-empty-character-class": "error",
      "regexp/no-extra-lookaround-assertions": "error",
      "regexp/no-misleading-capturing-group": "error",
      "regexp/no-misleading-unicode-character": "error",
      "regexp/no-missing-g-flag": "error",
      "regexp/no-octal": "error",
      "regexp/no-standalone-backslash": "error",
      "regexp/no-super-linear-move": "warn",
      "regexp/prefer-escape-replacement-dollar-char": "error",
      "regexp/prefer-lookaround": "error",
      "regexp/prefer-named-backreference": "error",
      "regexp/prefer-named-capture-group": "error",
      "regexp/prefer-named-replacement": "error",
      "regexp/prefer-quantifier": "error",
      "regexp/prefer-regexp-exec": "error",
      "regexp/prefer-regexp-test": "error",
      "regexp/prefer-result-array-groups": "error",
      "regexp/require-unicode-regexp": "error",
      "regexp/require-unicode-sets-regexp": "off",
      "regexp/sort-alternatives": "off",
      "regexp/sort-character-class-elements": "warn",
      "regexp/unicode-escape": "off",
      "regexp/unicode-property": "warn",
      "regexp/use-ignore-case": "warn",
    },
  },
];
