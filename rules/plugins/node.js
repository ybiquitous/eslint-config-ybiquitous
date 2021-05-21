module.exports = {
  env: {
    es2020: true,
  },

  extends: ["plugin:node/recommended-module"],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    "node/callback-return": "warn",
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": "off",
    "node/global-require": "off",
    "node/handle-callback-err": "warn",
    "node/no-callback-literal": "off",
    "node/no-mixed-requires": "off",
    "node/no-new-require": "warn",
    "node/no-path-concat": "error",
    "node/no-process-env": "off",
    "node/no-process-exit": "off",
    "node/no-restricted-import": "off",
    "node/no-restricted-require": "off",
    "node/no-sync": "off",
    "node/prefer-global/buffer": "error",
    "node/prefer-global/console": "error",
    "node/prefer-global/process": "error",
    "node/prefer-global/text-decoder": "error",
    "node/prefer-global/text-encoder": "error",
    "node/prefer-global/url": "error",
    "node/prefer-global/url-search-params": "error",
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
  },
};
