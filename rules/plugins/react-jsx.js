// NOTE: Other rules will be disabled by Prettier

module.exports = {
  extends: ["prettier/react"],

  rules: {
    "react/jsx-boolean-value": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": "error",
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/jsx-no-literals": "off",
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
