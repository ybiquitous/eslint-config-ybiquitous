module.exports = {
  env: {
    es6: true,
  },

  extends: "eslint:recommended",

  rules: {
    "accessor-pairs": "off",
    "array-callback-return": "error",
    "arrow-body-style": "warn",
    "block-scoped-var": "error",
    camelcase: ["error", { properties: "never" }],
    "capitalized-comments": "off",
    "class-methods-use-this": "warn",
    complexity: "warn",
    "consistent-return": "error",
    "consistent-this": "off",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "func-name-matching": ["error", { includeCommonJSModuleExports: true }],
    "func-names": ["error", "as-needed"],
    "func-style": "off",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "error",
    "logical-assignment-operators": "off",
    "max-classes-per-file": ["warn", 5],
    "max-depth": "warn",
    "max-lines": "warn",
    "max-lines-per-function": "warn",
    "max-nested-callbacks": "warn",
    "max-params": "warn",
    "max-statements": "warn",
    "max-statements-per-line": "warn",
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-div-regex": "off",
    "no-duplicate-imports": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-function": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "warn",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["warn", { props: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": [
      "error",
      /* eslint-disable sort-keys */
      { name: "isFinite", message: "Use `Number.isFinite` instead." },
      { name: "isNaN", message: "Use `Number.isNaN` instead." },
      { name: "alert", message: "Use `window.alert` instead." },
      { name: "confirm", message: "Use `window.confirm` instead." },
      { name: "location", message: "Use `window.location` instead." },
      /* eslint-enable sort-keys */
    ],
    "no-restricted-imports": "off",
    "no-restricted-properties": [
      "error",
      /* eslint-disable sort-keys */
      { object: "global", property: "isFinite", message: "Use `Number.isFinite` instead." },
      { object: "window", property: "isFinite", message: "Use `Number.isFinite` instead." },
      { object: "global", property: "isNaN", message: "Use `Number.isNaN` instead." },
      { object: "window", property: "isNaN", message: "Use `Number.isNaN` instead." },
      { object: "Math", property: "pow", message: "Use exponentiation operator (**) instead." },
      /* eslint-enable sort-keys */
    ],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": ["error", { allow: ["__dirname", "__filename"] }],
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-unused-expressions": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "object-shorthand": "error",
    "one-var": "off",
    "operator-assignment": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "warn",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "sort-imports": "off", // Use `import/order` instead.
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "error",
    strict: ["error", "never"],
    "symbol-description": "error",
    "vars-on-top": "error",
    yoda: "error",
  },
};
