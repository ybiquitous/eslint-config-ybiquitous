module.exports = {
  rules: {
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
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
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-use-before-define": "error",
  },
};
