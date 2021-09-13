module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],

  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error", // eslint-disable-line sort-keys
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/init-declarations": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true, ignoreVoidOperator: true },
    ],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error", // eslint-disable-line sort-keys
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error", // eslint-disable-line sort-keys
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-require-imports": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error", // eslint-disable-line sort-keys
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off", // eslint-disable-line sort-keys
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unified-signatures": "error",
  },
};
