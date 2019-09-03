module.exports = {
  extends: ["plugin:node/recommended"],
  rules: {
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": "off",
    "node/no-callback-literal": "off",
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
