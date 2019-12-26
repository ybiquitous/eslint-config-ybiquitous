module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],

  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/generic-type-naming": "off",
    "@typescript-eslint/member-naming": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-untyped-public-signature": "warn",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-array-sort-compare": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "error",
  },
};
