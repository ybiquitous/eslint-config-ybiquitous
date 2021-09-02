module.exports = {
  extends: ["plugin:regexp/recommended"],

  rules: {
    "regexp/hexadecimal-escape": "off",
    "regexp/letter-case": "off",
    "regexp/no-octal": "error",
    "regexp/no-standalone-backslash": "error",
    "regexp/no-super-linear-move": "warn",
    "regexp/prefer-escape-replacement-dollar-char": "error",
    "regexp/prefer-named-backreference": "error",
    "regexp/prefer-quantifier": "error",
    "regexp/prefer-regexp-exec": "error",
    "regexp/prefer-regexp-test": "error",
    "regexp/sort-alternatives": "off",
    "regexp/sort-character-class-elements": "warn",
    "regexp/unicode-escape": "off",
  },
};
