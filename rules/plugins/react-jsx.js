// NOTE: Other rules will be disabled by Prettier

module.exports = {
  rules: {
    "react/jsx-boolean-value": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": "error",
    "react/jsx-max-depth": ["warn", { max: 5 }],
    "react/jsx-newline": "off",
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off",
  },
};
