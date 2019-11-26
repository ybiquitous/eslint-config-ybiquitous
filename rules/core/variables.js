const restrictedGlobals = require("eslint-restricted-globals");

module.exports = {
  rules: {
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": ["error", "isFinite", "isNaN", "alert"].concat(restrictedGlobals),
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
  },
};
