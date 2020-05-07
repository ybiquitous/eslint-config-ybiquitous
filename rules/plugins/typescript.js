module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],

  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error", // eslint-disable-line sort-keys
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-base-to-string": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error", // eslint-disable-line sort-keys
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unified-signatures": "error",
  },
};
