module.exports = {
  extends: ["plugin:n/recommended-module"],

  parserOptions: {
    ecmaVersion: 2022,
  },

  rules: {
    "n/callback-return": "warn",
    "n/exports-style": ["error", "module.exports"],
    "n/file-extension-in-import": "off",
    "n/global-require": "off",
    "n/handle-callback-err": "warn",
    "n/no-callback-literal": "off",
    "n/no-extraneous-import": "off", // Use `import/no-extraneous-dependencies` instead.
    "n/no-mixed-requires": "off",
    "n/no-new-require": "warn",
    "n/no-path-concat": "error",
    "n/no-process-env": "off",
    "n/no-process-exit": "off",
    "n/no-restricted-import": "off",
    "n/no-restricted-require": "off",
    "n/no-sync": "off",
    "n/prefer-global/buffer": "error",
    "n/prefer-global/console": "error",
    "n/prefer-global/process": "error",
    "n/prefer-global/text-decoder": "error",
    "n/prefer-global/text-encoder": "error",
    "n/prefer-global/url": "error",
    "n/prefer-global/url-search-params": "error",
    "n/prefer-node-protocol": "error",
    "n/prefer-promises/dns": "error",
    "n/prefer-promises/fs": "error",
  },
};
