// NOTE: Other rules will be disabled by Prettier

module.exports = {
  rules: {
    camelcase: ["error", { properties: "never" }],
    "capitalized-comments": "off",
    "consistent-this": "off",
    "func-name-matching": [
      "error",
      "always",
      {
        includeCommonJSModuleExports: false,
      },
    ],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "expression"],
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": "error",
    "max-depth": "error",
    "max-lines": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": "error",
    "max-statements-per-line": "error",
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new-object": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-ternary": "off",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: false,
      },
    ],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": "off",
    "operator-assignment": "off",
    "padding-line-between-statements": "off",
    "require-jsdoc": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "error",
  },
};
